var open = document.querySelector(".open-form");
var popup = document.querySelector(".open-popup");
var form = popup.querySelector(".search-form");
var date_arrival = popup.querySelector("[name=arrival]");
var date_departure = popup.querySelector("[name=departure]");
var adults = popup.querySelector("[name=col-adults]");
var children = popup.querySelector("[name=col-children]");

var isLocalStorage = typeof localStorage !== "undefined";
var storage_adults = (isLocalStorage) ? localStorage.getItem("adults") : 2;
var storage_children = (isLocalStorage) ? localStorage.getItem("children") : 0;

open.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("form-off");

    adults.value = storage_adults;
    children.value = storage_children;
});

form.addEventListener("submit", function(evt) {
    if (!date_arrival.value || !date_departure.value || !adults.value || !children.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
        setTimeout(function() {
            popup.classList.remove("modal-error");
        }, 1000);
    } else {
        if (isLocalStorage) {
            localStorage.setItem("adults", adults.value);
            localStorage.setItem("children", children.value);
        }
    }
});