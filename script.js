const menuBtn = document.querySelector('.icon');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

function toggle() {
    const content = document.querySelector('.content')
    content.classList.toggle('active');
}


