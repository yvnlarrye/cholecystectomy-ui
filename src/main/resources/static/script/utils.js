export const BASE_URL = "http://localhost:8080/api/v1"

export async function getPatientById(id) {
    const request = await fetch(`${BASE_URL}/patient/${id}`, {
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

    throw new Error("Не удалось получить данные пациента")
}

export async function getUserInfo() {
    const request = await fetch(`${BASE_URL}/user-info`, {
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

    throw new Error("Не удалось получить данные пользователя")
}

export async function getPatientPolls(patientId) {
    const request = await fetch(`${BASE_URL}/patient/${patientId}/polls`, {
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

    throw new Error("Не удалось назначить врача")
}

export function getAge(birthDateStr) {
    var birthDate = new Date(birthDateStr);
    var currentDate = new Date();
    var difference = currentDate - birthDate;
    return Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
}

export function formatDate(inputDate) {
    const date = new Date(inputDate);
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяцы в JavaScript начинаются с 0
    const year = date.getFullYear();
    const minuntes = date.getMinutes()
    const hours = date.getHours()

    return `${day}-${month}-${year} ${hours}:${minuntes}`;
}