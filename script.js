document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");

    let currentIndex = 0;
    const slideCount = slides.length;
    const intervalTime = 3000; // 3 seconds

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }

    function updateSlider() {
        const offset = -currentIndex * 50; // Adjust based on slide width
        slider.style.transform = `translateX(${offset}px)`;
    }

    setInterval(nextSlide, intervalTime);
});
