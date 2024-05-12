import { getUserInfo } from "./utils.js"

const noAnswer = "Нет"
const yesAnswer = "Да"
const otherAnswer = "Другое"

const patientInfo = await (await getUserInfo()).json()

const isDeadInput = document.getElementById("isDead")
const deathDateInput = document.getElementById("deathDate")
const presenceOfConcomitantDiseasesInput = document.getElementById("presenceOfConcomitantDiseases")
const concomitantDiseasesInput = document.getElementById("concomitantDiseases")

const cholelithiasisOrderInput = document.getElementById("cholelithiasisOrder")
const emergencyReasonInput = document.getElementById("emergencyReason")
const otherEmergencyReasonInput = document.getElementById("otherEmergencyReason")

const presenceOfComplicationsChronicEndometritisInput = document.getElementById("presenceOfComplicationsChronicEndometritis")
const complicationsChronicEndometritisInput = document.getElementById("complicationsChronicEndometritis")
const otherComplicationsChronicEndometritisInput = document.getElementById("otherComplicationsChronicEndometritis")
const descriptionOfMacropreparationInput = document.getElementById("descriptionOfMacropreparation")
const otherDescriptionOfMacropreparationInput = document.getElementById("otherDescriptionOfMacropreparation")

const painInput = document.getElementById("pain")
const localisationInput = document.getElementById("localisation")
const irradiationInput = document.getElementById("irradiation")
const duranceInput = document.getElementById("durance")

const chestXrayInput = document.getElementById("chestXray")
const presenceOfChestXrayDeviationsInput = document.getElementById("presenceOfChestXrayDeviations")
const chestXrayDeviationsInput = document.getElementById("chestXrayDeviations")

const electrocardiographyInput = document.getElementById("electrocardiography")
const presenseElectrocardiographyDeviationsInput = document.getElementById("presenseElectrocardiographyDeviations")
const electrocardiographyDeviationsInput = document.getElementById("electrocardiographyDeviations")

const generalBloodAnalysisInput = document.getElementById("generalBloodAnalysis")
const hemoglobinInput = document.getElementById("hemoglobin")
const redBloodCellsInput = document.getElementById("redBloodCells")
const leukocytesInput = document.getElementById("leukocytes")
const erythrocyteSedimentationRateInput = document.getElementById("erythrocyteSedimentationRate")

const generalUrineAnalysisInput = document.getElementById("generalUrineAnalysis")
const presenseGeneralUrineAnalysisDeviationsInput = document.getElementById("presenseGeneralUrineAnalysisDeviations")
const generalUrineAnalysisDeviationsInput = document.getElementById("generalUrineAnalysisDeviations")

const biochemicalStudiesInput = document.getElementById("biochemicalStudies")
const biochemicalStudiesIndicatorsInput = document.getElementById("biochemicalStudiesIndicators")


const cholesterolInput = document.getElementById("cholesterol")
const totalBilirubinInput = document.getElementById("totalBilirubin")
const directBilirubinInput = document.getElementById("directBilirubin")
const indirectBilirubinInput = document.getElementById("indirectBilirubin")
const altInput = document.getElementById("alt")
const astInput = document.getElementById("ast")
const alkalinePhosphataseInput = document.getElementById("alkalinePhosphatase")
const gammaGlutamylTransferaseInput = document.getElementById("gammaGlutamylTransferase")
const serumGlucoseInput = document.getElementById("serumGlucose")



