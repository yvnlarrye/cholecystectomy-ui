const registerButton = document.getElementById("registerButton")
const passwordInput = document.getElementById("password")
const emailInput = document.getElementById("email")
const nameInput = document.getElementById("fullName")
const repeatPassword = document.getElementById("repeatPassword")
const passCheckerMessage = document.getElementById("passCheckerMessage")

let errorMessageElement = document.getElementById("err_msg")
const BAD_REQUEST = 400


registerButton.addEventListener('click', async function () {
    const request = await fetch(`http://localhost:8080/api/v1/auth/sign-up`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
        },
        body: JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value,
            name: nameInput.value,
            sex: document.querySelector('input[name="sex"]:checked').value
        })
    })
    const response = await request.json()
    console.log(response)
    if (request.ok) {
        localStorage.setItem("token", response.token)
        localStorage.setItem("name", response.name)
        localStorage.setItem("email", response.email)

        window.location.href = "/"
    } else if (request.status === BAD_REQUEST) {
        let errorOutput = ""
        response.errors.forEach(error => {
            errorOutput += '<i class="bi bi-dot me-2"></i>' + error + '.<br>'
        });

        errorMessageElement.innerHTML = errorOutput
    }
})

if (localStorage.token) {
    window.location.href = "/"
}

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