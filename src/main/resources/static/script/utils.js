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
    return await fetch(`${BASE_URL}/user-info`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
}