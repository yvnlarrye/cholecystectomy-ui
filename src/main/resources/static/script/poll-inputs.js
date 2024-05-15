import { getIdFromUrl, getUserInfo, getPollById, getAge } from "./utils.js"


export let isDeadInput = document.getElementById("isDead")
export let deathDateInput = document.getElementById("deathDate")
export let presenceOfConcomitantDiseasesInput = document.getElementById("presenceOfConcomitantDiseases")
export let concomitantDiseasesInput = document.getElementById("concomitantDiseases")

export let cholelithiasisOrderInput = document.getElementById("cholelithiasisOrder")
export let emergencyReasonInput = document.getElementById("emergencyReason")
export let otherEmergencyReasonInput = document.getElementById("otherEmergencyReason")

export let presenceOfComplicationsChronicEndometritisInput = document.getElementById("presenceOfComplicationsChronicEndometritis")
export let complicationsChronicEndometritisInput = document.getElementById("complicationsChronicEndometritis")
export let otherComplicationsChronicEndometritisInput = document.getElementById("otherComplicationsChronicEndometritis")
export let descriptionOfMacropreparationInput = document.getElementById("descriptionOfMacropreparation")
export let otherDescriptionOfMacropreparationInput = document.getElementById("otherDescriptionOfMacropreparation")

export let painInput = document.getElementById("pain")
export let localisationInput = document.getElementById("localisation")
export let irradiationInput = document.getElementById("irradiation")
export let duranceInput = document.getElementById("durance")

export let chestXrayInput = document.getElementById("chestXray")
export let presenceOfChestXrayDeviationsInput = document.getElementById("presenceOfChestXrayDeviations")
export let chestXrayDeviationsInput = document.getElementById("chestXrayDeviations")

export let electrocardiographyInput = document.getElementById("electrocardiography")
export let presenseElectrocardiographyDeviationsInput = document.getElementById("presenseElectrocardiographyDeviations")
export let electrocardiographyDeviationsInput = document.getElementById("electrocardiographyDeviations")

export let generalBloodAnalysisInput = document.getElementById("generalBloodAnalysis")
export let hemoglobinInput = document.getElementById("hemoglobin")
export let redBloodCellsInput = document.getElementById("redBloodCells")
export let leukocytesInput = document.getElementById("leukocytes")
export let erythrocyteSedimentationRateInput = document.getElementById("erythrocyteSedimentationRate")

export let generalUrineAnalysisInput = document.getElementById("generalUrineAnalysis")
export let presenseGeneralUrineAnalysisDeviationsInput = document.getElementById("presenseGeneralUrineAnalysisDeviations")
export let generalUrineAnalysisDeviationsInput = document.getElementById("generalUrineAnalysisDeviations")

export let biochemicalStudiesInput = document.getElementById("biochemicalStudies")
export let biochemicalStudiesIndicatorsInput = document.getElementById("biochemicalStudiesIndicators")
export let constipationInput = document.getElementById("constipation")

export let cholesterolInput = document.getElementById("cholesterol")
export let totalBilirubinInput = document.getElementById("totalBilirubin")
export let directBilirubinInput = document.getElementById("directBilirubin")
export let indirectBilirubinInput = document.getElementById("indirectBilirubin")
export let altInput = document.getElementById("alt")
export let astInput = document.getElementById("ast")
export let alkalinePhosphataseInput = document.getElementById("alkalinePhosphatase")
export let gammaGlutamylTransferaseInput = document.getElementById("gammaGlutamylTransferase")
export let serumGlucoseInput = document.getElementById("serumGlucose")

export let weightInput = document.getElementById('weight')
export let heightInput = document.getElementById('height')
export let birthDateInput = document.getElementById('birthDate')
export let addressInput = document.getElementById('address')
export let phoneNumberInput = document.getElementById('phoneNumber')
export let numberOfPregnanciesInput = document.getElementById('numberOfPregnancies')
export let numberOfChildbirthsInput = document.getElementById('numberOfChildbirths')
export let smokingInput = document.getElementById('smoking')
export let alcoholAbuseInput = document.getElementById('alcoholAbuse')
export let allergyInput = document.getElementById('allergy')
export let cholelithiasisDiagnosisDateInput = document.getElementById('cholelithiasisDiagnosisDate')
export let diseaseCourseInput = document.getElementById('diseaseCourse')
export let surgeryTypeInput = document.getElementById('surgeryType')
export let heredityIsBurdenedWithCholelithiasisInput = document.getElementById('heredityIsBurdenedWithCholelithiasis')
export let koykoDaysInput = document.getElementById('koykoDays')
export let attacksOfBiliaryColicInput = document.getElementById('attacksOfBiliaryColic')
export let epigastricDiscomfortInput = document.getElementById('epigastricDiscomfort')
export let impairedToleranceToFattyFoodsInput = document.getElementById('impairedToleranceToFattyFoods')
export let nauseaInput = document.getElementById('nausea')
export let vomitingInput = document.getElementById('vomiting')
export let bitternessInTheMouthInput = document.getElementById('bitternessInTheMouth')
export let letipationInput = document.getElementById('export letipation')
export let diarrheaInput = document.getElementById('diarrhea')
export let heartburnInput = document.getElementById('heartburn')
export let sleepDisturbanceInput = document.getElementById('sleepDisturbance')
export let feverInput = document.getElementById('fever')
export let bloodTypeInput = document.getElementById('bloodType')
export let rhFactorInput = document.getElementById('rhFactor')
export let fibrogastroduodenoscopyInput = document.getElementById('fibrogastroduodenoscopy')
export let ultrasoundExaminationOfTheAbdominalOrgansInput = document.getElementById('ultrasoundExaminationOfTheAbdominalOrgans')

