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