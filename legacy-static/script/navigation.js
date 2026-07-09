// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');

    // Ensure menu is closed on page load
    if (nav) {
        nav.classList.remove('nav-active');
        document.body.style.overflow = '';
    }

    if (menuToggle) {
        menuToggle.classList.remove('active');
    }

    // Toggle menu when hamburger is clicked
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            nav.classList.toggle('nav-active');
            menuToggle.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('nav-active') ? 'hidden' : '';
        });

        // Close menu when clicking on a navigation link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                // Close the menu immediately
                nav.classList.remove('nav-active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (nav.classList.contains('nav-active') &&
                !nav.contains(e.target) &&
                !menuToggle.contains(e.target)) {
                nav.classList.remove('nav-active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});
