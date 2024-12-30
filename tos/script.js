// Scroll Animation for Navbar Links and Discover More button
document.querySelectorAll('.nav-link, #discoverMore').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent default anchor click behavior

        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);

        // Scroll to the target section with smooth behavior
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

