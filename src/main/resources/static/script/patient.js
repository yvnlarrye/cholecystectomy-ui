import { getPatientById } from "./utils.js";
import { BASE_URL } from "./utils.js";
import { getPatientPolls } from "./utils.js";
import { fullDateFormat } from "./utils.js";

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

async function assignQuiz() {

}

async function displayPatientInfo(patientId) {
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

async function displayPolls(patientId) {
    let patientTabContent = document.getElementById("patient-tab-content")

    const patientPolls = await getPatientPolls(patientId)
    var pollsOutput = ""

    patientPolls.polls.forEach(poll => {
        pollsOutput += `
        <a href="/edit-poll/${poll.id}" class="text-decoration-none text-dark">
            <div class="bg-light shadow-sm mb-3 border rounded-3">
                <div class="p-3 d-flex align-items-center justify-content-center w-100 h-100" id="patients-section">
                    <span class="fs-5">${fullDateFormat(poll.generalInformation.createdAt)}</span>
                </div>
            </div>
        </a>
        `
    })
    patientTabContent.innerHTML = pollsOutput
}


async function initPatient() {
    const patientId = getPatientFromUrl()
    await displayPatientInfo(patientId)
    await displayPolls(patientId)
}



await initPatient()