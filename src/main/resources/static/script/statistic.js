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
    const data = await getStatistic()
    if (data) {
        await insertTable("statistic-table.html")
        // document.getElementById('femalePatientsCount').textContent = data.femalePatientsCount;
        // document.getElementById('femaleAvgAge').textContent = data.femaleAvgAge || '0';
        // document.getElementById('femaleAvgHeight').textContent = data.femaleAvgHeight || '0';
        // document.getElementById('femaleAvgWeight').textContent = data.femaleAvgWeight || '0';
        // document.getElementById('femaleAvgBodyMassIndex').textContent = data.femaleAvgBodyMassIndex || '0';
        // document.getElementById('femaleCountEmergencyCholelithiasisOrder').textContent = data.femaleCountEmergencyCholelithiasisOrder || '0';

        // document.getElementById('malePatientsCount').textContent = data.malePatientsCount;
        // document.getElementById('maleAvgAge').textContent = data.maleAvgAge || '0';
        // document.getElementById('maleAvgHeight').textContent = data.maleAvgHeight || '0';
        // document.getElementById('maleAvgWeight').textContent = data.maleAvgWeight || '0';
        // document.getElementById('maleAvgBodyMassIndex').textContent = data.maleAvgBodyMassIndex || '0';
        // document.getElementById('maleCountEmergencyCholelithiasisOrder').textContent = data.maleCountEmergencyCholelithiasisOrder || '0';

        for (var key in data) {
            if (data.hasOwnProperty(key)) {
              var element = document.getElementById(key);
              if (element) {
                // Обновляем содержимое ячейки
                element.textContent = data[key] || '0';
              }
            }
          }
    }
}

window.onload = async function () {
    await displayStatisticTable()
};
