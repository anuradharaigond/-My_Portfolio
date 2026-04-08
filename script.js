document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Animated Text for Intro Hero
    const phrases = [
        "Future Software Engineer",
        "Passionate About Coding",
        "Building Scalable Applications",
        "Learning. Building. Improving.",
        "Turning Ideas Into Reality",
        "Frontend Developer in Progress"
    ];

    const animatedLine = document.getElementById('animated-line');
    let currentPhraseIndex = 0;

    const updateText = () => {
        // Fade out
        animatedLine.classList.remove('active');
        
        setTimeout(() => {
            // Change text
            animatedLine.textContent = phrases[currentPhraseIndex];
            // Fade in
            animatedLine.classList.add('active');
            
            // Increment index
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }, 800); // Should match CSS transition duration
    };

    // Initial show
    updateText();
    // Loop every 3 seconds
    setInterval(updateText, 3500);

    // Cursor Glow & Background Blobs Parallax Effect
    const cursorGlow = document.getElementById('cursor-glow');
    const blogs = document.querySelectorAll('.blob');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        // Cursor glow position
        cursorGlow.style.left = `${x}px`;
        cursorGlow.style.top = `${y}px`;
        cursorGlow.style.opacity = '1';
        
        // Background blobs parallax
        const moveX = (x / window.innerWidth - 0.5) * 50;
        const moveY = (y / window.innerHeight - 0.5) * 50;
        
        blogs.forEach((blob, index) => {
            const factor = (index + 1) * 0.5;
            blob.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
        });
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(1, 1, 8, 0.95)';
            navLinks.style.padding = '2rem';
            navLinks.style.textAlign = 'center';
        });
    }

    // Scroll Animations (Subtle Entrance)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.cert-card, .about-card, .achievements-side, .languages-side');
    scrollElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
});