function initPoll() {
    isDeadInput.addEventListener("change", () => {
        deathDateInput.disabled = !deathDateInput.disabled
        if (isDeadInput.value == noAnswer) {
            deathDateInput.value = null
        }
    })

    if (patientInfo.sex == "MALE") {
        document.getElementById("pregnancy").hidden = true
    }

    presenceOfConcomitantDiseasesInput.addEventListener("change", () => {
        concomitantDiseasesInput.disabled = !concomitantDiseasesInput.disabled
        if (presenceOfConcomitantDiseasesInput.value == noAnswer) {
            concomitantDiseasesInput.value = null
        }
    })

    cholelithiasisOrderInput.addEventListener("change", () => {
        emergencyReasonInput.value = null
        otherEmergencyReasonInput.value = null

        emergencyReasonInput.disabled = !emergencyReasonInput.disabled
        otherEmergencyReasonInput.disabled = true
    })

    emergencyReasonInput.addEventListener("change", () => {
        if (emergencyReasonInput.value == otherAnswer) {
            otherEmergencyReasonInput.disabled = false
        } else {
            otherEmergencyReasonInput.disabled = true
            otherEmergencyReasonInput.value = null
        }
    })

    presenceOfComplicationsChronicEndometritisInput.addEventListener("change", () => {
        complicationsChronicEndometritisInput.value = null
        otherComplicationsChronicEndometritisInput.value = null

        complicationsChronicEndometritisInput.disabled = !complicationsChronicEndometritisInput.disabled
        otherComplicationsChronicEndometritisInput.disabled = true
    })

    complicationsChronicEndometritisInput.addEventListener("change", () => {
        if (complicationsChronicEndometritisInput.value == otherAnswer) {
            otherComplicationsChronicEndometritisInput.disabled = false
        } else {
            otherComplicationsChronicEndometritisInput.disabled = true
            otherComplicationsChronicEndometritisInput.value = null
        }
    })

    descriptionOfMacropreparationInput.addEventListener("change", () => {
        if (descriptionOfMacropreparationInput.value == otherAnswer) {
            otherDescriptionOfMacropreparationInput.disabled = false
        } else {
            otherDescriptionOfMacropreparationInput.value = null
            otherDescriptionOfMacropreparationInput.disabled = true
        }
    })

    painInput.addEventListener("change", () => {
        localisationInput.disabled = !localisationInput.disabled
        irradiationInput.disabled = !irradiationInput.disabled
        duranceInput.disabled = !duranceInput.disabled

        if (presenceOfConcomitantDiseasesInput.value == noAnswer) {
            localisationInput.value = null
            irradiationInput.value = null
            duranceInput.value = null
        }
    })

    chestXrayInput.addEventListener("change", () => {
        presenceOfChestXrayDeviationsInput.disabled = !presenceOfChestXrayDeviationsInput.disabled

        if (chestXrayInput.value == noAnswer) {
            presenceOfChestXrayDeviationsInput.value = noAnswer
            chestXrayDeviationsInput.value = null
            chestXrayDeviationsInput.disabled = true
        }
    })

    presenceOfChestXrayDeviationsInput.addEventListener("change", () => {
        chestXrayDeviationsInput.disabled = !chestXrayDeviationsInput.disabled
        if (presenceOfChestXrayDeviationsInput.value == noAnswer) {
            chestXrayDeviationsInput.value = null
        }
    })

    electrocardiographyInput.addEventListener("change", () => {
        presenseElectrocardiographyDeviationsInput.disabled = !presenseElectrocardiographyDeviationsInput.disabled

        if (electrocardiographyInput.value == noAnswer) {
            presenseElectrocardiographyDeviationsInput.value = noAnswer
            electrocardiographyDeviationsInput.value = null
            electrocardiographyDeviationsInput.disabled = true
        }
    })

    presenseElectrocardiographyDeviationsInput.addEventListener("change", () => {
        electrocardiographyDeviationsInput.disabled = !electrocardiographyDeviationsInput.disabled
        if (presenseElectrocardiographyDeviationsInput.value == noAnswer) {
            electrocardiographyDeviationsInput.value = null
        }
    })

    generalBloodAnalysisInput.addEventListener("change", () => {
        hemoglobinInput.disabled = !hemoglobinInput.disabled
        redBloodCellsInput.disabled = !redBloodCellsInput.disabled
        leukocytesInput.disabled = !leukocytesInput.disabled
        erythrocyteSedimentationRateInput.disabled = !erythrocyteSedimentationRateInput.disabled

        if (generalBloodAnalysisInput.value == noAnswer) {
            hemoglobinInput.value = null
            redBloodCellsInput.value = null
            leukocytesInput.value = null
            erythrocyteSedimentationRateInput.value = null
        }
    })

    generalUrineAnalysisInput.addEventListener("change", () => {
        presenseGeneralUrineAnalysisDeviationsInput.disabled = !presenseGeneralUrineAnalysisDeviationsInput.disabled

        if (generalUrineAnalysisInput.value == noAnswer) {
            presenseGeneralUrineAnalysisDeviationsInput.value = noAnswer
            generalUrineAnalysisDeviationsInput.value = null
            generalUrineAnalysisDeviationsInput.disabled = true
        }
    })

    presenseGeneralUrineAnalysisDeviationsInput.addEventListener("change", () => {
        generalUrineAnalysisDeviationsInput.disabled = !generalUrineAnalysisDeviationsInput.disabled
        if (presenseGeneralUrineAnalysisDeviationsInput.value == noAnswer) {
            generalUrineAnalysisDeviationsInput.value = null
        }
    })

    biochemicalStudiesInput.addEventListener("change", () => {
        biochemicalStudiesIndicatorsInput.hidden = !biochemicalStudiesIndicatorsInput.hidden

        cholesterolInput.value = null
        totalBilirubinInput.value = null
        directBilirubinInput.value = null
        indirectBilirubinInput.value = null
        altInput.value = null
        astInput.value = null
        alkalinePhosphataseInput.value = null
        gammaGlutamylTransferaseInput.value = null
        serumGlucoseInput.value = null

    })


}

function getAge(birthDateStr) {
    var birthDate = new Date(birthDateStr);
    var currentDate = new Date();
    var difference = currentDate - birthDate;
    return Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
}


