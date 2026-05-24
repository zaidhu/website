// Custom Cursor Glow
const cursorGlow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// Interactive hover effects for cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 242, 255, 0.1) 0%, rgba(10, 10, 15, 0.7) 80%)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(10, 10, 15, 0.7)';
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect for hero visual
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const visual = document.querySelector('.hero-visual');
    if (visual) {
        visual.style.transform = `translateY(${scrolled * 0.15}px)`;
    }
});

// Subtle intersection observer for reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .step, .testimonial-card, .section-title').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
});

// Handle visible class
const style = document.createElement('style');
style.textContent = `
    .is-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Console Branding
console.log("%cPROO LABS™ // NEURAL_LINK_ESTABLISHED", "color: #00f2ff; font-weight: bold; font-size: 1.5rem; text-shadow: 0 0 10px #00f2ff;");
console.log("%cWelcome to the future of biological optimization. Defaulting to high-performance mode.", "color: #a0a0a0;");
