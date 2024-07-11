document.addEventListener("DOMContentLoaded", () => {
    
    const typedText = ["Full Stack Web Developer", "Designer & YouTuber", " Video Editor &    Freelancer"];
    let currentIndex = 0;
    let currentText = "";
    let charIndex = 0;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const newTextDelay = 2000;
    const cursorElement = document.querySelector(".cursor");

    function type() {
        if (charIndex < typedText[currentIndex].length) {
            currentText += typedText[currentIndex].charAt(charIndex);
            document.querySelector(".auto-type").textContent = currentText;
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            currentText = currentText.substring(0, charIndex - 1);
            document.querySelector(".auto-type").textContent = currentText;
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            currentIndex = (currentIndex + 1) % typedText.length;
            setTimeout(type, typingSpeed);
        }
    }

    function toggleCursorBlink() {
        cursorElement.classList.toggle('active');
    }

    setTimeout(type, typingSpeed + 500);
    setInterval(toggleCursorBlink, 500);

    // navigation menu
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");
    

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

  
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Subject:", subject);
        console.log("Message:", message);

       
        contactForm.reset();
    });
});

const detailsButtons = document.querySelectorAll('.details-btn');

    detailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectItem = button.parentElement;
            projectItem.classList.toggle('show-details');
            button.textContent = projectItem.classList.contains('show-details') ? 'Hide Details' : 'Show Details';
        });
    });

const scriptURL = 'https://script.google.com/macros/s/AKfycbyT1vvEpzugUhym0jAdJ7pss4OFZxs4O-N_EvI1PtXy3TVVktr2kXkiaI3TRWTZIl5bIQ/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks! Your Message Has Been Sent Successfully."))
                .catch(error => console.error('Error!', error.message))
            })
async function makerequest(){
   
}