async function getPollData() {
    const patientId = patientInfo.id
    const fullName = patientInfo.name.split(" ")
    const firstName = fullName[1]
    const secondName = fullName[0]
    const fathersName = fullName[2]
    const sex = (patientInfo.sex == "MALE") ? "Мужской" : "Женский"
    const birthDate = document.getElementById("birthDateInput").value
    const isDead = document.getElementById("isDead").value
    const deathDate = deathDateInput.value
    const age = getAge(birthDate)
    const address = document.getElementById("address").value
    const phoneNumber = document.getElementById("phoneNumber").value
    const numberOfPregnancies = document.getElementById("numberOfPregnancies").value
    const numberOfChildbirths = document.getElementById("numberOfChildbirths").value
    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value
    const bodyMassIndex = weight / height
    const presenceOfConcomitantDiseases = presenceOfConcomitantDiseasesInput.value
    const concomitantDiseases = concomitantDiseasesInput.value
    const smoking = document.getElementById("smoking").value
    const alcoholAbuse = document.getElementById("alcoholAbuse").value
    const allergy = document.getElementById("allergy").value
    const cholelithiasisDiagnosisDate = document.getElementById("cholelithiasisDiagnosisDate").value
    const diseaseCourse = document.getElementById("diseaseCourse").value
    const surgeryType = document.getElementById("surgeryType").value
    const cholelithiasisOrder = document.getElementById("cholelithiasisOrder").value

    const emergencyReason = emergencyReasonInput.value
    if (otherEmergencyReasonInput.value) {
        emergencyReason = otherEmergencyReasonInput.value
    }

    const presenceOfComplicationsChronicEndometritis = presenceOfComplicationsChronicEndometritisInput.value
    const complicationsChronicEndometritis = complicationsChronicEndometritis.value
    if (otherComplicationsChronicEndometritisInput.value) {
        complicationsChronicEndometritis = otherComplicationsChronicEndometritisInput.value
    }

    const koykoDays = document.getElementById("koykoDays").value

    const descriptionOfMacropreparation = descriptionOfMacropreparationInput.value
    if (otherDescriptionOfMacropreparationInput.value) {
        descriptionOfMacropreparation = otherDescriptionOfMacropreparationInput.value
    }

    const heredityIsBurdenedWithCholelithiasis = document.getElementById("heredityIsBurdenedWithCholelithiasis").value

    const pain = painInput.value
    const localisation = localisationInput.value
    const irradiation = irradiationInput.value
    const durance = duranceInput.value

    const attacksOfBiliaryColic = document.getElementById("attacksOfBiliaryColic").value
    const epigastricDiscomfort = document.getElementById("epigastricDiscomfort").value
    const impairedToleranceToFattyFoods = document.getElementById("impairedToleranceToFattyFoods").value
    const nausea = document.getElementById("nausea").value
    const vomiting = document.getElementById("vomiting").value
    const bitternessInTheMouth = document.getElementById("bitternessInTheMouth").value
    const constipation = document.getElementById("constipation").value
    const diarrhea = document.getElementById("diarrhea").value
    const heartburn = document.getElementById("heartburn").value
    const sleepDisturbance = document.getElementById("sleepDisturbance").value
    const fever = document.getElementById("fever").value

    const chestXray = chestXrayInput.value
    const chestXrayDeviations = chestXrayDeviationsInput.value
    const electrocardiography = electrocardiographyInput.value
    const electrocardiographyDeviations = electrocardiographyDeviationsInput.value

    const generalBloodAnalysis = document.getElementById("generalBloodAnalysis").value
    const hemoglobin = document.getElementById("hemoglobin").value
    const redBloodCells = document.getElementById("redBloodCells").value
    const leukocytes = document.getElementById("leukocytes").value
    const erythrocyteSedimentationRate = document.getElementById("erythrocyteSedimentationRate").value

    const generalUrineAnalysis = generalUrineAnalysisInput.value
    const generalUrineAnalysisDeviations = generalUrineAnalysisDeviationsInput.value

    const bloodType = document.getElementById("bloodType").value
    const rhFactor = document.getElementById("rhFactor").value

    const biochemicalStudies = biochemicalStudiesInput.value
    const cholesterol = cholesterolInput.value
    const totalBilirubin = totalBilirubinInput.value
    const directBilirubin = directBilirubinInput.value
    const indirectBilirubin = indirectBilirubinInput.value
    const alt = altInput.value
    const ast = astInput.value
    const alkalinePhosphatase = alkalinePhosphataseInput.value
    const gammaGlutamylTransferase = gammaGlutamylTransferaseInput.value
    const serumGlucose = serumGlucoseInput.value

    const fibrogastroduodenoscopy = document.getElementById("fibrogastroduodenoscopy").value
    const ultrasoundExaminationOfTheAbdominalOrgans = document.getElementById("ultrasoundExaminationOfTheAbdominalOrgans").value

}

initPoll()