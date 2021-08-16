// Function handler menu "burger"

var x = document.getElementById("burger");
x.addEventListener("click", myFunction);

function myFunction() {
    var element = document.getElementById("menu_main");
    element.classList.toggle("open");
    x.classList.toggle("burger_active");
}

//<script src="js/main.js"></script>