export let completeBtn = document.getElementById("complete-btn")
export let updateBtn = document.getElementById("save-poll-btn")


const userInfo = await getUserInfo()
var patientId = userInfo.id
var patientSex = userInfo.sex

if (userInfo.role != "ROLE_PATIENT") {
    const pollId = getIdFromUrl()
    const poll = await getPollById(pollId)
    patientId = poll.patientId
    patientSex = poll.sex
}


export function getPollBody() {
    let emergencyReason = emergencyReasonInput.value
    if (otherEmergencyReasonInput.value) {
        emergencyReason = otherEmergencyReasonInput.value
    }

    let complicationsChronicEndometritis = complicationsChronicEndometritisInput.value
    if (otherComplicationsChronicEndometritisInput.value) {
        complicationsChronicEndometritis = otherComplicationsChronicEndometritisInput.value
    }

    let descriptionOfMacropreparation = descriptionOfMacropreparationInput.value
    if (otherDescriptionOfMacropreparationInput.value) {
        descriptionOfMacropreparation = otherDescriptionOfMacropreparationInput.value
    }

    let bodyMassIndex = (heightInput) ?
        (weightInput.value / heightInput.value).toFixed(2) : null

    let resultData = {
        patientId: patientId,

        generalInformation: {
            birthDate: birthDateInput.value,
            deathDate: deathDateInput.value,
            age: getAge(birthDateInput.value),
            address: addressInput.value,
            phoneNumber: phoneNumberInput.value,
            numberOfPregnancies: numberOfPregnanciesInput.value,
            numberOfChildbirths: numberOfChildbirthsInput.value,
            weight: weightInput.value,
            height: heightInput.value,
            bodyMassIndex: bodyMassIndex,
        },

        anamnesisOfLife: {
            concomitantDiseases: concomitantDiseasesInput.value,
            smoking: smokingInput.value,
            alcoholAbuse: alcoholAbuseInput.value,
            allergy: allergyInput.value,
        },

        cholecystectomy: {
            cholelithiasisDiagnosisDate: cholelithiasisDiagnosisDateInput.value,
            diseaseCourse: diseaseCourseInput.value,
            surgeryType: surgeryTypeInput.value,
            cholelithiasisOrder: cholelithiasisOrderInput.value,
            emergencyReason: emergencyReason,
            complicationsChronicEndometritis: complicationsChronicEndometritis,
            koykoDays: koykoDaysInput.value,
            descriptionOfMacropreparation: descriptionOfMacropreparation,
            heredityIsBurdenedWithCholelithiasis: heredityIsBurdenedWithCholelithiasisInput.value,

        },

        clinicalPart: {
            pain: painInput.value,
            localisation: localisationInput.value,
            irradiation: irradiationInput.value,
            durance: duranceInput.value,
            attacksOfBiliaryColic: attacksOfBiliaryColicInput.value,
            epigastricDiscomfort: epigastricDiscomfortInput.value,
            impairedToleranceToFattyFoods: impairedToleranceToFattyFoodsInput.value,
            nausea: nauseaInput.value,
            vomiting: vomitingInput.value,
            bitternessInTheMouth: bitternessInTheMouthInput.value,
            constipation: constipationInput.value,
            diarrhea: diarrheaInput.value,
            heartburn: heartburnInput.value,
            sleepDisturbance: sleepDisturbanceInput.value,
            fever: feverInput.value,
        },

        laboratoryInstrumentalResearchMethods: {
            chestXray: chestXrayInput.value,
            chestXrayDeviations: chestXrayDeviationsInput.value,
            electrocardiography: electrocardiographyInput.value,
            electrocardiographyDeviations: electrocardiographyDeviationsInput.value,
            generalBloodAnalysis: generalBloodAnalysisInput.value,
            hemoglobin: hemoglobinInput.value,
            redBloodCells: redBloodCellsInput.value,
            leukocytes: leukocytesInput.value,
            erythrocyteSedimentationRate: erythrocyteSedimentationRateInput.value,
            generalUrineAnalysis: generalUrineAnalysisInput.value,
            generalUrineAnalysisDeviations: generalUrineAnalysisDeviationsInput.value,
            bloodType: bloodTypeInput.value,
            rhFactor: rhFactorInput.value,
            biochemicalStudies: biochemicalStudiesInput.value,
            cholesterol: cholesterolInput.value,
            totalBilirubin: totalBilirubinInput.value,
            directBilirubin: directBilirubinInput.value,
            indirectBilirubin: indirectBilirubinInput.value,
            alt: altInput.value,
            ast: astInput.value,
            alkalinePhosphatase: alkalinePhosphataseInput.value,
            gammaGlutamylTransferase: gammaGlutamylTransferaseInput.value,
            serumGlucose: serumGlucoseInput.value,
            fibrogastroduodenoscopy: fibrogastroduodenoscopyInput.value,
            ultrasoundExaminationOfTheAbdominalOrgans: ultrasoundExaminationOfTheAbdominalOrgansInput.value
        }
    }
    return JSON.stringify(resultData)
}

export async function initPoll() {
    const noAnswer = "Нет"
    const otherAnswer = "Другое"

    isDeadInput.addEventListener("change", () => {
        deathDateInput.disabled = !deathDateInput.disabled
        if (isDeadInput.value == noAnswer) {
            deathDateInput.value = null
        }
    })

    if (patientSex == "MALE") {
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