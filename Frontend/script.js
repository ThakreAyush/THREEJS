// Alert when the page is loaded
alert("Welcome to my gallery");

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Slider functionality
let slideIndex = 0;
showSlides(slideIndex);

// Function to show the current slide
function showSlides(index) {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    // Loop through the slides to hide them
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the 'active' class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // If index exceeds the length of slides, reset to the first one
    if (index >= slides.length) {
        slideIndex = 0;
    }

    // If index is negative, set to the last slide
    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    // Show the current slide and highlight the corresponding dot
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

// Move to the next or previous slide
function moveSlide(n) {
    showSlides((slideIndex += n));
}

// Set the current slide based on the dot clicked
function currentSlide(n) {
    showSlides((slideIndex = n - 1));
}

// Set up automatic slide movement (optional)
setInterval(function () {
    moveSlide(1);
}, 5000); // Change slides every 5 seconds
