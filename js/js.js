document.getElementById("year").innerHTML = new Date().getFullYear();

// help and code from stack overflow, tutorial points, mailtrap, and W3 schools //
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("newsletter-form");
    const message = document.getElementById("form-message");

    if (form) {
        form.addEventListener("submit", function (emailform) {
            emailform.preventDefault();
            const email = document.getElementById("email").value;

            if (email) {
                message.style.color = "green";
                message.textContent = `Thanks for subscribing, ${email}!`;
                form.reset();
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.style.fontWeight = "bold";
            link.style.textTransform = "uppercase";
            link.style.color = "#00274C";
        }
    });
});

