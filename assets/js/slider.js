/* ==========================================================================
   NEXUS CONSULTING - Swiper.js Slider Configurations
   Hero Slider, Testimonial Carousel, Case Studies, Partner Logos
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Partner Logos Infinite Ticker
    if (document.querySelector('.partners-swiper')) {
        new Swiper('.partners-swiper', {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                576: { slidesPerView: 3, spaceBetween: 40 },
                768: { slidesPerView: 4, spaceBetween: 50 },
                1024: { slidesPerView: 6, spaceBetween: 60 }
            }
        });
    }

    // 2. Case Studies Carousel
    if (document.querySelector('.case-studies-swiper')) {
        new Swiper('.case-studies-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination-case',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next-case',
                prevEl: '.swiper-button-prev-case',
            },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 30 },
                1200: { slidesPerView: 3, spaceBetween: 40 }
            }
        });
    }

    // 3. Testimonials Executive Slider
    if (document.querySelector('.testimonials-swiper')) {
        new Swiper('.testimonials-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination-testi',
                clickable: true,
            },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 2, spaceBetween: 40 }
            }
        });
    }

    // 4. Hero Banner Carousel
    if (document.querySelector('.hero-swiper')) {
        new Swiper('.hero-swiper', {
            effect: 'fade',
            fadeEffect: { crossFade: true },
            loop: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination-hero',
                clickable: true,
            }
        });
    }
});
