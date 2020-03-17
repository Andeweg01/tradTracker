// JavaScript Document

function sendMail(contactForm){
    emailjs.send("gmail", "corktradtracker", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "my_request": contactForm.request.value
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", error);
        });
        return false;
}