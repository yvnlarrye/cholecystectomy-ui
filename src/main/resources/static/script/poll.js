import { getUserInfo } from "./utils.js"

import * as pollInputs from "./poll-inputs.js"


const userInfo = await getUserInfo()
const patientId = userInfo.id


async function completePoll() {
    const request = await fetch(`http://localhost:8080/api/v1/poll`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: pollInputs.getPollBody()
    })

    if (request.ok) {
        window.location.href = "/poll/complete"
    }
}

async function start() {
    if (pollInputs.completeBtn) {
        pollInputs.completeBtn.addEventListener("click", completePoll)
    }
    await pollInputs.initPoll()
}

await start()