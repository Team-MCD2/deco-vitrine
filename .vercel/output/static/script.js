document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements with the hidden-scroll class
    const hiddenElements = document.querySelectorAll('.hidden-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    // Force autoplay videos
    const videos = document.querySelectorAll('video');
    
    function playAllVideos() {
        videos.forEach(video => {
            video.muted = true;
            video.play().catch(err => console.log("Failed to force play video:", err));
        });
    }

    // Try playing immediately
    playAllVideos();

    // Setup aggressive global fallback listeners for any user interaction
    const triggerEvents = ['click', 'touchstart', 'scroll'];
    function initInteractionPlay() {
        playAllVideos();
        // Remove listeners once triggered
        triggerEvents.forEach(event => {
            document.removeEventListener(event, initInteractionPlay);
        });
    }

    triggerEvents.forEach(event => {
        document.addEventListener(event, initInteractionPlay, { passive: true });
    });

    // Mobile Burger Menu
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
            burger.classList.toggle('toggle');
        });
        
        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-links li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                burger.classList.remove('toggle');
            });
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-accordion-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                // Close all other items
                faqItems.forEach(other => {
                    other.classList.remove('active');
                    const btn = other.querySelector('.faq-question');
                    if (btn) btn.setAttribute('aria-expanded', 'false');
                });
                // Toggle current
                if (!isActive) {
                    item.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                }
            });
        }
    });
});
