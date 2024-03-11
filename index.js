//to manupalate elements 

const hourEl = document.getElementById("hour");

const minuteEl = document.getElementById("minute");

const secondEl = document.getElementById("second");

const ampmEl = document.getElementById("ampm");

//create a function to get the current time and format the current time according to the current time zone.

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    h = h<10 ? "0"+ h : h;
    m = m<10? "0"+ m : m;
    s = s<10? "0"+ s : s;

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerHTML = s;
    ampmEl.innerText = ampm;
    
    //to call every second update clock

    setTimeout(updateClock, 1000);
}
updateClock();

