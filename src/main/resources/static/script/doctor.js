import { getDoctorById } from "./utils.js"
import { getDoctorPatients } from "./utils.js"
import { getIdFromUrl } from "./utils.js"


async function displayDoctorProfile(id) {
    const doctor = await getDoctorById(id)
    const doctorPatientsResponse = await getDoctorPatients(id)

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
    document.getElementById("doctor-id").innerText = id
}

async function initDoctor() {
    const doctorId = getIdFromUrl()
    await displayDoctorProfile(doctorId)
}

await initDoctor()