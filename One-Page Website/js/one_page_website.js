//Lightbox modal gallery

//Create modal container
let modal = document.createElement("div");
modal.id = "lightbox";
modal.innerHTML = `
    <span id="close-lightbox">&times;</span>
    <img id="lightbox-img">
`;
document.body.appendChild(modal);

//Select all images inside gallery
let images = document.querySelectorAll(".gallery img");
let lightboxImg = document.getElementById("lightbox-img");
let lightbox = document.getElementById("lightbox");

//Open modal on click
images.forEach(img => {
    img.addEventListener("click", function() {
        lightbox.style.display = "flex";
        lightboxImg.src = this.dataset.large;
    });
});

//Close modal
document.getElementById("close-lightbox").onclick = function() {
    lightbox.style.display = "none";
};

//Close when background clicked
lightbox.onclick = function(e) {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
};
