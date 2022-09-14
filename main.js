// Preloader js...
var preloader = document.getElementById("loading");

function myFunction() {
    preloader.style.display = 'none';
};

// Contact form by Google Sheet...
const inputs = document.querySelectorAll('#name,#email,#phone,#message');
var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault()
    fetch(form.action, {
        method: "post",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        alert('Successfull🎉 | We will contact you within 10 mins. Stay tuned 😃...')
    }).then(
        inputs.forEach(input => {
            input.value = ''; //Removing input data after submit
        })
    )
});