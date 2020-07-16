// menu hamburger

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


// pop-up window Contact Form

function sendForm() {
    console.log('dziala');
    document.getElementById("change").innerHTML =
        '<div class="contact-form"><h1>Send us message</h1><hr><br/><div><label for="name">Your name</label><br /><input type="text" placeholder="Please enter your name here" id="name" required /><br /><label for="email">Your email</label><br /><input type="email" placeholder="Please enter your email address here" required /><br /><label for="message">Your message</label><br /><textarea id="message" placeholder="Please enter your message here" required></textarea><br /><button onClick="sendFormCompleted()">Send message</button></div></div> ';
}

function sendFormCompleted() {
    document.getElementById("change").innerHTML =
        '<div class="contact-form"><h1>Your message has been sent.<hr>Thank you for your interest on our services. We will be contacting you shortly. </h1></div> ';
}

const popUp = document.querySelector(".popUp");
const trigger = document.querySelector(".trigger");

const closeButton = document.querySelector(".close-button");

function togglePopUp() {
    popUp.classList.toggle("show-popUp");
}

function windowOnClick(event) {
    if (event.target === popUp) {
        togglePopUp();
    }
}

trigger.addEventListener("click", togglePopUp);

closeButton.addEventListener("click", togglePopUp);
window.addEventListener("click", windowOnClick);