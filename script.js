alert("Taranga Garden JavaScript is working!");
/* =========================
   TARANGA GARDEN JAVASCRIPT
========================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =========================
   HAMBURGER MENU
========================= */

const navLinks = document.querySelector(".nav-links");
const menuButton = document.querySelector(".menu-toggle");

if (navLinks && menuButton) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("active");
        menuButton.classList.toggle("active");

        const isOpen =
            navLinks.classList.contains("active");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    const navigationLinks =
        navLinks.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");
            menuButton.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}
 


    /* =========================
       GALLERY LIGHTBOX
    ========================== */

    const galleryImages =
        document.querySelectorAll(".gallery-grid img");


    if (galleryImages.length > 0) {


        /* Create lightbox */

        const lightbox =
            document.createElement("div");

        lightbox.classList.add("lightbox");


        lightbox.innerHTML = `
            <button
                class="lightbox-close"
                aria-label="Close image"
            >
                &times;
            </button>

            <img
                class="lightbox-image"
                src=""
                alt=""
            >
        `;


        document.body.appendChild(lightbox);


        const lightboxImage =
            lightbox.querySelector(".lightbox-image");


        const closeButton =
            lightbox.querySelector(".lightbox-close");


        /* Open image */

        galleryImages.forEach(function (image) {

            image.addEventListener("click", function () {

                lightboxImage.src = image.src;

                lightboxImage.alt = image.alt;

                lightbox.classList.add("active");

                document.body.style.overflow = "hidden";

            });

        });


        /* Close function */

        function closeLightbox() {

            lightbox.classList.remove("active");

            lightboxImage.src = "";

            document.body.style.overflow = "";

        }


        /* Close button */

        closeButton.addEventListener(
            "click",
            closeLightbox
        );


        /* Click outside image */

        lightbox.addEventListener(
            "click",
            function (event) {

                if (event.target === lightbox) {

                    closeLightbox();

                }

            }
        );


        /* Escape key */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape" &&
                    lightbox.classList.contains("active")
                ) {

                    closeLightbox();

                }

            }
        );

    }

/* SMOOTH NAVIGATION */

const navigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
);

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        const targetSection =
            document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
    


    /* =========================
       EMAIL LINK
    ========================== */

    const emailLinks =
        document.querySelectorAll(
            'a[href^="mailto:"]'
        );


    emailLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            /*
                The browser will open the user's
                default email application.
            */

        });

    });


    /* =========================
       WHATSAPP
    ========================== */

    const whatsappLinks =
        document.querySelectorAll(
            'a[href*="wa.me"]'
        );


    whatsappLinks.forEach(function (link) {

        link.setAttribute(
            "target",
            "_blank"
        );


        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


});