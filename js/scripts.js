const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

function subscriptionAlert() {
    alert('THANK YOU FOR SUBSCRIBING! \n \nYou have been successfully added to our email list. \nWe will keep you up to date through the email you provided: ' + document.querySelector('.userinfo').value)
}