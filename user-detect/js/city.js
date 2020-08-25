window.onload = function () {
    country = ymaps.geolocation.country;
    region = ymaps.geolocation.region;
    city = ymaps.geolocation.city;
    userGeo = `${country}, ${region}, ${city}`
    document.getElementById("userGeo").innerHTML = userGeo;   
}