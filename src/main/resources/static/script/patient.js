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

async function allowPoll(patientId) {
    const request = await fetch(`${BASE_URL}/doctor/allow-poll/${patientId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })

    if (request.ok) {
        return await request.json()
    }

    throw new Error("Не удалось дать доступ к опросу")
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

    let allowPollBtn = document.getElementById("allow-poll-btn")
    allowPollBtn.addEventListener("click", async () => {
        await allowPoll(patientId)
        allowPollBtn.disabled = true
        allowPollBtn.innerText = "Назначен"
    })

}

async function deletePoll(pollId) {
    const request = await fetch(`${BASE_URL}/poll/${pollId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })

    if (request.ok) {
        return await request.json()
    }

    throw new Error("Не удалось удалить опрос")
}

async function displayPolls(patientId) {
    let patientTabContent = document.getElementById("patient-tab-content")

    const patientPolls = await getPatientPolls(patientId)
    var pollsOutput = ""

    patientPolls.polls.forEach(poll => {
        pollsOutput += `
        <div class="row mb-3 px-3">
             <div class="col-9 bg-light shadow-sm border rounded-3">
                <a href="/poll/${poll.id}" class="text-decoration-none text-dark">
                    <div class="p-3 d-flex align-items-center justify-content-center w-100 h-100">
                        <span class="fs-5">${fullDateFormat(poll.generalInformation.createdAt)}</span>
                    </div>
                </a>
            </div>
            <div class="col-2 d-flex align-items-center">
                <a href="/edit-poll/${poll.id}" class="text-decoration-none text-dark me-2">
                    <button value="${poll.id}" type="button" class="btn btn-success update-poll-btn">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                </a>
                <button value="${poll.id}" type="button" class="btn btn-danger delete-poll-btn">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
        </div>
        
        `
    })
    patientTabContent.innerHTML = pollsOutput

    document.querySelectorAll(".delete-poll-btn").forEach(btn => {
        btn.addEventListener("click", async () => {
            await deletePoll(btn.value)
            window.location.reload()
        })
    })
}


async function initPatient() {
    const patientId = getPatientFromUrl()
    await displayPatientInfo(patientId)
    await displayPolls(patientId)
}



await initPatient()