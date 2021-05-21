(function carousel() {
  const indicatorList = document.querySelector(".slider-indicators-list");
  const indicatorNodes = indicatorList.children;

  const slides = document.querySelectorAll(".slider-slide");
  const btnNext = document.querySelector(".slider-btn-next");
  const btnPrev = document.querySelector(".slider-btn-prev");
  const slider = document.querySelector(".slider");
  let i = 0;

  createSliderIndicators();

  function createSliderIndicators() {
    const indicators = document.createDocumentFragment();
    function createSingleIndicator() {
      const singleIndicatorLabel = document.createElement("label");
      const singleIndicatorButton = document.createElement("button");

      singleIndicatorLabel.classList.add("slider-indicator");
      singleIndicatorButton.classList.add("visually-hidden");
      indicators.appendChild(singleIndicatorLabel);
      indicators.appendChild(singleIndicatorButton);
    }
    for (const slide of slides) {
      createSingleIndicator();
    }
    indicatorList.appendChild(indicators);
    indicatorList.firstChild.remove();
    indicatorList.firstChild.classList.add("slider-indicator-current");
  }

  function filterLabels(arr) {
    debugger;
    for (const element of arr) {
      if (element.tagName === "label") {
        return element;
      } else {
        return;
      }
    }
  }

  slider.addEventListener("click", (e) => {
    if (e.target === btnNext) {
      debugger;

      filteredIndicatorNodes.classList.toggle("slider-indicator-current");
      slides[i].classList.remove("slider-slide-current");

      if (slides[i + 1] === undefined) {
        slides[0].classList.add("slider-slide-current");
        indicatorNodes[0].classList.add("slider-indicator-current");
        i = 0;
      } else {
        slides[i + 1].classList.add("slider-slide-current");
        indicatorNodes[i + 1].classList.add("slider-indicator-current");
        i++;
      }
    } else if (e.target === btnPrev) {
      slides[i].classList.remove("slider-slide-current");
      indicatorNodes[i].classList.remove("slider-indicator-current");
      if (slides[i - 1] === undefined) {
        slides[slides.length - 1].classList.add("slider-slide-current");
        indicatorNodes[indicatorNodes.length - 1].classList.add(
          "slider-indicator-current"
        );
        i = slides.length - 1;
      } else {
        slides[i - 1].classList.add("slider-slide-current");
        indicatorNodes[i - 1].classList.add("slider-indicator-current");
        i--;
      }
    }

    // if (e.target === ) {

    // }
  });
})();
