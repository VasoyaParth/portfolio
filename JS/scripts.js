document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const pageContentWrapper = document.getElementById('page-content-wrapper');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const toggleIcon = document.getElementById('toggle-icon');

    // Function to handle sidebar state based on screen size
    function adjustSidebar() {
        if (window.innerWidth <= 768) {
            sidebar.style.display = 'none'; // Hide sidebar on mobile screens
        } else {
            sidebar.style.display = 'flex'; // Show sidebar on larger screens
        }
    }

    // Initialize sidebar state based on initial screen size
    adjustSidebar();

    // Handle sidebar toggle button click
    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
        pageContentWrapper.classList.toggle('collapsed');

        // Rotate the arrow based on the collapsed state
        if (sidebar.classList.contains('collapsed')) {
            toggleIcon.classList.remove('fa-chevron-left');
            toggleIcon.classList.add('fa-chevron-right');
        } else {
            toggleIcon.classList.remove('fa-chevron-right');
            toggleIcon.classList.add('fa-chevron-left');
        }
    });

    // Handle mobile menu button click
    mobileMenuToggle.addEventListener('click', function () {
        if (sidebar.style.display === 'none' || sidebar.style.display === '') {
            sidebar.style.display = 'flex';
        } else {
            sidebar.style.display = 'none';
        }
    });

    // Handle window resize to adjust sidebar visibility
    window.addEventListener('resize', function () {
        adjustSidebar();
    });
});
