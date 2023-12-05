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

document.getElementById("btnSignUp").addEventListener("click", function() {
    alert("Sign Up button clicked!");
    changeButtonColor("btnSignUp");
});

document.getElementById("btnSignIn").addEventListener("click", function() {
    alert("Sign In button clicked!");
    changeButtonColor("btnSignIn");
});

document.getElementById("btnRentEV").addEventListener("click", function() {
    alert("Rent EV button clicked!");
    changeButtonColor("btnRentEV");
});

document.getElementById("btnLeaseEV").addEventListener("click", function() {
    alert("Lease EV button clicked!");
    changeButtonColor("btnLeaseEV");
});

// Show rent and lease options after sign-in
document.addEventListener("DOMContentLoaded", function() {
    const rentLeaseOptions = document.getElementById("rentLeaseOptions");
    // For testing, always show the options
    rentLeaseOptions.style.display = "block";
});

function changeButtonColor(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.backgroundColor = "#FF5733"; // Change to a different color
}