var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
//function for sticky navbar
function myFunction() {
 var stick = window.pageYOffset >= sticky ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
myFunction();