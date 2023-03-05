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
// document.getElementById("formm").addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent the form from submitting normally
//     var form = document.getElementById("submit-button"); // Replace "your-form-id" with the actual ID of your form
//     var formData = new FormData(form);
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", form.action, true);
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState !== XMLHttpRequest.DONE) return;
//         if (xhr.status === 200) {
//             window.location.href = "https://gidatech.ng"; // Replace "https://your-redirect-url.com" with the actual URL of the page you want to redirect the user to
//         } else {
//             console.error(xhr.response);
//         }
//     };
//     xhr.send(formData);
// });


document.getElementById("submit-button").addEventListener("click", function (event) {
    // event.preventDefault(); // Prevent the form from submitting normally
    var form = document.getElementById("formm");

    alert("Thank you for submitting the form. We'll get back to you");
    window.location.href = "contact.html"; form.submit();


});
// document.getElementById("submit-button").addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent the form from submitting normally
//     alert("Thank you for submitting the form. We'll get back to you");
//     var form = document.getElementById("formm"); // Replace "your-form-id" with the actual ID of your form
//     form.submit(); // Submit the form
//     window.location.href = "index.html"; // Redirect the user to your index.html page
// });


