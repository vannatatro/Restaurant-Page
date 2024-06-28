import "./style.css";
import loadHome from "./pages/loadHome";
import loadMenu from "./pages/loadMenu";
import loadAbout from "./pages/loadAbout";
import clearContent from "./functions/clearContent"
content.onload = loadHome();

// home
let homeButton = document.getElementById('home');
homeButton.addEventListener('click', (e) => {
    e.preventDefault;
    clearContent()
    loadHome()
})

// menu

let menuButton = document.getElementById('menu');
menuButton.addEventListener('click', (e) => {
    e.preventDefault;
    clearContent()
    loadMenu()
})

// about
let aboutBtn = document.getElementById('about')
aboutBtn.addEventListener('click', (event) => {
    event.preventDefault(),
    clearContent()
    loadAbout()
})