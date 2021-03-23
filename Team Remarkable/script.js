document.querySelector(".prevBtn").addEventListener("click", () => {
   changeSlides(-1);
});
document.querySelector(".nextBtn").addEventListener("click", () => {
   changeSlides(1);
});
 var slideIndex = 1;
 showSlides(slideIndex);
 function changeSlides(n) {
    showSlides((slideIndex += n));
 }
 function currentSlide(n) {
    showSlides((slideIndex = n));
 }
 function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Slide");
    var dots = document.getElementsByClassName("Navdot");
    if (n > slides.length) {
       slideIndex = 1;
    }
    if (n < 1) {
       slideIndex = slides.length;
    }
    Array.from(slides).forEach(item => (item.style.display = "none"));
    Array.from(dots).forEach(
       item => (item.className = item.className.replace(" selected", ""))
    );
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " selected";
 }
 
 var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}