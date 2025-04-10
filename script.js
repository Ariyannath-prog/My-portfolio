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

mode.addEventListener("click", () => {
    if(current_mode === "light"){
        console.log("Light");
        mode.innerText = "Dark mode";
        current_mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("header").style.color = "white";
        document.querySelector("#about").style.backgroundColor = "black";
        document.querySelector("#about").style.color = "white";
        document.querySelector("#projects").style.backgroundColor = "black";
        document.querySelector("#projects").style.color = "white";
        document.querySelector("#certificates").style.backgroundColor = "black";
        document.querySelector("#certificates").style.color = "white";
        document.querySelectorAll(".c_main").forEach(function(element) {
            element.style.backgroundColor = "rgb(44, 44, 44)";
        });
        document.querySelector("#contact").style.backgroundColor = "black";
        document.querySelector("h2").style.color = "white";
        document.querySelectorAll(".contact_link").forEach(function(element) {
            element.style.color = "rgb(255, 255, 255)";
        });
        document.querySelector("nav").style.backgroundColor = "white";
        document.querySelectorAll(".resume").forEach(function(element) {
            element.style.color = "rgb(0, 0, 0)";
        });
        mode.style.backgroundColor = "black";
        mode.style.color = "white";
    }
    else{
        console.log("Dark");
        mode.innerText = "Light mode";
        current_mode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("header").style.color = "black";
        document.querySelector("nav").style.backgroundColor = "black";
        document.querySelector("#about").style.backgroundColor = "white";
        document.querySelector("#about").style.color = "black";
        document.querySelector("#projects").style.backgroundColor = "white";
        document.querySelector("#projects").style.color = "black";
        document.querySelector("#certificates").style.backgroundColor = "white";
        document.querySelector("#certificates").style.color = "black";
        document.querySelectorAll(".c_main").forEach(function(element) {
            element.style.backgroundColor = "rgb(218, 216, 216)";
        });
        document.querySelector("#contact").style.backgroundColor = "white";
        document.querySelector("h2").style.color = "black";

        document.querySelectorAll(".contact_link").forEach(function(element) {
            element.style.color = "rgb(0, 0, 0)";
        });
        document.querySelector("nav").style.backgroundColor = "black";
        document.querySelectorAll(".resume").forEach(function(element) {
            element.style.color = "rgb(255, 255, 255)";
        });
        mode.style.backgroundColor = "white";
        mode.style.color = "black";
    }
})