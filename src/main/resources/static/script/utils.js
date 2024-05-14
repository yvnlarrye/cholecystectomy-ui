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

export function shortDateFormat(inputDate) {
    if(!inputDate) {
        return null
    }

    const date = new Date(inputDate);
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
}

export function fullDateFormat(inputDate) {
    if(!inputDate) {
        return null
    }

    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

    return formattedDate;
}

export function getIdFromUrl() {
    const urlParts = window.location.href.split("/")
    return urlParts[urlParts.length - 1]
}

export async function deleteUser(id) {
    const request = await fetch(`${BASE_URL}/admin/user/${id}`, {
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

    throw new Error("Не удалось удалить пользователя")
}

export async function getDoctorById(id) {
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
    
export async function getDoctorPatients(doctorId) {
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