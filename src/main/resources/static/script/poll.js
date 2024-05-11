import { getUserInfo } from "./utils.js"

const notAnswer = "Нет"
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


function initPoll() {
    isDeadInput.addEventListener("change", () => {
        deathDateInput.disabled = !deathDateInput.disabled
        if (isDeadInput.value == notAnswer) {
            deathDateInput.value = null
        }
    })

    if (patientInfo.sex == "MALE") {
        document.getElementById("pregnancy").hidden = true
    }

    presenceOfConcomitantDiseasesInput.addEventListener("change", () => {
        concomitantDiseasesInput.disabled = !concomitantDiseasesInput.disabled
        if (presenceOfConcomitantDiseasesInput.value == notAnswer) {
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


}

initPoll()