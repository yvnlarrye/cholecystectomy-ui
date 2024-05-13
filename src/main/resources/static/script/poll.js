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

const completeBtn = document.getElementById("complete-btn")



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

    completeBtn.addEventListener("click", async () => {
        await completePoll()
    })

}

function getAge(birthDateStr) {
    var birthDate = new Date(birthDateStr);
    var currentDate = new Date();
    var difference = currentDate - birthDate;
    return Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
}


function getPollData() {
    const fullName = patientInfo.name.split(" ")

    let emergencyReason = emergencyReasonInput.value
    if (otherEmergencyReasonInput.value) {
        emergencyReason = otherEmergencyReasonInput.value
    }

    // const presenceOfComplicationsChronicEndometritis = presenceOfComplicationsChronicEndometritisInput.value
    let complicationsChronicEndometritis = complicationsChronicEndometritisInput.value
    if (otherComplicationsChronicEndometritisInput.value) {
        complicationsChronicEndometritis = otherComplicationsChronicEndometritisInput.value
    }

    let descriptionOfMacropreparation = descriptionOfMacropreparationInput.value
    if (otherDescriptionOfMacropreparationInput.value) {
        descriptionOfMacropreparation = otherDescriptionOfMacropreparationInput.value
    }
    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value

    let resultData = {
        patientId: patientInfo.id,

        generalInformation: {
            birthDate: document.getElementById("birthDate").value,
            deathDate: deathDateInput.value,
            age: getAge(document.getElementById("birthDate").value),
            address: document.getElementById("address").value,
            phoneNumber: document.getElementById("phoneNumber").value,
            numberOfPregnancies: document.getElementById("numberOfPregnancies").value,
            numberOfChildbirths: document.getElementById("numberOfChildbirths").value,
            weight: weight,
            height: height,
            bodyMassIndex: weight / height,
        },
        
        // presenceOfConcomitantDiseases: presenceOfConcomitantDiseasesInput.value,
        anamnesisOfLife: {
            concomitantDiseases: concomitantDiseasesInput.value,
            smoking: document.getElementById("smoking").value,
            alcoholAbuse: document.getElementById("alcoholAbuse").value,
            allergy: document.getElementById("allergy").value,
        },

        cholecystectomy: {
            cholelithiasisDiagnosisDate: document.getElementById("cholelithiasisDiagnosisDate").value,
            diseaseCourse: document.getElementById("diseaseCourse").value,
            surgeryType: document.getElementById("surgeryType").value,
            cholelithiasisOrder: document.getElementById("cholelithiasisOrder").value,
            emergencyReason: emergencyReason,
            complicationsChronicEndometritis: complicationsChronicEndometritis,
            koykoDays: document.getElementById("koykoDays").value,
            descriptionOfMacropreparation: descriptionOfMacropreparation,
            heredityIsBurdenedWithCholelithiasis: document.getElementById("heredityIsBurdenedWithCholelithiasis").value,

        },

        clinicalPart: {
            pain: painInput.value,
            localisation: localisationInput.value,
            irradiation: irradiationInput.value,
            durance: duranceInput.value,
            attacksOfBiliaryColic: document.getElementById("attacksOfBiliaryColic").value,
            epigastricDiscomfort: document.getElementById("epigastricDiscomfort").value,
            impairedToleranceToFattyFoods: document.getElementById("impairedToleranceToFattyFoods").value,
            nausea: document.getElementById("nausea").value,
            vomiting: document.getElementById("vomiting").value,
            bitternessInTheMouth: document.getElementById("bitternessInTheMouth").value,
            constipation: document.getElementById("constipation").value,
            diarrhea: document.getElementById("diarrhea").value,
            heartburn: document.getElementById("heartburn").value,
            sleepDisturbance: document.getElementById("sleepDisturbance").value,
            fever: document.getElementById("fever").value,
        },

        laboratoryInstrumentalResearchMethods: {
            chestXray: chestXrayInput.value,
            chestXrayDeviations: chestXrayDeviationsInput.value,
            electrocardiography: electrocardiographyInput.value,
            electrocardiographyDeviations: electrocardiographyDeviationsInput.value,
            generalBloodAnalysis: document.getElementById("generalBloodAnalysis").value,
            hemoglobin: document.getElementById("hemoglobin").value,
            redBloodCells: document.getElementById("redBloodCells").value,
            leukocytes: document.getElementById("leukocytes").value,
            erythrocyteSedimentationRate: document.getElementById("erythrocyteSedimentationRate").value,
            generalUrineAnalysis: generalUrineAnalysisInput.value,
            generalUrineAnalysisDeviations: generalUrineAnalysisDeviationsInput.value,
            bloodType: document.getElementById("bloodType").value,
            rhFactor: document.getElementById("rhFactor").value,
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
            fibrogastroduodenoscopy: document.getElementById("fibrogastroduodenoscopy").value,
            ultrasoundExaminationOfTheAbdominalOrgans: document.getElementById("ultrasoundExaminationOfTheAbdominalOrgans").value
        }
    }
    return JSON.stringify(resultData)
}


async function completePoll() {
    const request = await fetch(`http://localhost:8080/api/v1/poll`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: getPollData()
    })

    if (request.ok) {
        window.location.href = "/poll/complete"
    }
}


initPoll()