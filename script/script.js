document.addEventListener("DOMContentLoaded", function() {
  const loadingScreen = document.querySelector(".loading-screen");

  window.addEventListener("load", function() {
      setTimeout(function() {
          loadingScreen.style.display = "none";
      }, 1000); // Adjust the time as needed
  });

  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          // Smooth scroll to the target section
          window.scrollTo({
              top: targetSection.offsetTop - document.querySelector(".navbar").offsetHeight + 1, // Adding +1 to adjust for 1px offset issue
              behavior: "smooth"
          });

          // Collapse the mobile menu after clicking a link
          navbarCollapse.classList.remove("show");
      });
  });

  // Adjust height of homepage sections to prevent content being hidden behind fixed navbar
  adjustSectionHeights();
});

function adjustSectionHeights() {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
      section.style.minHeight = window.innerHeight + "px";
  });
}
document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll('.project-img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = card.dataset.modalImage;
        });
    });

    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Prevent scrolling behind the modal
    modal.addEventListener('touchmove', function(event) {
        event.preventDefault();
    });
});
