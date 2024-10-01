document.addEventListener('DOMContentLoaded', function() {
    // Smooth Navbar Transition on Scroll
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // GSAP animations for sections
    gsap.from('.hero-section h1', { opacity: 0, y: 50, duration: 1 });
    gsap.from('.hero-section p', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from('.btn-primary', { opacity: 0, y: 50, duration: 1, delay: 1 });

    // ScrollMagic for animating sections on scroll
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: 0.9,
        })
            .setTween(gsap.from(section, { opacity: 0, y: 50, duration: 1 }))
            .addTo(controller);
    });
});
