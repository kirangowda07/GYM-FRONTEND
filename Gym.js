const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

// Smooth scroll for CTA buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
// About section fade-in animation
const aboutBoxes = document.querySelectorAll(".about-box");

function revealAbout() {
    aboutBoxes.forEach(box => {
        const position = box.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 50) {
            box.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealAbout);
// Services section fade-in animation
const serviceBoxes = document.querySelectorAll(".service-box");

function revealServices() {
    serviceBoxes.forEach(box => {
        const position = box.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 50) {
            box.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealServices);
// Pricing section fade-in
const priceBoxes = document.querySelectorAll(".price-box");

function revealPricing() {
    priceBoxes.forEach(box => {
        const position = box.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 50) {
            box.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealPricing);
// Trainers fade-in animation
const trainerBoxes = document.querySelectorAll(".trainer-box");

function revealTrainers() {
    trainerBoxes.forEach(box => {
        const position = box.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 50) {
            box.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealTrainers);
// Profile section animation
const profileItems = document.querySelectorAll(".profile-img img, .profile-content");

function revealProfile() {
    profileItems.forEach(item => {
        const position = item.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 50) {
            item.classList.add("show");
        }
    });
}
window.addEventListener("scroll", revealProfile);
// Trainer Info Fade-in Animation
const trainerItems = document.querySelectorAll(".trainer-img img, .trainer-details");

function revealTrainer() {
    trainerItems.forEach(item => {
        const pos = item.getBoundingClientRect().top;
        const winHeight = window.innerHeight;

        if (pos < winHeight - 50) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealTrainer);


// Gallery animation
const galleryImgs = document.querySelectorAll(".gallery-grid img");

function revealGallery() {
    galleryImgs.forEach(img => {
        const position = img.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 50) {
            img.classList.add("show");
        }
    });
}
window.addEventListener("scroll", revealGallery);
// Testimonials fade-in animation
const testimonialBoxes = document.querySelectorAll(".testimonial-box");

function revealTestimonials() {
    testimonialBoxes.forEach(box => {
        const position = box.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 50) {
            box.classList.add("show");
        }
    });
}
window.addEventListener("scroll", revealTestimonials);


// Slider functionality
let slideIndex = 0;
const slides = document.querySelectorAll(".testimonial-box");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        slideIndex = i;
        showSlide(slideIndex);
    });
});

// Auto Slide
setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}, 3500);

// Initial position
showSlide(slideIndex);
// Blog fade-in animation
const blogBoxes = document.querySelectorAll(".blog-box");

function revealBlogs() {
    blogBoxes.forEach(box => {
        const pos = box.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (pos < screenHeight - 50) {
            box.classList.add("show");
        }
    });
}
window.addEventListener("scroll", revealBlogs);
// Contact Section Fade-in Animation
const contactItems = document.querySelectorAll(".contact-info, .contact-form");

function revealContact() {
    contactItems.forEach(item => {
        const pos = item.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (pos < screenHeight - 50) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealContact);
// Footer Fade-in Animation
const footer = document.querySelector(".footer");

function revealFooter() {
    const pos = footer.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (pos < screenHeight - 50) {
        footer.classList.add("show");
    }
}

window.addEventListener("scroll", revealFooter);
