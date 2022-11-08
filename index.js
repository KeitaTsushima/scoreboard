
let homeScore = 0
let guestScore = 0

const timeEl = document.getElementById("timeEl")

const homeScoreEl = document.getElementById("homeScoreEl")
const guestScoreEl = document.getElementById("guestScoreEl")

const homeButton1El = document.getElementById("homeButton1El")
const homeButton2El = document.getElementById("homeButton2El")
const homeButton3El = document.getElementById("homeButton3El")

const guestButton1El = document.getElementById("guestButton1El")
const guestButton2El = document.getElementById("guestButton2El")
const guestButton3El = document.getElementById("guestButton3El")

const newGameEl = document.getElementById("newGameEl")
const finishGameEl = document.getElementById("finishGameEl")

let startTime = []
let timeoutId = []


homeButton1El.addEventListener("click", () => {
    homeScore += 1
    homeScoreEl.textContent = homeScore
})
homeButton2El.addEventListener("click", () => {
    homeScore += 2
    homeScoreEl.textContent = homeScore
})
homeButton3El.addEventListener("click", () => {
    homeScore += 3
    homeScoreEl.textContent = homeScore
})
guestButton1El.addEventListener("click", () => {
    guestScore += 1
    guestScoreEl.textContent = guestScore
})
guestButton2El.addEventListener("click", () => {
    guestScore += 2
    guestScoreEl.textContent = guestScore
})
guestButton3El.addEventListener("click", () => {
    guestScore += 3
    guestScoreEl.textContent = guestScore
})

newGameEl.addEventListener("click", () => {
    homeButton1El.classList.remove("disabled")
    homeButton2El.classList.remove("disabled")
    homeButton3El.classList.remove("disabled")
    guestButton1El.classList.remove("disabled")
    guestButton2El.classList.remove("disabled")
    guestButton3El.classList.remove("disabled")
    finishGameEl.classList.remove("disabled")
    newGameEl.classList.add("disabled")
    homeScoreEl.classList.remove("winner")
    guestScoreEl.classList.remove("winner")

    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    
    startTime = new Date()
    displayTime()

})

finishGameEl.addEventListener("click", () => {
    clearTimeout(timeoutId)
    homeButton1El.classList.add("disabled")
    homeButton2El.classList.add("disabled")
    homeButton3El.classList.add("disabled")
    guestButton1El.classList.add("disabled")
    guestButton2El.classList.add("disabled")
    guestButton3El.classList.add("disabled")
    let result = homeScore - guestScore
    if (result > 0) {
        homeScoreEl.classList.add("winner")
    } else if (result < 0) {
        guestScoreEl.classList.add("winner")
    } else {
        return
    }

    finishGameEl.classList.add("disabled")
    newGameEl.classList.remove("disabled")
})

function displayTime() {
    const elapsedTime = new Date(Date.now() - startTime)
    const hh = String(elapsedTime.getHours()-9).padStart(2, "0")
    const mm = String(elapsedTime.getMinutes()).padStart(2, "0")
    const ss = String(elapsedTime.getSeconds()).padStart(2, "0")
    const ms = String(elapsedTime.getMilliseconds()).padStart(3, '0');
    timeEl.textContent = `${hh}:${mm}:${ss}.${ms}`;
    timeoutId = setTimeout(displayTime, 10)
}



