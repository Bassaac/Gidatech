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
    let content = document.querySelector('.content')
    content.classList.toggle('active');
}
function toggle2() {
    const vidover = document.querySelector('.vidover')
    vidover.classList.toggle('active2')
    console.log('true')
}

