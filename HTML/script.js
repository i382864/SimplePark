document.addEventListener("DOMContentLoaded", () => {
    const indicators = document.querySelectorAll(".indicator");
    const slides = document.querySelectorAll(".carousel-item");
  
    let currentIndex = 0;
    let startX = 0;
    let endX = 0;
  
 
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
  
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === index);
      });
  
      currentIndex = index;
    }
  

    const carousel = document.querySelector(".carousel");
  
    carousel.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX; 
    });
  
    carousel.addEventListener("touchmove", (e) => {
      endX = e.touches[0].clientX; 
    });
  
    carousel.addEventListener("touchend", () => {
      if (startX - endX > 50) {
        
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
      } else if (endX - startX > 50) {
      
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
      }
    });
  

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => showSlide(index));
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.menu-button'); // The menu button
    const closeButton = document.querySelector('#closeButton'); // The close button
    const overlay = document.querySelector('#overlay');

    // Open overlay
    burgerMenu.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    // Close overlay
    closeButton.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    // Close overlay when clicking outside
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});