const loginButton = document.getElementById("loginButton")
const passwordInput = document.getElementById("password")
const emailInput = document.getElementById("email")
let errorMessageElement = document.getElementById("err_msg")
const BAD_REQUEST = 400


loginButton.addEventListener('click', async function () {
    const request = await fetch(`http://localhost:8080/api/v1/auth/sign-in`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
        },
        body: JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value,
        })
    })

    if (request.ok) {
        const response = await request.json()
        localStorage.setItem("token", response.token)
        localStorage.setItem("name", response.name)
        localStorage.setItem("email", response.email)
        window.location.href = "/"
    } else if (request.status === BAD_REQUEST) {
        errorMessageElement.innerText = "Неверный логин или пароль"
    }
})

if (localStorage.token) {
    window.location.href = "/"
}

