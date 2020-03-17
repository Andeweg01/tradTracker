// JavaScript Document

function sendMail(contactForm){
    emailjs.send("gmail", "corktradtracker", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "my_request": contactForm.request.value
    })
    .then(
        function(response){
            alert("Successfully sent", response);
			
        },
        function(error){
            alert("FAILED", error);
        });
        return false;
}