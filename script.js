document.addEventListener('DOMContentLoaded', () => {
    // Add subtle parallax effect to the background text
    const bgText = document.querySelector('.background-text');

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        // Move the text slightly opposite to mouse direction
        const moveX = -(x * 20); // Move within 20px
        const moveY = -(y * 20);

        bgText.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when link is clicked
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    console.log("Portfolio layout initialized.");
});
