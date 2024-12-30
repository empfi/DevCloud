// Scroll Animation for Navbar Links and Discover More button
document.querySelectorAll('.nav-link, #discoverMore').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent default anchor click behavior

        // Get the target section ID from the href attribute (for nav links)
        const targetId = this.getAttribute('href') ? this.getAttribute('href').substring(1) : 'services';

        // Scroll to the target section with smooth behavior
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// TOS Button (Ensure there's an element with the correct ID in HTML)
document.getElementById('tosButton').addEventListener('click', function() {
    window.open('./tos/index.html', '_self');  // Opens the link in the same tab
});

// Prevent default behavior for all anchor links EXCEPT TOS and Join Now
document.querySelectorAll('a').forEach(link => {
    if (link.id !== 'tosButton' && link.className !== 'cta-btn') {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent default anchor click behavior for all except TOS and Join Now
        });
    }
});

// Initialize Swiper for the gallery
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
