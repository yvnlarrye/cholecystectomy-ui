import { BASE_URL } from "./utils.js"

async function insertTable(tableFileName) {
    await fetch(tableFileName)
        .then(response => response.text())
        .then(html => {
            document.getElementById('statistic-table').innerHTML = html;
        })
        .catch(error => console.error('Ошибка загрузки файла:', error));
}



async function getStatistic() {
    const request = await fetch(`${BASE_URL}/statistic`, {
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

    return null
}

async function displayStatisticTable() {
    if(!localStorage.getItem("token")) {
        return
    }
    const data = await getStatistic()
    if (data) {
        await insertTable("statistic-table.html")
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
              var element = document.getElementById(key);
              if (element) {
                element.textContent = data[key] || '0';
              }
            }
        }
    }
}

window.onload = async function () {
    await displayStatisticTable()
};
