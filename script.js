// Example: Add interactivity for forms
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
  });
  let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const slideCount = slides.children.length;
  currentSlide = (currentSlide + direction + slideCount) % slideCount;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-scroll slider
setInterval(() => moveSlide(1), 5000);
