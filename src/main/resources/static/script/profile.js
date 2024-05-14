import { getPatientById } from "./utils.js"
import { BASE_URL } from "./utils.js"
import { getUserInfo } from "./utils.js"
import { getPatientPolls } from "./utils.js"
import { fullDateFormat } from "./utils.js"


const ROLE_PATIENT = "ROLE_PATIENT"
const ROLE_DOCTOR = "ROLE_DOCTOR"


async function getDoctorById(id) {
    const request = await fetch(`${BASE_URL}/doctor/${id}`, {
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

    throw new Error("Не удалось получить данные врача")
}

async function getDoctorPatients(doctorId) {
    const request = await fetch(`${BASE_URL}/doctor/${doctorId}/patients`, {
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

    throw new Error("Не удалось получить данные врача")
}

async function getPatientsWithUnassignedDoctor() {
    const request = await fetch(`${BASE_URL}/patient/all/unassigned`, {
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

    throw new Error("Не удалось получить пациентов")
}


async function assignDoctorToPatient(patientId, doctorId) {
    const request = await fetch(`${BASE_URL}/doctor/assign`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            patient_id: patientId,
            doctor_id: doctorId
        })
    })

    if (request.ok) {
        return await request.json()
    }

    throw new Error("Не удалось назначить врача")
}

async function insertProfile(profileHtmlFileName) {
    await fetch(profileHtmlFileName)
        .then(response => response.text())
        .then(html => {
            document.getElementById('profile').innerHTML = html;
        })
        .catch(error => console.error('Ошибка загрузки файла:', error));
}


async function displayPatientProfile(id) {
    await insertProfile('patient_profile.html')

    const patient = await getPatientById(id)

    document.getElementById("patient_id").innerText = id
    document.getElementById("info__email").innerText = patient.email
    document.getElementById("info__name").innerText = patient.name
    document.getElementById("info__sex").innerText = patient.sex

    const doctorName = document.getElementById("doctor__name")
    const doctorJob = document.getElementById("doctor__job")
    if (patient.doctor) {
        doctorName.innerText = patient.doctor.name
        doctorJob.innerText = patient.doctor.jobName
    } else {
        doctorName.innerText = "Не назначен"
        doctorJob.innerText = "-"
    }


    if (patient.isPollAvailable) {
        document.getElementById("take-poll").innerHTML = `
            <a href="/poll" class="text-decoration-none nav-link">
                <button type="button" class="btn btn-success w-100" id="take-poll-btn">Пройти опрос</button>
            </a>
        `
    }


    let doctorBtn = document.getElementById("doctor-btn")
    let pollsBtn = document.getElementById("polls-btn")
    let patientTabContent = document.getElementById("patient-tab-content")

    doctorBtn.addEventListener("click", () => {
        if (!doctorBtn.classList.contains("active")) {
            doctorBtn.classList.add("active")
            pollsBtn.classList.remove("active")
            patientTabContent.innerHTML = `
            <div class="d-flex align-items-center">
                <span class="fs-5 fw-bold me-3">Имя:</span>
                <span class="fs-5" id="doctor__name">${patient.doctor.name}</span>
            </div>
            <div class="d-flex align-items-center">
                <span class="fs-5 fw-bold me-3">Специализация:</span>
                <span class="fs-5" id="doctor__job">${patient.doctor.jobName}</span>
            </div>
            `
        }
    })

    pollsBtn.addEventListener("click", async () => {
        if (!pollsBtn.classList.contains("active")) {
            pollsBtn.classList.add("active")
            doctorBtn.classList.remove("active")

            const patientPolls = await getPatientPolls(id)
            var pollsOutput = ""

            patientPolls.polls.forEach(poll => {
                pollsOutput += `
                <a href="/poll/${poll.id}" class="text-decoration-none text-dark">
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
    })

}

async function fillAddPatientsList() {
    const patientsWithUnassignedDoctor = await getPatientsWithUnassignedDoctor()

    if (patientsWithUnassignedDoctor.patients) {
        patientsWithUnassignedDoctor.patients.forEach(patient => {
            document.getElementById("add_patient_list").innerHTML += `
            <option value="${patient.id}">${patient.name}</option>
        `
        })
    }
}


async function displayDoctorProfile(id) {
    await insertProfile('doctor_profile.html')

    const doctor = await getDoctorById(id)
    const doctorPatientsResponse = await getDoctorPatients(id)

    await fillAddPatientsList()

    doctorPatientsResponse.patients.forEach(patient => {
        document.getElementById("patients-section").innerHTML += `
        <a href="/patient/${patient.id}" class="text-decoration-none text-dark">
            <div class="bg-light shadow-sm mb-3 border rounded-3">
                <div class="p-3 d-flex align-items-center justify-content-center w-100 h-100" id="patients-section">
                    <span class="fs-5">${patient.name}</span>
                </div>
            </div>
        </a>
        `
    })

    document.getElementById("info__email").innerText = doctor.email
    document.getElementById("info__name").innerText = doctor.name
    document.getElementById("info__sex").innerText = doctor.sex

    await displayAddPatientMenu(id)
}

async function displayAddPatientMenu(doctorId) {
    const addPatientBtn = document.getElementById("add_patient_btn")
    const patientSelect = document.getElementById("add_patient_list")
    patientSelect.addEventListener("change", () => {
        console.log(patientSelect.value)
        if (patientSelect.value == 0) {
            addPatientBtn.disabled = true
        } else {
            addPatientBtn.disabled = false
        }
    })

    addPatientBtn.addEventListener("click", async () => {
        await assignDoctorToPatient(patientSelect.value, doctorId)
        window.location.reload()
    })
}


async function initProfile() {
    const userInfo = await getUserInfo()

    if (userInfo.role == ROLE_PATIENT) {
        await displayPatientProfile(userInfo.id)
    } else if (userInfo.role == ROLE_DOCTOR) {
        await displayDoctorProfile(userInfo.id)
    }
    
    document.getElementById("logout").addEventListener("click", () => {
        localStorage.clear()
        window.location.href = "/"
    })
}

await initProfile()