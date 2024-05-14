import { BASE_URL } from "./utils.js"
import { shortDateFormat } from "./utils.js"
import { getUserInfo } from "./utils.js"
import { getPollIdFromUrl } from "./utils.js"

const yesAnswer = "Да"
const anotherAnswer = "Другое"


async function getPollById(pollId) {
    const request = await fetch(`${BASE_URL}/poll/${pollId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })

    if (request.ok) {
        return await request.json()
    }

    throw new Error("Не удалось получить данные опроса")
}

async function getPollData() {
    const pollId = getPollIdFromUrl()
    return await getPollById(pollId)
}

async function displayPollData() {
    const pollData = await getPollData()
    const userInfo = await getUserInfo()

    if (userInfo.role == "ROLE_PATIENT") {
        window.location.href = "/error"
        return
    }

    let generalInformation = pollData.generalInformation

    document.getElementById("birthDate").value = shortDateFormat(generalInformation.birthDate)
    if (generalInformation.deathDate) {
        let deathDate = document.getElementById("deathDate")
        document.getElementById("isDead").value = yesAnswer
        deathDate.disabled = false
        deathDate.value = shortDateFormat(generalInformation.deathDate)
    }
    document.getElementById("phoneNumber").value = generalInformation.phoneNumber
    document.getElementById("address").value = generalInformation.address

    document.getElementById("numberOfPregnancies").value = generalInformation.numberOfPregnancies
    document.getElementById("numberOfChildbirths").value = generalInformation.numberOfChildbirths

    document.getElementById("height").value = generalInformation.height
    document.getElementById("weight").value = generalInformation.weight


    let anamnesisOfLife = pollData.anamnesisOfLife

    if (anamnesisOfLife.concomitantDiseases) {
        let concomitantDiseases = document.getElementById("concomitantDiseases")
        document.getElementById("presenceOfConcomitantDiseases").value = yesAnswer
        concomitantDiseases.value = anamnesisOfLife.concomitantDiseases
        concomitantDiseases.disabled = false
    }

    document.getElementById("smoking").value = anamnesisOfLife.smoking
    document.getElementById("alcoholAbuse").value = anamnesisOfLife.alcoholAbuse
    document.getElementById("allergy").value = anamnesisOfLife.allergy
    
    let cholecystectomy = pollData.cholecystectomy
    document.getElementById("cholelithiasisDiagnosisDate").value = shortDateFormat(cholecystectomy.cholelithiasisDiagnosisDate)
    document.getElementById("diseaseCourse").value = cholecystectomy.diseaseCourse
    document.getElementById("surgeryType").value = cholecystectomy.surgeryType
    document.getElementById("cholelithiasisOrder").value = cholecystectomy.cholelithiasisOrder

    if (cholecystectomy.cholelithiasisOrder == "Экстренная") {
        let emergencyReason = document.getElementById("emergencyReason")
        let otherEmergencyReason = document.getElementById("otherEmergencyReason")
        otherEmergencyReason.value = cholecystectomy.emergencyReason
        otherEmergencyReason.disabled = false
        emergencyReason.value = anotherAnswer
        emergencyReason.disabled = false
    }

    if (cholecystectomy.complicationsChronicEndometritis) {
        let complicationsChronicEndometritis = document.getElementById("complicationsChronicEndometritis")
        let otherComplicationsChronicEndometritis = document.getElementById("otherComplicationsChronicEndometritis")
        otherComplicationsChronicEndometritis.value = cholecystectomy.complicationsChronicEndometritis
        otherComplicationsChronicEndometritis.disabled = false
        complicationsChronicEndometritis.value = anotherAnswer
        complicationsChronicEndometritis.disabled = false
    }

    document.getElementById("koykoDays").value = cholecystectomy.koykoDays

    document.getElementById("descriptionOfMacropreparation").value = anotherAnswer
    let otherDescriptionOfMacropreparation = document.getElementById("otherDescriptionOfMacropreparation")
    otherDescriptionOfMacropreparation.value = cholecystectomy.descriptionOfMacropreparation
    otherDescriptionOfMacropreparation.disabled = false

    document.getElementById("heredityIsBurdenedWithCholelithiasis").value = cholecystectomy.heredityIsBurdenedWithCholelithiasis
    
    let laboratoryInstrumentalResearchMethods = pollData.laboratoryInstrumentalResearchMethods

    if (laboratoryInstrumentalResearchMethods.chestXray) {
        document.getElementById("chestXray").value = yesAnswer
        let presenceOfChestXrayDeviations = document.getElementById("presenceOfChestXrayDeviations")
        presenceOfChestXrayDeviations.disabled = false
        if (laboratoryInstrumentalResearchMethods.chestXrayDeviations) {
            presenceOfChestXrayDeviations.value = yesAnswer
            let chestXrayDeviations = document.getElementById("chestXrayDeviations")
            chestXrayDeviations.disabled = false
            chestXrayDeviations.value = laboratoryInstrumentalResearchMethods.chestXrayDeviations
        }
    }

    if (laboratoryInstrumentalResearchMethods.electrocardiography) {
        document.getElementById("electrocardiography").value = yesAnswer
        let presenceOfElectrocardiographyDeviations = document.getElementById("presenseElectrocardiographyDeviations")
        presenceOfElectrocardiographyDeviations.disabled = false
        if (laboratoryInstrumentalResearchMethods.electrocardiographyDeviations) {
            presenceOfElectrocardiographyDeviations.value = yesAnswer
            let electrocardiographyDeviations = document.getElementById("electrocardiographyDeviations")
            electrocardiographyDeviations.disabled = false
            electrocardiographyDeviations.value = laboratoryInstrumentalResearchMethods.electrocardiographyDeviations
        }
    }

    let generalBloodAnalysis = document.getElementById("generalBloodAnalysis")
    if (laboratoryInstrumentalResearchMethods.generalBloodAnalysis) {
        generalBloodAnalysis.value = yesAnswer

        let hemoglobin = document.getElementById("hemoglobin")
        hemoglobin.disabled = false
        hemoglobin.value = laboratoryInstrumentalResearchMethods.hemoglobin

        let leukocytes = document.getElementById("leukocytes")
        leukocytes.disabled = false
        leukocytes.value = laboratoryInstrumentalResearchMethods.leukocytes
        
        let redBloodCells = document.getElementById("redBloodCells")
        redBloodCells.disabled = false
        redBloodCells.value = laboratoryInstrumentalResearchMethods.redBloodCells

        let erythrocyteSedimentationRate = document.getElementById("erythrocyteSedimentationRate")
        erythrocyteSedimentationRate.disabled = false
        erythrocyteSedimentationRate.value = laboratoryInstrumentalResearchMethods.erythrocyteSedimentationRate
    }

    if (laboratoryInstrumentalResearchMethods.generalUrineAnalysis) {
        document.getElementById("generalUrineAnalysis").value = yesAnswer
        let presenseGeneralUrineAnalysisDeviations = document.getElementById("presenseGeneralUrineAnalysisDeviations")
        presenseGeneralUrineAnalysisDeviations.disabled = false
        if (laboratoryInstrumentalResearchMethods.generalUrineAnalysisDeviations) {
            presenseGeneralUrineAnalysisDeviations.value = yesAnswer
            let generalUrineAnalysisDeviations = document.getElementById("generalUrineAnalysisDeviations")
            generalUrineAnalysisDeviations.disabled = false
            generalUrineAnalysisDeviations.value = laboratoryInstrumentalResearchMethods.generalUrineAnalysisDeviations
        }
    }

    document.getElementById("bloodType").value = laboratoryInstrumentalResearchMethods.bloodType
    document.getElementById("rhFactor").value = laboratoryInstrumentalResearchMethods.rhFactor
    document.getElementById("biochemicalStudies").value = laboratoryInstrumentalResearchMethods.biochemicalStudies

    if (laboratoryInstrumentalResearchMethods.biochemicalStudies) {
        document.getElementById("biochemicalStudiesIndicators").hidden = false
    }

    document.getElementById("cholesterol").value = laboratoryInstrumentalResearchMethods.cholesterol
    document.getElementById("totalBilirubin").value = laboratoryInstrumentalResearchMethods.totalBilirubin
    document.getElementById("directBilirubin").value = laboratoryInstrumentalResearchMethods.directBilirubin
    document.getElementById("indirectBilirubin").value = laboratoryInstrumentalResearchMethods.indirectBilirubin
    document.getElementById("alt").value = laboratoryInstrumentalResearchMethods.alt
    document.getElementById("ast").value = laboratoryInstrumentalResearchMethods.ast
    document.getElementById("alkalinePhosphatase").value = laboratoryInstrumentalResearchMethods.alkalinePhosphatase
    document.getElementById("gammaGlutamylTransferase").value = laboratoryInstrumentalResearchMethods.gammaGlutamylTransferase
    document.getElementById("serumGlucose").value = laboratoryInstrumentalResearchMethods.serumGlucose
    document.getElementById("fibrogastroduodenoscopy").value = laboratoryInstrumentalResearchMethods.fibrogastroduodenoscopy
    document.getElementById("ultrasoundExaminationOfTheAbdominalOrgans").value = laboratoryInstrumentalResearchMethods.ultrasoundExaminationOfTheAbdominalOrgans
    
    let clinicalPart = pollData.clinicalPart

    let pain = document.getElementById("pain")
    if (clinicalPart.pain) {
        pain.value = yesAnswer

        let localisation = document.getElementById("localisation")
        localisation.disabled = false
        localisation.value = clinicalPart.localisation

        let irradiation = document.getElementById("irradiation")
        irradiation.disabled = false
        irradiation.value = clinicalPart.irradiation
        
        let durance = document.getElementById("durance")
        durance.disabled = false
        durance.value = clinicalPart.durance
    }

    document.getElementById("attacksOfBiliaryColic").value = clinicalPart.attacksOfBiliaryColic
    document.getElementById("epigastricDiscomfort").value = clinicalPart.epigastricDiscomfort
    document.getElementById("impairedToleranceToFattyFoods").value = clinicalPart.impairedToleranceToFattyFoods
    document.getElementById("nausea").value = clinicalPart.nausea
    document.getElementById("vomiting").value = clinicalPart.vomiting
    document.getElementById("bitternessInTheMouth").innevaluerText = clinicalPart.bitternessInTheMouth
    document.getElementById("constipation").value = clinicalPart.constipation
    document.getElementById("diarrhea").ivaluennerText = clinicalPart.diarrhea
    document.getElementById("heartburn").value = clinicalPart.heartburn
    document.getElementById("sleepDisturbance").value = clinicalPart.sleepDisturbance
    document.getElementById("fever").value = clinicalPart.fever
}   

await displayPollData()

