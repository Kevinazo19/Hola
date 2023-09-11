document.addEventListener("DOMContentLoaded", function () {
    const openMenuBtn = document.getElementById("openMenuBtn");
    const closeMenuBtn = document.getElementById("closeMenuBtn");
    const menu = document.getElementById("menu");

    openMenuBtn.addEventListener("click", function () {
        menu.classList.add("active");
        openMenuBtn.style.display = "none";
        closeMenuBtn.style.display = "block";
    });

    closeMenuBtn.addEventListener("click", function () {
        menu.classList.remove("active");
        openMenuBtn.style.display = "block";
        closeMenuBtn.style.display = "none";
    });

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    searchBtn.addEventListener("click", function () {
        const searchTerm = searchInput.value;
        // Realiza alguna acción con el término de búsqueda, como redirigir a una página de resultados
        console.log("Búsqueda realizada: " + searchTerm);
    });

    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        updateCarousel();
    }

    function updateCarousel() {
        const translateValue = -currentIndex * 100;
        carousel.style.transform = `translateX(${translateValue}%)`;
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    setInterval(nextSlide, 5000);
});
