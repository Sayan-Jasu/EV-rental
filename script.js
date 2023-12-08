// const LocalApiLink = 'http://localhost:3000';
const mainApiLink = 'https://car-rental-backend-6kq2.onrender.com';
const b1 = document.querySelector("#home");
const b2 = document.querySelector("#about");
const b3 = document.querySelector("#rent");
const b4 = document.querySelector("#lease");
const profileButton = document.querySelector("#profile");
const register = document.querySelector("#submitButton1");
const login = document.querySelector('#submitButton2');
const bu = document.querySelector("#signUpBtn");
const bi = document.querySelector("#signInBtn");
const main = document.getElementById("section");
const authenticate = {
    'signUpForm': 'register',
    'signInForm': 'login'
}


document.addEventListener("DOMContentLoaded", function() {
    openPopup();
});

function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.body.style.overflow = "hidden";
}

function openForm(formId) {
    const pointedForm = document.getElementById(formId);
    pointedForm.style.display = 'flex';
    pointedForm.addEventListener('submit', async (event)=>{
        event.preventDefault();
        const data={};
        const inputFields = document.querySelectorAll(#${formId} .box input);
        for (let i = 0; i < inputFields.length; i++) {
            const element = inputFields[i];
            const fieldName = element.getAttribute('name');
            data[fieldName] = element.value;
        }
        try {
            const {data:{token}} = await axios.post(${mainApiLink}/api/v1/auth/${authenticate[formId]},{
                data
            });
            localStorage.setItem('token', token);
            closeAllForms();
        } catch (error) {
            console.log(error);
        }
    })
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
    document.querySelector(main .${sectionId}).style.display = "block";
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

profileButton.addEventListener("click", async function() {
    const token = localStorage.getItem('token');
    const {data:userData} = await axios.get(${mainApiLink}/api/v1/user, {
        headers:{
            'Authorization': Bearer ${token}
        }
    })
    const dataField = ['name', 'emailId', 'username'];
    const userDetail = document.querySelectorAll('.userDetails h3');
    for (let i = 0; i < 3; i++) {
        userDetail[i].textContent = ${dataField[i]}: ${userData[dataField[i]]};
    }

    const {data : {results}} = await axios.get(${mainApiLink}/api/v1/user/product,{
        headers:{
            'Authorization': Bearer ${token}
        }
    });

    const itemImages = document.querySelectorAll('.itemDetails img');
    const itemPrice = document.querySelectorAll('.items h3');

    for (let i = 0; i < results.length; i++) {
        itemImages[i].setAttribute('src', results[i].image);
        itemPrice[i].textContent = results[i].price;
    }
    showSection('profile');
});
