/*const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
});
*/



const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx bxl-xmark')
  navbar.classList.toggle('active')
}


/*const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bx-sun');
   document.body.classList.toggle('dark-mode');
})
*/

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sathyathulasi36@gmail.com",
        Password : "B61D660739C3A7C83A8D34CD116B02F78D35",
        To : 'sathyathulasi3010@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact",
        Body : "Name: "  + document.getElementById("name").value
        + "<br> Email: "  + document.getElementById("email").value
        + "<br> Phone no: "  + document.getElementById("phone").value
        + "<br> Message: "  + document.getElementById("message").value

        }).then(
      message => alert("Message Send Successfully")
    );
}
