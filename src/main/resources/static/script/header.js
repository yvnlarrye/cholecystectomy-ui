import { BASE_URL } from "./utils.js"
import { getUserInfo } from "./utils.js"

async function displayHeaderTemplate() {
    await fetch("/header.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById('header').innerHTML = html;
        })
        .catch(error => console.error('Ошибка загрузки файла:', error));
}


async function displayUserInfo() {
    var authSection = document.getElementById('auth-section')
    if (localStorage.getItem('token')) {
        const userInfoResponse = await getUserInfo()
        authSection.innerHTML = `
            <a href="/profile" class="btn btn-success nav-link me-3 align-items-center py-2 px-4">
                <span class="text-white me-1 fs-5">${userInfoResponse.name}</span>
                <i class="bi bi-person-fill fs-5 text-white"></i>
            </a>
            `
        return
       
    }
    authSection.innerHTML = `
            <a href="/sign-in" class="nav-link">
                <button type="button" class="btn btn-success">
                    Войти
                </button>
            </a>
            <a href="/sign-up" class="nav-link">
                <button type="button" class="btn btn-success ms-2">
                    Зарегистрироваться
                </button>
            </a>
            `
}

async function initHeader() {
    await displayHeaderTemplate()
    await displayUserInfo()
}

await initHeader()

