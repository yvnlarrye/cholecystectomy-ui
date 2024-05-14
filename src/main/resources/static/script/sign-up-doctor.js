import { BASE_URL } from "./utils.js"

const registerButton = document.getElementById("registerButton")
const passwordInput = document.getElementById("password")
const emailInput = document.getElementById("email")
const nameInput = document.getElementById("fullName")
const jobSelect = document.getElementById("job-select")
const repeatPassword = document.getElementById("repeatPassword")
const passCheckerMessage = document.getElementById("passCheckerMessage")

let errorMessageElement = document.getElementById("err_msg")
const BAD_REQUEST = 400


registerButton.addEventListener('click', async function () {
    const request = await fetch(`${BASE_URL}/admin/doctor`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value,
            name: nameInput.value,
            jobId: jobSelect.value,
            sex: document.querySelector('input[name="sex"]:checked').value
        })
    })
    const response = await request.json()
    if (request.ok) {
        window.location.href = "/profile"
    } else if (request.status === BAD_REQUEST) {
        let errorOutput = ""
        response.errors.forEach(error => {
            errorOutput += '<i class="bi bi-dot me-2"></i>' + error + '.<br>'
        });
        errorMessageElement.innerHTML = errorOutput
    }
})

repeatPassword.addEventListener("input", () => {
    if (passwordInput.value == repeatPassword.value) {
        registerButton.disabled = false
    } else {
        registerButton.disabled = true
    }
})

repeatPassword.addEventListener("change", () => {
    if ((passwordInput.value == repeatPassword.value)) {
        passCheckerMessage.innerText = ""
    } else {
        passCheckerMessage.innerText = "Пароли не совпадают"
    }
})

async function getAllJobs() {
    const request = await fetch(`${BASE_URL}/jobs`, {
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

    throw new Error("Не удалось удалить пользователя")
}

async function initSignUpDoctor() {
    const response = await getAllJobs()
    let jobSelect = document.getElementById("job-select")
    response.jobs.forEach(job => {
        jobSelect.innerHTML += `
        <option value="${job.id}">${job.name}</option>
        `
    });
}


await initSignUpDoctor()