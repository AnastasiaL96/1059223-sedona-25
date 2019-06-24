var open = document.querySelector(".open-form");
var popup = document.querySelector(".search-form");
var form = popup.querySelector(".form-wrapper");
var date_arrival = popup.querySelector("[name=arrival]");
var date_departure = popup.querySelector("[name=departure]");
var adults = popup.querySelector("[name=col-adults]");
var children = popup.querySelector("[name=col-children]");
var storage = localStorage.getItem("adults");

open.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("form-off");
    if (storage) {
        adults.value = storage;
    }
});

form.addEventListener("submit", function(evt) {
    if (!date_arrival.value || !date_departure.value || !adults.value || !children.value) {
        evt.preventDefault();
        console.log("Необходимо полностью заполнить форму");
    } else {
        localStorage.setItem("adults", adults.value);
    }
});