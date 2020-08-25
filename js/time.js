setInterval(function showtime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let time = `${hours}:${minutes}:${seconds}`
    document.getElementById("time-here").innerHTML = time;
}, 1000)
