
const nav = document.querySelectorAll("ul.nav > li>a");

for (var i = 0; i < nav.length; i++) {
    nav[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", " ");
        this.className += "active";
    });
}

function toggle() {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
}