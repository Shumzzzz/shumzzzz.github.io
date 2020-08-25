setInterval(function showtime() {
    let now = new Date();
    let hours = now.getHours();
    if(hours < 10) {
        hours = `0${hours}`
    }
    let minutes = now.getMinutes();
    if(minutes < 10) {
        minutes = `0${minutes}`
    }
    let seconds = now.getSeconds();
    if(seconds < 10) {
        seconds = `0${seconds}`
    }
    let time = `${hours}:${minutes}:${seconds}`
    document.getElementById("time-here").innerHTML = time;
}, 500)
