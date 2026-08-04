/* ==========================================================================
   NEXUS CONSULTING - Animation Engine (GSAP, ScrollTrigger, Animated Counters)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS (Animate On Scroll) if loaded
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 900,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            once: true,
            offset: 80
        });
    }

    // 2. Animated Stats Counters
    const statCounters = document.querySelectorAll('.stat-number');
    if (statCounters.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const rawAttr = counter.getAttribute('data-count');
                    const rawText = counter.innerText.replace(/[^0-9.-]/g, '');
                    
                    let targetVal = parseFloat(rawAttr || rawText);
                    if (isNaN(targetVal)) {
                        obs.unobserve(counter);
                        return;
                    }

                    const prefix = counter.getAttribute('data-prefix') || (counter.innerText.includes('$') ? '$' : '');
                    const suffix = counter.getAttribute('data-suffix') || (counter.innerText.includes('%') ? '%' : counter.innerText.includes('x') ? 'x' : counter.innerText.includes('M') ? 'M' : '');
                    const decimals = parseInt(counter.getAttribute('data-decimals') || (rawAttr && rawAttr.includes('.') ? rawAttr.split('.')[1].length : '0'), 10);

                    let startVal = 0;
                    const duration = 1800; // ms
                    const startTime = performance.now();

                    function updateCount(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeProgress = 1 - Math.pow(1 - progress, 3);
                        const currentCount = startVal + easeProgress * (targetVal - startVal);

                        counter.innerText = `${prefix}${currentCount.toFixed(decimals)}${suffix}`;

                        if (progress < 1) {
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.innerText = `${prefix}${targetVal.toFixed(decimals)}${suffix}`;
                        }
                    }

                    requestAnimationFrame(updateCount);
                    obs.unobserve(counter);
                }
            });
        }, { threshold: 0.2 });

        statCounters.forEach(counter => observer.observe(counter));
    }

    // 3. GSAP Animations if GSAP is available
    if (typeof gsap !== 'undefined') {
        // Hero Title Reveal
        gsap.from('.hero-title-gsap', {
            duration: 1.2,
            y: 50,
            opacity: 0,
            ease: 'power3.out',
            stagger: 0.15,
            delay: 0.2
        });

        // Hero Subtitle & CTA Reveal
        gsap.from('.hero-sub-gsap', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.6
        });

        // ScrollTrigger reveal for section headings
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            const revealElements = document.querySelectorAll('.gsap-reveal-scroll');
            revealElements.forEach(el => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    },
                    y: 45,
                    opacity: 0,
                    duration: 0.9,
                    ease: 'power3.out'
                });
            });
        }
    }
});
