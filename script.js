//menu script

function scrollLeft(button) {
    const scrollSection = button.parentElement.querySelector('.scroll-section');
    scrollSection.scrollBy({ left: -300, behavior: 'smooth' });
  }

  function scrollRight(button) {
    const scrollSection = button.parentElement.querySelector('.scroll-section');
    scrollSection.scrollBy({ left: 300, behavior: 'smooth' });
  }