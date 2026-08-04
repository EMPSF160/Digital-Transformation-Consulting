/* ==========================================================================
   NEXUS CONSULTING - Core Application JavaScript
   Navbar, Mobile Off-canvas, Custom Cursor, Scroll Progress, Controls
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons if loaded
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Sticky Navbar & Scroll Progress Bar
    const navbar = document.querySelector('.nexus-navbar');
    const progressBar = document.querySelector('.scroll-progress-bar');
    const backToTopBtn = document.querySelector('.back-to-top-btn');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        // Progress bar width
        if (progressBar) {
            progressBar.style.width = `${scrollPercent}%`;
        }

        // Navbar shadow / compact style
        if (navbar) {
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Back to top button visibility
        if (backToTopBtn) {
            if (scrollTop > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 3. Mobile Off-canvas Menu Toggle & Auto Close
    const hamburgerBtn = document.querySelector('.mobile-hamburger-btn');
    const mobileOffcanvas = document.querySelector('.mobile-offcanvas');
    const closeOffcanvasBtn = document.querySelector('.mobile-offcanvas-close');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (hamburgerBtn && mobileOffcanvas) {
        hamburgerBtn.addEventListener('click', () => {
            mobileOffcanvas.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeOffcanvasBtn && mobileOffcanvas) {
        closeOffcanvasBtn.addEventListener('click', () => {
            mobileOffcanvas.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileOffcanvas) {
                mobileOffcanvas.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // 4. Custom Cursor Movement
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.custom-cursor-follower');

    if (cursor && follower && window.innerWidth > 1024) {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        });

        function animateFollower() {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;
            follower.style.left = `${followerX}px`;
            follower.style.top = `${followerY}px`;
            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        // Hover expand effect on links and buttons
        const hoverables = document.querySelectorAll('a, button, .glass-card, input, select');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                follower.style.width = '54px';
                follower.style.height = '54px';
                follower.style.borderColor = 'rgba(108, 43, 255, 0.8)';
            });
            el.addEventListener('mouseleave', () => {
                follower.style.width = '36px';
                follower.style.height = '36px';
                follower.style.borderColor = 'rgba(0, 229, 255, 0.5)';
            });
        });
    }

    // 5. Ripple Click Effect on Buttons
    const rippleButtons = document.querySelectorAll('.btn-nexus, .glass-card');
    rippleButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
});
