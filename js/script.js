console.log("Siappa");
const buttons = document.querySelectorAll("menu > ul >li");
const section = document.querySelectorAll(".thumb");
buttons.forEach((item) => {
    item.addEventListener("click", () => {
        buttons.forEach((item) => {
            item.className = "";
        });
        item.className = "active";
        console.log("---------sdsd");
        console.log(item.className);
        let values = item.textContent;
        console.log(values);

        section.forEach((show) => {
            console.log("2" + show.getAttribute("data-id"));
            show.style.display = "none";
            console.log("3" + values);
            if (show.getAttribute("data-id") === values || values === "All") {
                show.style.display = "block";
                show.style.transition = "3.7s";
            }

            if (show.getAttribute("data-filter") === values) {
                show.style.display = "block";
                show.style.transition = "3.7s";
            }
        });
    });
});