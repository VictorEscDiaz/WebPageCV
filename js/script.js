document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation buttons and section containers
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.page-section');

    // Function to handle navigation
    function navigateToSection(targetId) {
        // Remove 'active' class from all buttons and sections
        navButtons.forEach(btn => btn.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // Add 'active' class to the clicked button and corresponding section
        const targetSection = document.getElementById(targetId);
        
        // Find the button that corresponds to the targetId
        const targetBtn = document.querySelector(`.nav-btn[data-target="${targetId}"]`);
        
        if (targetSection && targetBtn) {
            targetSection.classList.add('active');
            targetBtn.classList.add('active');
            
            // Scroll to top of the page on mobile for better UX
            if (window.innerWidth <= 768) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    // Add click event listeners to all navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('data-target');
            navigateToSection(targetId);
        });
    });
});