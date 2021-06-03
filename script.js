let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(num) {
  showSlides(slideIndex += num);
}

function recentSlide(num) {
  showSlides(slideIndex = num);
}

function showSlides(num) {
  let index;
  let slides = document.getElementsByClassName("slides");
  let slideCircle = document.getElementsByClassName("slideCircle");
  if (num > slides.length) {slideIndex = 1};
  if (num < 1) {slideIndex = slides.length};
  for (index = 0; index < slides.length; index++) {
    slides[index].style.display = "none";
  }
  for (index = 0; index < slideCircle.length; index++) {
    slideCircle[index].className = slideCircle[index].className.replace(" active", "");
  }
slides[slideIndex - 1].style.display = "block";
slideCircle[slideIndex - 1].className += " active";
}
//Responsive Navbar & Burger Menu
const hamburgerMenu = document.querySelector('#hamburger');
const navbarList = document.querySelector('#navbarList');
hamburgerMenu.addEventListener('click', toggleNavbarList);
function toggleNavbarList() {
  hamburgerMenu.classList.toggle('burger-menu--opened');
  navbarList.classList.toggle('navbar-closed');
}
//Current Year
let currentYear = document.querySelector("#currentYear");
let thisDay = new Date();
currentYear.innerText = thisDay.getFullYear();