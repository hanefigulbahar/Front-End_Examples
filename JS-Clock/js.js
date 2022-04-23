let username = prompt("Please write your name")
let information = document.querySelector(".card-title");
let user = "User not found"





if (username.length > 0) {
    username = `${username[0].toUpperCase()}${username.slice(1).toLowerCase()}`
    information.innerHTML += username;
} else if (username.length <= 0) {
    information.innerHTML = user
};

let country = prompt("Write your country")
let clock = document.querySelector(".clock")
let notCountry = "Country not found"

let tarih = new Date();
let yil = tarih.getFullYear();
let ay = tarih.getMonth();
let gun = tarih.getDay();
let saat = tarih.getHours();
let dakika = tarih.getMinutes();
let saniye = tarih.getSeconds();



if (country.length > 0) {
    country = `${country[0].toUpperCase()}${country.slice(1).toLowerCase()}`
    clock.innerHTML = `${country} ${tarih}`
} else if (country.length <= 0) {
    clock.innerHTML = notCountry
};