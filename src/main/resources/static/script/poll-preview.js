import { BASE_URL } from "./utils.js"
import { fullDateFormat } from "./utils.js"
import { getUserInfo } from "./utils.js"
import { getIdFromUrl } from "./utils.js"


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
    const pollId = getIdFromUrl()
    return await getPollById(pollId)
}

async function displayPollData() {
    const pollData = await getPollData()
    const userInfo = await getUserInfo()

    if (userInfo.id != pollData.patientId && userInfo.role != "ROLE_DOCTOR") {
        window.location.href = "/error"
        return
    }

    document.getElementById("patientId").innerText = pollData.patientId
    document.getElementById("createdAt").innerText = fullDateFormat(pollData.generalInformation.createdAt)
    document.getElementById("surname").innerText = pollData.surname
    document.getElementById("firstName").innerText = pollData.firstName
    document.getElementById("fatherName").innerText = pollData.fatherName
    document.getElementById("sex").innerText = pollData.sex

    let generalInformation = pollData.generalInformation

    document.getElementById("phoneNumber").innerText = generalInformation.phoneNumber
    document.getElementById("birthDate").innerText = fullDateFormat(generalInformation.birthDate)
    document.getElementById("age").innerText = generalInformation.age
    document.getElementById("address").innerText = generalInformation.address
    let pregnancySection = document.getElementById("pregnancy")
    if (pollData.sex == "Женский") {
        pregnancySection.innerHTML = `
        <td colspan="5" class="bg-success bg-opacity-10">
            <div class="d-flex flex-column">
                <div class="d-flex">
                    <span class="fw-bold me-1">Количество беременностей:</span>
                    <span id="numberOfPregnancies">${generalInformation.numberOfPregnancies}</span>
                </div>
                <div class="d-flex">
                    <span class="me-1 fw-bold">Количество родов:</span>
                    <span id="numberOfChildbirths">${generalInformation.numberOfChildbirths}</span>
                </div>
            </div>
        </td>
        `
    }

    document.getElementById("height").innerText = generalInformation.height
    document.getElementById("weight").innerText = generalInformation.weight
    document.getElementById("bodyMassIndex").innerText = generalInformation.bodyMassIndex
    document.getElementById("deathDate").innerText = generalInformation.deathDate

    let anamnesisOfLife = pollData.anamnesisOfLife

    document.getElementById("concomitantDiseases").innerText = anamnesisOfLife.concomitantDiseases
    document.getElementById("smoking").innerText = anamnesisOfLife.smoking
    document.getElementById("alcoholAbuse").innerText = anamnesisOfLife.alcoholAbuse
    document.getElementById("allergy").innerText = anamnesisOfLife.allergy
    
    let cholecystectomy = pollData.cholecystectomy
    document.getElementById("cholelithiasisDiagnosisDate").innerText = cholecystectomy.cholelithiasisDiagnosisDate
    document.getElementById("diseaseCourse").innerText = cholecystectomy.diseaseCourse
    document.getElementById("surgeryType").innerText = cholecystectomy.surgeryType
    document.getElementById("cholelithiasisOrder").innerText = cholecystectomy.cholelithiasisOrder
    document.getElementById("emergencyReason").innerText = cholecystectomy.emergencyReason
    document.getElementById("complicationsChronicEndometritis").innerText = cholecystectomy.complicationsChronicEndometritis
    document.getElementById("koykoDays").innerText = cholecystectomy.koykoDays
    document.getElementById("descriptionOfMacropreparation").innerText = cholecystectomy.descriptionOfMacropreparation
    document.getElementById("heredityIsBurdenedWithCholelithiasis").innerText = cholecystectomy.heredityIsBurdenedWithCholelithiasis
    
    let laboratoryInstrumentalResearchMethods = pollData.laboratoryInstrumentalResearchMethods
    document.getElementById("chestXray").innerText = laboratoryInstrumentalResearchMethods.chestXray
    document.getElementById("chestXrayDeviations").innerText = laboratoryInstrumentalResearchMethods.chestXrayDeviations
    document.getElementById("electrocardiography").innerText = laboratoryInstrumentalResearchMethods.electrocardiography
    document.getElementById("electrocardiographyDeviations").innerText = laboratoryInstrumentalResearchMethods.electrocardiographyDeviations
    document.getElementById("generalBloodAnalysis").innerText = laboratoryInstrumentalResearchMethods.generalBloodAnalysis
    document.getElementById("hemoglobin").innerText = laboratoryInstrumentalResearchMethods.hemoglobin
    document.getElementById("redBloodCells").innerText = laboratoryInstrumentalResearchMethods.redBloodCells
    document.getElementById("leukocytes").innerText = laboratoryInstrumentalResearchMethods.leukocytes
    document.getElementById("erythrocyteSedimentationRate").innerText = laboratoryInstrumentalResearchMethods.erythrocyteSedimentationRate
    document.getElementById("generalUrineAnalysis").innerText = laboratoryInstrumentalResearchMethods.generalUrineAnalysis
    document.getElementById("generalUrineAnalysisDeviations").innerText = laboratoryInstrumentalResearchMethods.generalUrineAnalysisDeviations
    document.getElementById("bloodType").innerText = laboratoryInstrumentalResearchMethods.bloodType
    document.getElementById("rhFactor").innerText = laboratoryInstrumentalResearchMethods.rhFactor
    document.getElementById("biochemicalStudies").innerText = laboratoryInstrumentalResearchMethods.biochemicalStudies
    document.getElementById("cholesterol").innerText = laboratoryInstrumentalResearchMethods.cholesterol
    document.getElementById("totalBilirubin").innerText = laboratoryInstrumentalResearchMethods.totalBilirubin
    document.getElementById("directBilirubin").innerText = laboratoryInstrumentalResearchMethods.directBilirubin
    document.getElementById("indirectBilirubin").innerText = laboratoryInstrumentalResearchMethods.indirectBilirubin
    document.getElementById("alt").innerText = laboratoryInstrumentalResearchMethods.alt
    document.getElementById("ast").innerText = laboratoryInstrumentalResearchMethods.ast
    document.getElementById("alkalinePhosphatase").innerText = laboratoryInstrumentalResearchMethods.alkalinePhosphatase
    document.getElementById("gammaGlutamylTransferase").innerText = laboratoryInstrumentalResearchMethods.gammaGlutamylTransferase
    document.getElementById("serumGlucose").innerText = laboratoryInstrumentalResearchMethods.serumGlucose
    document.getElementById("fibrogastroduodenoscopy").innerText = laboratoryInstrumentalResearchMethods.fibrogastroduodenoscopy
    document.getElementById("ultrasoundExaminationOfTheAbdominalOrgans").innerText = laboratoryInstrumentalResearchMethods.ultrasoundExaminationOfTheAbdominalOrgans
    
    let clinicalPart = pollData.clinicalPart
    document.getElementById("pain").innerText = clinicalPart.pain
    document.getElementById("localisation").innerText = clinicalPart.localisation
    document.getElementById("irradiation").innerText = clinicalPart.irradiation
    document.getElementById("durance").innerText = clinicalPart.durance
    document.getElementById("attacksOfBiliaryColic").innerText = clinicalPart.attacksOfBiliaryColic
    document.getElementById("epigastricDiscomfort").innerText = clinicalPart.epigastricDiscomfort
    document.getElementById("impairedToleranceToFattyFoods").innerText = clinicalPart.impairedToleranceToFattyFoods
    document.getElementById("nausea").innerText = clinicalPart.nausea
    document.getElementById("vomiting").innerText = clinicalPart.vomiting
    document.getElementById("bitternessInTheMouth").innerText = clinicalPart.bitternessInTheMouth
    document.getElementById("constipation").innerText = clinicalPart.constipation
    document.getElementById("diarrhea").innerText = clinicalPart.diarrhea
    document.getElementById("heartburn").innerText = clinicalPart.heartburn
    document.getElementById("sleepDisturbance").innerText = clinicalPart.sleepDisturbance
    document.getElementById("fever").innerText = clinicalPart.fever
    
}

await displayPollData()

