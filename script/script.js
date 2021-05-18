const slides = document.querySelectorAll(".slider-slide");
const btnNext = document.querySelector(".slider-btn-next");
const btnPrev = document.querySelector(".slider-btn-prev");
const slider = document.querySelector(".slider");

slider.addEventListener("click", (e) => {
  let i = 0;
  debugger;
  if (e.target === btnNext) {
    slides[i].classList.toggle("slider-slide-current");
    if (slides[i + 1] === undefined) {
      slides[0].classList.toggle("slider-slide-current");
      i = 0;
    } else {
      slides[i + 1].classList.toggle("slider-slide-current");
      i++;
    }
  } else if (e.target === btnPrev) {
    slides[i].classList.toggle("slider-slide-current");
    if (slides[i - 1] === undefined) {
      slides[slides.length - 1].classList.toggle("slider-slide-current");
      i = slides.length - 1;
    } else {
      slides[i - 1].classList.toggle("slider-slide-current");
      i--;
    }
  }
});
