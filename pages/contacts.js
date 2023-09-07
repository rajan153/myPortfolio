const menuIcon = document.getElementById("menuIcon");
const xMarkIcon = document.getElementById("xMarkIcon");
const options = document.getElementById("options2");
const home = document.querySelector(".home");
const work = document.querySelector(".work");
const contacts = document.querySelector(".contact");

home.addEventListener("click", openHomeFile);
work.addEventListener("click", openProjectFile);
contacts.addEventListener("click", openContactsFile);

// For Home
function openHomeFile() {
    window.open("../index.html", "_self");
}

// For Project
function openProjectFile() {
    window.open("./project.html", "_self");
}

// For About
function openContactsFile() {
    window.open("../pages/contacts.html", "_self");
}


// Function event listener  
menuIcon.addEventListener("click", () => {
    menuIcon.style.display = "none";
    options.style.display = "block";
    xMarkIcon.style.display = "block";
},false);

xMarkIcon.addEventListener("click", () => {
    xMarkIcon.style.display = "none";
    options.style.display = "none";
    menuIcon.style.display = "block";
},false);