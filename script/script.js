const slides = document.querySelectorAll(".slider-slide");
const btnNext = document.querySelector(".slider-btn-next");
const btnPrev = document.querySelector(".slider-btn-prev");
const slider = document.querySelector(".slider");
let i = 0;

slider.addEventListener("click", (e) => {
  if (e.target === btnNext) {
    slides[i].classList.remove("slider-slide-current");
    if (slides[i + 1] === undefined) {
      slides[0].classList.add("slider-slide-current");
      i = 0;
    } else {
      slides[i + 1].classList.add("slider-slide-current");
      i++;
    }
  } else if (e.target === btnPrev) {
    slides[i].classList.remove("slider-slide-current");
    if (slides[i - 1] === undefined) {
      slides[slides.length - 1].classList.add("slider-slide-current");
      i = slides.length - 1;
    } else {
      slides[i - 1].classList.add("slider-slide-current");
      i--;
    }
  }
});
