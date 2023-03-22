const start = document.querySelector('.start')
const stop = document.querySelector('.stop')

const seconds = document.querySelector('.seconds')
const minutes = document.querySelector('.minutes')
const hours = document.querySelector('.hours')
const days = document.querySelector('.days')

const everything = document.querySelector('.everything')
const soon = document.querySelector('#soon')
const patience = document.querySelector('.patience')

let timerOnOff = true
let stopOnOff = true

let time1 = localStorage.getItem('time1')
let time2 = localStorage.getItem('time2')
let time3 = localStorage.getItem('time3')
let time4 = localStorage.getItem('time4')

//checking local storage
if(time1){
    seconds.innerHTML = time1
    minutes.innerHTML = time2
    hours.innerHTML = time3
    days.innerHTML = time4
}

//whole timer logic and setting local storage
function timer(){
    localStorage.setItem('time1', seconds.innerHTML.toString())
    localStorage.setItem('time2', minutes.innerHTML.toString())
    localStorage.setItem('time3', hours.innerHTML.toString())
    localStorage.setItem('time4', days.innerHTML.toString())
    if(seconds.innerHTML <= 0)
    seconds.innerHTML = 60
    seconds.innerHTML = parseInt(seconds.innerHTML) - 1
    if(seconds.innerHTML >= 59){
        minutes.innerHTML = parseInt(minutes.innerHTML) - 1
    }
    if(minutes.innerHTML < 0){
        minutes.innerHTML = 59
        hours.innerHTML = parseInt(hours.innerHTML) - 1
    }
    if(hours.innerHTML < 0){
        hours.innerHTML = 23
        days.innerHTML = parseInt(days.innerHTML) - 1
    }
    if(seconds.innerHTML <= 0 && minutes.innerHTML <= 00 && hours.innerHTML <= 00 && days.innerHTML <= 00){
        localStorage.setItem('hidden', 'hiddenYes')
        everything.classList.add('hidden')
        patience.classList.remove('hidden')
        soon.innerHTML = 'NOW!'
    }
}

//start btn
start.addEventListener('click', () =>{
    if(timerOnOff){
        czas = setInterval(timer, 1000)
    }

    timerOnOff = false
})

//stop btn
stop.addEventListener('click', () =>{
    if(czas){
        clearInterval(czas, 1000)
    }
    timerOnOff = true
})

//thanks for your patience local storage
let hidden = localStorage.getItem('hidden')

if(hidden === 'hiddenYes'){
    everything.classList.add('hidden')
    patience.classList.remove('hidden')
    soon.innerHTML = 'NOW!'
}


