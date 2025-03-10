document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about");

    function checkScroll() {
        if (!aboutSection) return;

        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            aboutSection.classList.add("visible");
            window.removeEventListener("scroll", checkScroll);
        }
    }

    checkScroll();

    window.addEventListener("scroll", checkScroll);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const emailLink = document.querySelector(".email-button");
    if (emailLink) {
        emailLink.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "mailto:rhafelortizpacao@gmail.com";
        });
    }
});
