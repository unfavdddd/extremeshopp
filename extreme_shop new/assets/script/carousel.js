document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;
  function showRandomSlide() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * slides.length);
    } while (randomIndex === currentIndex);
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[randomIndex].classList.add("active");
    currentIndex = randomIndex;
  }
  setInterval(showRandomSlide, 5000);
});
