setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondRadio = currentDate.getSeconds() / 60
    const minuteRadio = (secondRadio + currentDate.getMinutes()) / 60
    const hourRadio = (minuteRadio + currentDate.getHours()) / 12 
    setRotation(secondHand, secondRadio)
    setRotation(minuteHand, minuteRadio)
    setRotation(hourHand, hourRadio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()