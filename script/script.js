window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const content = document.querySelector('.content');
  
    // Hide loading screen and show content when the page is fully loaded
    loadingScreen.style.display = 'none';
    content.style.display = 'block';
  });
  

  // Get references to the menu button and navigation links
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to toggle the visibility of the navigation links
menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
