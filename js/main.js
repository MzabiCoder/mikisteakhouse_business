$(document).ready(function () {
    $(window).scroll(function () { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
            $(".nav").css("background-color", "black"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".nav").css("background-color", "transparent"); // if not, change it back to transparent
        }
    });
});


const btn = document.querySelector('.hamgerberger')
const black = document.querySelector('.black');








let showMenu = false;
btn.addEventListener('click', e => {

    if (!showMenu) {

        black.classList.add('show')
        btn.classList.add('close')
        showMenu = true
    } else {
        black.classList.remove('show')
        btn.classList.remove('close')
        showMenu = false
    }
})