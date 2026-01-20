// Slideshow Lightbox (W3Schools style)

let slideIndex = 1;

// Open the modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
    showSlides(slideIndex);
}

// Close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Next / Previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Display the current slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
