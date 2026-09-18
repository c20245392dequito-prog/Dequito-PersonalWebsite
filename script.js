
    const welcomeButton = document.getElementById("welcomeButton");
    const welcomeMessage = document.getElementById("welcomeMessage");

    function createWelcomeMessage(name) {
        return "Hello, " + name + "! Welcome to my personal system. Would you like to know about my personal system, just scroll and message me!";
    }

    welcomeButton.addEventListener("click", function() {

        let message = createWelcomeMessage("Visitor");

        welcomeMessage.textContent = message;
    });




    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;

        formMessage.textContent =
            "Thank you, " + name + "! Your message has been received.";

        contactForm.reset();
    });