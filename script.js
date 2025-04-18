//menu for scroll button
function scrollLeft(button) {
    const scrollSection = button.parentElement.querySelector('.scroll-section');
    scrollSection.scrollBy({ left: -300, behavior: 'smooth' });
  }

  function scrollRight(button) {
    const scrollSection = button.parentElement.querySelector('.scroll-section');
    scrollSection.scrollBy({ left: 300, behavior: 'smooth' });
  }

  //mobile menu
  function toggleMenu() {
    document.querySelector('.main-nav').classList.toggle('active');
  }

  //Accordion Script
    const acc = document.querySelectorAll(".accordion");
    acc.forEach(button => {
      button.addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    });