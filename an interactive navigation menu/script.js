document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function handleScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    function handleClick(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('nav').offsetHeight,
                behavior: 'smooth'
            });

            sections.forEach(section => section.classList.remove('visible'));
            targetSection.classList.add('visible');
        }
    }

    window.addEventListener('scroll', handleScroll);

    navLinks.forEach(link => link.addEventListener('click', handleClick));

    // Trigger scroll event on load to check initial visibility
    handleScroll();
});
