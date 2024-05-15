import { getIdFromUrl, getPollById, getUserInfo, reversedShortDateFormat } from "./utils.js"
import * as pollInputs from "./poll-inputs.js"


const yesAnswer = "Да"
const anotherAnswer = "Другое"

async function getPollData() {
    const pollId = getIdFromUrl()
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

    pollInputs.birthDateInput.value = reversedShortDateFormat(generalInformation.birthDate)
    if (generalInformation.deathDate) {
        let deathDate = pollInputs.deathDateInput
        pollInputs.isDeadInput.value = yesAnswer
        deathDate.disabled = false
        deathDate.value = reversedShortDateFormat(generalInformation.deathDate)
    }
    pollInputs.phoneNumberInput.value = generalInformation.phoneNumber
    pollInputs.addressInput.value = generalInformation.address

    pollInputs.numberOfPregnanciesInput.value = generalInformation.numberOfPregnancies
    pollInputs.numberOfChildbirthsInput.value = generalInformation.numberOfChildbirths

    pollInputs.heightInput.value = generalInformation.height
    pollInputs.weightInput.value = generalInformation.weight


    let anamnesisOfLife = pollData.anamnesisOfLife

    if (anamnesisOfLife.concomitantDiseases) {
        let concomitantDiseases = pollInputs.concomitantDiseasesInput
        pollInputs.presenceOfConcomitantDiseasesInput.value = yesAnswer
        concomitantDiseases.value = anamnesisOfLife.concomitantDiseases
        concomitantDiseases.disabled = false
    }

    pollInputs.smokingInput.value = anamnesisOfLife.smoking
    pollInputs.alcoholAbuseInput.value = anamnesisOfLife.alcoholAbuse
    pollInputs.allergyInput.value = anamnesisOfLife.allergy

    let cholecystectomy = pollData.cholecystectomy
    pollInputs.cholelithiasisDiagnosisDateInput.value = reversedShortDateFormat(cholecystectomy.cholelithiasisDiagnosisDate)
    pollInputs.diseaseCourseInput.value = cholecystectomy.diseaseCourse
    pollInputs.surgeryTypeInput.value = cholecystectomy.surgeryType
    pollInputs.cholelithiasisOrderInput.value = cholecystectomy.cholelithiasisOrder

    if (cholecystectomy.cholelithiasisOrder == "Экстренная") {
        let emergencyReason = pollInputs.emergencyReasonInput
        let otherEmergencyReason = pollInputs.otherEmergencyReasonInput
        otherEmergencyReason.value = cholecystectomy.emergencyReason
        otherEmergencyReason.disabled = false
        emergencyReason.value = anotherAnswer
        emergencyReason.disabled = false
    }

    if (cholecystectomy.complicationsChronicEndometritis) {
        let complicationsChronicEndometritis = pollInputs.complicationsChronicEndometritisInput
        let otherComplicationsChronicEndometritis = pollInputs.otherComplicationsChronicEndometritisInput
        otherComplicationsChronicEndometritis.value = cholecystectomy.complicationsChronicEndometritis
        otherComplicationsChronicEndometritis.disabled = false
        complicationsChronicEndometritis.value = anotherAnswer
        complicationsChronicEndometritis.disabled = false
    }

    pollInputs.koykoDaysInput.value = cholecystectomy.koykoDays

    pollInputs.descriptionOfMacropreparationInput.value = anotherAnswer
    let otherDescriptionOfMacropreparation = pollInputs.otherDescriptionOfMacropreparationInput
    otherDescriptionOfMacropreparation.value = cholecystectomy.descriptionOfMacropreparation
    otherDescriptionOfMacropreparation.disabled = false

    pollInputs.heredityIsBurdenedWithCholelithiasisInput.value = cholecystectomy.heredityIsBurdenedWithCholelithiasis

    let laboratoryInstrumentalResearchMethods = pollData.laboratoryInstrumentalResearchMethods

    if (laboratoryInstrumentalResearchMethods.chestXray) {
        pollInputs.chestXrayInput.value = yesAnswer
        let presenceOfChestXrayDeviations = pollInputs.presenceOfChestXrayDeviationsInput
        presenceOfChestXrayDeviations.disabled = false
        if (laboratoryInstrumentalResearchMethods.chestXrayDeviations) {
            presenceOfChestXrayDeviations.value = yesAnswer
            let chestXrayDeviations = pollInputs.chestXrayDeviationsInput
            chestXrayDeviations.disabled = false
            chestXrayDeviations.value = laboratoryInstrumentalResearchMethods.chestXrayDeviations
        }
    }

    if (laboratoryInstrumentalResearchMethods.electrocardiography) {
        pollInputs.electrocardiographyInput.value = yesAnswer
        let presenceOfElectrocardiographyDeviations = pollInputs.presenseElectrocardiographyDeviationsInput
        presenceOfElectrocardiographyDeviations.disabled = false
        if (laboratoryInstrumentalResearchMethods.electrocardiographyDeviations) {
            presenceOfElectrocardiographyDeviations.value = yesAnswer
            let electrocardiographyDeviations = pollInputs.electrocardiographyDeviationsInput
            electrocardiographyDeviations.disabled = false
            electrocardiographyDeviations.value = laboratoryInstrumentalResearchMethods.electrocardiographyDeviations
        }
    }

    let generalBloodAnalysis = pollInputs.generalBloodAnalysisInput
    if (laboratoryInstrumentalResearchMethods.generalBloodAnalysis) {
        generalBloodAnalysis.value = yesAnswer

        let hemoglobin = pollInputs.hemoglobinInput
        hemoglobin.disabled = false
        hemoglobin.value = laboratoryInstrumentalResearchMethods.hemoglobin

        let leukocytes = pollInputs.leukocytesInput
        leukocytes.disabled = false
        leukocytes.value = laboratoryInstrumentalResearchMethods.leukocytes

        let redBloodCells = pollInputs.redBloodCellsInput
        redBloodCells.disabled = false
        redBloodCells.value = laboratoryInstrumentalResearchMethods.redBloodCells

        let erythrocyteSedimentationRate = pollInputs.erythrocyteSedimentationRateInput
        erythrocyteSedimentationRate.disabled = false
        erythrocyteSedimentationRate.value = laboratoryInstrumentalResearchMethods.erythrocyteSedimentationRate
    }

    if (laboratoryInstrumentalResearchMethods.generalUrineAnalysis) {
        pollInputs.generalUrineAnalysisInput.value = yesAnswer
        let presenseGeneralUrineAnalysisDeviations = pollInputs.presenseGeneralUrineAnalysisDeviationsInput
        presenseGeneralUrineAnalysisDeviations.disabled = false
        if (laboratoryInstrumentalResearchMethods.generalUrineAnalysisDeviations) {
            presenseGeneralUrineAnalysisDeviations.value = yesAnswer
            let generalUrineAnalysisDeviations = pollInputs.generalUrineAnalysisDeviationsInput
            generalUrineAnalysisDeviations.disabled = false
            generalUrineAnalysisDeviations.value = laboratoryInstrumentalResearchMethods.generalUrineAnalysisDeviations
        }
    }

    pollInputs.bloodTypeInput.value = laboratoryInstrumentalResearchMethods.bloodType
    pollInputs.rhFactorInput.value = laboratoryInstrumentalResearchMethods.rhFactor
    pollInputs.biochemicalStudiesInput.value = laboratoryInstrumentalResearchMethods.biochemicalStudies

    if (laboratoryInstrumentalResearchMethods.biochemicalStudies == yesAnswer) {
        pollInputs.biochemicalStudiesIndicatorsInput.hidden = false
    }

    pollInputs.cholesterolInput.value = laboratoryInstrumentalResearchMethods.cholesterol
    pollInputs.totalBilirubinInput.value = laboratoryInstrumentalResearchMethods.totalBilirubin
    pollInputs.directBilirubinInput.value = laboratoryInstrumentalResearchMethods.directBilirubin
    pollInputs.indirectBilirubinInput.value = laboratoryInstrumentalResearchMethods.indirectBilirubin
    pollInputs.altInput.value = laboratoryInstrumentalResearchMethods.alt
    pollInputs.astInput.value = laboratoryInstrumentalResearchMethods.ast
    pollInputs.alkalinePhosphataseInput.value = laboratoryInstrumentalResearchMethods.alkalinePhosphatase
    pollInputs.gammaGlutamylTransferaseInput.value = laboratoryInstrumentalResearchMethods.gammaGlutamylTransferase
    pollInputs.serumGlucoseInput.value = laboratoryInstrumentalResearchMethods.serumGlucose
    pollInputs.fibrogastroduodenoscopyInput.value = laboratoryInstrumentalResearchMethods.fibrogastroduodenoscopy
    pollInputs.ultrasoundExaminationOfTheAbdominalOrgansInput.value = laboratoryInstrumentalResearchMethods.ultrasoundExaminationOfTheAbdominalOrgans

    let clinicalPart = pollData.clinicalPart

    let pain = pollInputs.painInput
    if (clinicalPart.pain) {
        pain.value = yesAnswer

        let localisation = pollInputs.localisationInput
        localisation.disabled = false
        localisation.value = clinicalPart.localisation

        let irradiation = pollInputs.irradiationInput
        irradiation.disabled = false
        irradiation.value = clinicalPart.irradiation

        let durance = pollInputs.duranceInput
        durance.disabled = false
        durance.value = clinicalPart.durance
    }

    pollInputs.attacksOfBiliaryColicInput.value = clinicalPart.attacksOfBiliaryColic
    pollInputs.epigastricDiscomfortInput.value = clinicalPart.epigastricDiscomfort
    pollInputs.impairedToleranceToFattyFoodsInput.value = clinicalPart.impairedToleranceToFattyFoods
    pollInputs.nauseaInput.value = clinicalPart.nausea
    pollInputs.vomitingInput.value = clinicalPart.vomiting
    pollInputs.bitternessInTheMouthInput.value = clinicalPart.bitternessInTheMouth
    pollInputs.constipationInput.value = clinicalPart.constipation
    pollInputs.diarrheaInput.value = clinicalPart.diarrhea
    pollInputs.heartburnInput.value = clinicalPart.heartburn
    pollInputs.sleepDisturbanceInput.value = clinicalPart.sleepDisturbance
    pollInputs.feverInput.value = clinicalPart.fever

}

async function updatePoll(id) {
    const request = await fetch(`http://localhost:8080/api/v1/poll/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: pollInputs.getPollBody()
    })

    if (request.ok) {
        window.location.href = "/poll/complete"
    }
}

async function start() {
    if (pollInputs.updateBtn) {
        pollInputs.updateBtn.addEventListener("click", async () => {
            const pollId = getIdFromUrl()
            await updatePoll(pollId)
        })
    }
    await pollInputs.initPoll()
    await displayPollData()
};

await start()
