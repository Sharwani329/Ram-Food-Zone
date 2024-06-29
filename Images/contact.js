const form = document.querySelector('form');
const fullName = document.getElementById("Name");
const email = document.getElementById("Email");
const Pnumber = document.getElementById("Phone");
const subject = document.getElementById("Subject");
const Message = document.getElementById("message");



function sendEmail() {

    const bodyMessage =
    `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone number: ${Pnumber.value}<br> Message: ${Message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "proshar66@gmail.com",
        Password : "D7928B243E190F00B2A4F06A4F42C2A9B573",
        To : 'proshar66@gmail.com',
        From : "proshar66@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }
    );
}
let popup = document.getElementById("popup");

function openPopup(){
popup.classList.add("open-popup");
}

function closePopup(){
popup.classList.remove("open-popup");
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendEmail();
    checkInputs();
})
