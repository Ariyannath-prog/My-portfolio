document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});

let mode = document.querySelector("#mode");
let current_mode = "light";
let body = document.querySelector("body");
let sec = document.querySelectorAll("section");
let footer_text = document.querySelectorAll(".link_text");

mode.addEventListener("click", () => {
    if(current_mode === "light"){
        console.log("Light");
        mode.innerText = "Dark mode";
        current_mode = "dark";
        document.querySelector("header").style.color = "white";
        document.querySelectorAll(".c_main").forEach(function(element) {
            element.style.backgroundColor = "rgb(44, 44, 44)";
        });
        document.querySelectorAll(".contact_link").forEach(function(element) {
            element.style.color = "rgb(255, 255, 255)";
        });
        document.querySelector("nav").style.backgroundColor = "white";
        document.querySelectorAll(".resume").forEach(function(element) {
            element.style.color = "rgb(0, 0, 0)";
        });
        mode.style.backgroundColor = "black";
        mode.style.color = "white";
        body.style.backgroundColor = "black";
        sec.forEach(function(element) {
            element.style.backgroundColor = "rgba(36, 36, 36, 1)";
        });
        sec.forEach(function(element) {
            element.style.color = "rgb(255, 255, 255)";
        });
        footer_text.forEach(function(element){
            element.style.color = "white";
        });
    } 
    else{
        console.log("Dark");
        mode.innerText = "Light mode";
        current_mode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("header").style.color = "black";
        document.querySelector("nav").style.backgroundColor = "#227C9D";
        document.querySelectorAll(".c_main").forEach(function(element) {
            element.style.backgroundColor = "rgb(218, 216, 216)";
        });
        document.querySelectorAll(".contact_link").forEach(function(element) {
            element.style.color = "rgb(0, 0, 0)";
        });
        document.querySelector("nav").style.backgroundColor = "rgb(34, 124, 157)";
        document.querySelectorAll(".resume").forEach(function(element) {
            element.style.color = "rgb(255, 255, 255)";
        });
        mode.style.backgroundColor = "white";
        mode.style.color = "black";
        body.style.backgroundColor = "white";
        sec.forEach(function(element) {
            element.style.backgroundColor = "#fff4f4";
        });
        sec.forEach(function(element) {
            element.style.color = "rgb(0, 0, 0)";
        });
        footer_text.forEach(function(element){
            element.style.color = "black";
        });
    }
})