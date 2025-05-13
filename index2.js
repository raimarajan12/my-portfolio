// JavaScript for Tab Switching
function opentab(tabname) {
    let tablinks = document.getElementsByClassName('tab-links');
    let tabcontents = document.getElementsByClassName('tab-contents');

    for (let tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// JavaScript for Form Submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbxod9H97xNxt-phx45kDm0bEGcfTChg-joB7-6D2kxN2XdpsLS5PJcIz4TQmlNAaslTow/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function() {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

// JavaScript for Menu Toggling
function showMenu() {
    document.getElementById("menu").style.right = "0";
}

function hideMenu() {
    document.getElementById("menu").style.right = "-200px";
}

// JavaScript for Parallax Effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    let offset = window.pageYOffset;
    header.style.backgroundPositionY = offset * 0.5 + "px";
});

// JavaScript for Smooth Scroll on 'See More' Button Click
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('see-more').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});
