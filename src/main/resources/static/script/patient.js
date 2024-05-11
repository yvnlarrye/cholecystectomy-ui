import { getPatientById } from "./utils.js";
import { BASE_URL } from "./utils.js";

function getPatientFromUrl() {
    const urlParts = window.location.href.split("/")
    return urlParts[urlParts.length - 1]
}

async function unassignPatient(patientId) {
    const request = await fetch(`${BASE_URL}/doctor/unassign`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            patient_id: patientId
        })
    })

    if (request.ok) {
        return await request.json()
    }

    throw new Error("Не удалось назначить врача")
}

async function displayPatientInfo() {
    const patientId = getPatientFromUrl()
    const patient = await getPatientById(patientId)

    document.getElementById("patient_id").innerText = patientId
    document.getElementById("info__email").innerText = patient.email
    document.getElementById("info__name").innerText = patient.name
    document.getElementById("info__sex").innerText = patient.sex

    let unassignPatientBtn = document.getElementById("unassign_patient")

    unassignPatientBtn.addEventListener("click", async () => {
        await unassignPatient(patientId)
        window.location.href = "/profile"
    })
}

async function assignQuiz() {

}



await displayPatientInfo()