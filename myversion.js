const settings = document.querySelector('.settings')
const settingsBtn = document.querySelector('.settings-btn')
const imageSection = document.querySelector('.image-section')

const eventName = document.querySelector('#event-name')
const eventDay = document.querySelector('#event-day')
const eventMonth = document.querySelector('#event-month')
const eventYear = document.querySelector('#event-year')
const eventImg = document.querySelector('#event-image')

const daysCount = document.querySelector('.days-count')
const hoursCount = document.querySelector('.hours-count')
const minutesCount = document.querySelector('.minutes-count')
const secondsCount = document.querySelector('.seconds-count')

const saveBtn = document.querySelector('.save')
const eventSpan = document.querySelector('.event')


const openSettings = () => {
    settings.classList.toggle('active');
}

const changeEvent = () => {
    eventSpan.textContent = eventName.value;
    timeCount();
    imageSection.style.backgroundImage = `url('${eventImg.value}')`;   
}

const timeCount = () => {
    let currentDate = new Date();
    let eventDate = new Date(`${eventYear.value}, ${eventMonth.value}, ${eventDay.value}`);
    let difference = eventDate - currentDate;

    const days = Math.floor(difference/1000/60/60/24);
    const hours = Math.floor(difference/1000/60/60) %24;
    const minutes = Math.floor(difference/1000/60) %60;
    const seconds = Math.floor(difference/1000) %60;

    daysCount.textContent = days
    hoursCount.textContent = hours
    minutesCount.textContent = minutes
    secondsCount.textContent = seconds
}


settingsBtn.addEventListener('click', openSettings)
saveBtn.addEventListener('click', changeEvent)
setInterval(timeCount, 1000); 
timeCount();