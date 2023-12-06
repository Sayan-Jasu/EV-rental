const b1 = document.querySelector("#home");
const b2 = document.querySelector("#about");
const b3 = document.querySelector("#rent");
const b4 = document.querySelector("#lease");
const bp = document.querySelector("#profile");
const bs = document.querySelector("#submit");
const bu = document.querySelector("#signUpBtn");
const bi = document.querySelector("#signInBtn");

document.addEventListener("DOMContentLoaded", function() {
    openPopup();
});

function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.body.style.overflow = "hidden";
}

function openForm(formId) {
    closeAllForms();
    document.getElementById(formId).style.display = "flex";
}

function closeAllForms() {
    var forms = document.getElementsByClassName("form-popup");
    for (var i = 0; i < forms.length; i++) {
        forms[i].style.display = "none";
    }
}

function showSection(sectionId) {
    var sections = document.querySelectorAll("main > div");
    sections.forEach(function(section) {
        section.style.display = "none";
    });

    document.querySelector(`main .${sectionId}`).style.display = "block";
}

// Event listeners for section buttons
b1.addEventListener("click", function() {
    showSection("home");
});

b2.addEventListener("click", function() {
    showSection("about");
});

b3.addEventListener("click", function() {
    showSection("rentEV");
});

b4.addEventListener("click", function() {
    showSection("leaseEV");
});

bp.addEventListener("click", function() {
    showSection("profile");
});
