
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = n-1}    
if (n < 1) {slideIndex = 1}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(a) {
showSlides2(slideIndex2 += a);
}

function currentSlide2(a) {
showSlides2(slideIndex2 = a);
}

function showSlides2(a) {
let g;
let slides2 = document.getElementsByClassName("mySlides2");
let dots2 = document.getElementsByClassName("dot2");
if (a > slides2.length) {slideIndex2 = a-1}    
if (a < 1) {slideIndex2 = 1}
for (g = 0; g < slides2.length; g++) {
    slides2[g].style.display = "none";  
}
for (g = 0; g < dots2.length; g++) {
    dots2[g].className = dots2[g].className.replace(" active", "");
}
slides2[slideIndex2-1].style.display = "block";  
dots2[slideIndex2-1].className += " active";
}