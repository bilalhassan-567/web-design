let current = 1;

function rotateImages() {
  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');
  const img3 = document.getElementById('img3');

  if (current === 1) {
    img1.style.zIndex = "1";
    img2.style.zIndex = "3";
    img3.style.zIndex = "2";
    
    img1.style.transform = "translateX(80px) scale(0.8)";
    img2.style.transform = "translateX(0) scale(1)";
    img3.style.transform = "translateX(40px) scale(0.9)";
    
    current = 2;
  } else if (current === 2) {
    img1.style.zIndex = "2";
    img2.style.zIndex = "1";
    img3.style.zIndex = "3";
    
    img1.style.transform = "translateX(40px) scale(0.9)";
    img2.style.transform = "translateX(80px) scale(0.8)";
    img3.style.transform = "translateX(0) scale(1)";
    
    current = 3;
  } else {
    img1.style.zIndex = "3";
    img2.style.zIndex = "2";
    img3.style.zIndex = "1";
    
    img1.style.transform = "translateX(0) scale(1)";
    img2.style.transform = "translateX(40px) scale(0.9)";
    img3.style.transform = "translateX(80px) scale(0.8)";
    
    current = 1;
  }
}

setInterval(rotateImages, 5000);


let currentIndex = 2; // Start with the center image
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove('left1', 'left2', 'center', 'right1', 'right2');
    if (index === currentIndex) {
      item.classList.add('center');
    } else if (index === (currentIndex - 1 + totalItems) % totalItems) {
      item.classList.add('left1');
    } else if (index === (currentIndex - 2 + totalItems) % totalItems) {
      item.classList.add('left2');
    } else if (index === (currentIndex + 1) % totalItems) {
      item.classList.add('right1');
    } else if (index === (currentIndex + 2) % totalItems) {
      item.classList.add('right2');
    }
  });
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

setInterval(showNextSlide, 3000); // Auto-slide every 3 seconds

updateCarousel(); // Initialize carousel on load
