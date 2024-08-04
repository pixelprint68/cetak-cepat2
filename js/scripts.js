function showSection(sectionId) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    var activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

function addToCart(productName) {
    alert(productName + " has been added to your cart!");
}

function submitForm(event) {
    event.preventDefault();
    alert("Form submitted! We will get back to you soon.");
    document.getElementById("contactForm").reset();
}

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function changeSlide(n) {
    slideIndex += n;
    const slides = document.querySelectorAll(".slide");
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    slides[slideIndex - 1].style.display = "block";
}

// Show the home section by default when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
    showSlides();
});
