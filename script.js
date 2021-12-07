const days = document.getElementById("Days")
const hours = document.getElementById("Hours")
const minutes = document.getElementById("Minutes")
const seconds = document.getElementById("Seconds")
const year = document.getElementById("year")
const loading = document.getElementById('loading')
const countdown = document.getElementById('count')

const currentYear = new Date().getFullYear();


const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

/*to Update countdown*/
function UpdateCounter() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;


    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;


    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;

}


//to update it every second
setInterval(UpdateCounter, 1000);

//show spinner before counting 
setTimeout(() => { loading.remove(); countdown.style.display = "flex" }, 1000)