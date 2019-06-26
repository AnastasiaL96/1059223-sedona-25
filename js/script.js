var open = document.querySelector(".open-form");
var popup = document.querySelector(".open-popup");
var form = popup.querySelector(".search-form");
var date_arrival = popup.querySelector("[name=arrival]");
var date_departure = popup.querySelector("[name=departure]");
var adults = popup.querySelector("[name=col-adults]");
var children = popup.querySelector("[name=col-children]");
var storage_adults = localStorage.getItem("adults");
var storage_children = localStorage.getItem("children");

open.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("form-off");
    popup.classList.remove("modal-error");
    if (storage) {
        adults.value = storage;
        children.value = storage;
    }
});

form.addEventListener("submit", function(evt) {
    if (!date_arrival.value || !date_departure.value || !adults.value || !children.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("adults", adults.value);
        localStorage.setItem("children", children.value);
    }
});