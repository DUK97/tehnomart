// Самовызывающаяся функция для обработки кликов по кнопнам слайдера и рендер индикаторов кол-ва слайдов
(function carousel() {
  // обьявление переменных
  const indicatorList = document.querySelector(".slider-indicators-list");
  const indicatorNodes = indicatorList.children;
  const slides = document.querySelectorAll(".slider-slide");
  const btnNext = document.querySelector(".slider-btn-next");
  const btnPrev = document.querySelector(".slider-btn-prev");
  const slider = document.querySelector(".slider");
  let i = 0;

  createSliderIndicators();
  // функция для создания 1 экземпляра индикатора слайда
  function createSliderIndicators() {
    const indicators = document.createDocumentFragment();
    function createSingleIndicator(i) {
      const singleIndicatorButton = document.createElement("button");
      const accessibilityBlock = document.createElement("div");
      const singleListElement = document.createElement("li");

      accessibilityBlock.classList.add("slider-indicator-accessibility");
      singleListElement.classList.add("slider-indicator");
      singleIndicatorButton.classList.add(
        "visually-hidden",
        "slider-indicator-button"
      );
      singleListElement.dataset.slideNumber = i;

      singleIndicatorButton.innerText = "перейти на " + i + " слайд";

      singleListElement.appendChild(singleIndicatorButton);
      singleListElement.appendChild(accessibilityBlock);
      indicators.appendChild(singleListElement);
    }

    // рендер всех индикаторов слайдов
    for (const slide of slides) {
      i++;
      createSingleIndicator(i);
    }

    indicatorList.appendChild(indicators);
    indicatorList
      .querySelector(".slider-indicator")
      .classList.add("slider-indicator-current");
    i = 0;
  }

  // Обработка кликов по кнопкам слайдера вместе с перемещением индикатора текущего слайда
  slider.addEventListener("click", (e) => {
    if (e.target === btnNext) {
      indicatorNodes[i].classList.remove("slider-indicator-current");
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
  });

  // обработка нажатия по индикаторам слайда
  indicatorList.addEventListener("click", (e) => {
    const slideNumber = e.target.dataset.slideNumber;
    const slideIndicatorButton = e.target.classList.contains(
      "visually-hidden",
      "slider-indicator-button"
    );

    if (slideNumber || slideIndicatorButton) {
      indicatorNodes[i].classList.remove("slider-indicator-current");
      slides[i].classList.remove("slider-slide-current");
      if (slideIndicatorButton) {
        const parentElementDataset = e.target.closest("li").dataset.slideNumber;
        i = parentElementDataset - 1;
      } else {
        i = slideNumber - 1;
      }

      indicatorNodes[i].classList.add("slider-indicator-current");
      slides[i].classList.add("slider-slide-current");
    }
  });
})();

// Обработка кликов по кнопкам в секции "Сервисы"

(function servisesSlider() {
  const buttons = document.querySelector(".servises-list");
  const buttonsList = buttons.querySelectorAll(".servises-btn");
  const servisesDescription = document.querySelectorAll(
    ".servises-description"
  );

  for (let i = 0; i < buttonsList.length; i++) {
    buttonsList[i].dataset.buttonNumber = i;
  }

  let i = 0;
  buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("servises-btn")) {
      buttonsList[i].classList.remove("services-current-btn");
      servisesDescription[i].classList.remove("services-description-current");

      i = e.target.dataset.buttonNumber;

      buttonsList[i].classList.add("services-current-btn");
      servisesDescription[i].classList.add("services-description-current");
    }
  });
})();

// Обработка кликов по карте

(function openMap() {
  const miniMap = document.querySelector(".contacts-map-link");
  const map = document.querySelector(".modal-map");

  miniMap.addEventListener("click", (e) => {
    e.preventDefault();
    map.style.display = "block";
  });

  map.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-close")) {
      map.style.display = "none";
    }
  });
})();

(function openContactForm() {
  const contactBtn = document.querySelector(".contacts-link");
  const contactForm = document.querySelector(".modal-contact-us");

  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();

    contactForm.style.display = "block";
  });

  contactForm.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-close")) {
      contactForm.style.display = "none";
    }
  });
})();
