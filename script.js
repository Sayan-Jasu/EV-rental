const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=36f9be70cd0cd94edcf01375b6650ab6&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=36f9be70cd0cd94edcf01375b6650ab6&query=";

const b1 = document.querySelector("#home");
const b2 = document.querySelector("#about");
const b3 = document.querySelector("#rent");
const b4 = document.querySelector("#lease");
const bp = document.querySelector("#profile");
const bs = document.querySelector("#submit");
const bu = document.querySelector("#signUpBtn");
const bi = document.querySelector("#signInBtn");
const main = document.getElementById("section");


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
    document.getElementById("popup").style.display = "none";
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
    returnCars(APILINK);
    showSection("rentEV");
});

b4.addEventListener("click", function() {
    showSection("leaseEV");
    // openForm('lease');
});

bp.addEventListener("click", function() {
    showSection("profile");
});

bs.addEventListener("click", function() {
    closeAllForms();
});

function returnCars(url) {
    fetch(url).then(res => res.json())
        .then(function(data) {
            console.log(data.results);
            data.results.forEach(element => {
                const div_card = document.createElement('div');
                div_card.setAttribute('class', 'card');

                const div_row = document.createElement('div');
                div_row.setAttribute('class', 'row');

                const div_column = document.createElement('div');
                div_column.setAttribute('class', 'column');

                const image = document.createElement('img');
                image.setAttribute('class', 'thumbnail');
                image.setAttribute('id', 'image');

                const title = document.createElement('h3');
                title.setAttribute('id', 'title');

                const center = document.createElement('center');

                title.innerHTML = `${element.title}`;
                image.src = IMG_PATH + element.poster_path;

                center.appendChild(image);
                div_card.appendChild(center);
                div_card.appendChild(title);
                div_column.appendChild(div_card);
                div_row.appendChild(div_column);

                main.appendChild(div_row);
            });
        });
}
