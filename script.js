// Subtle smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '1rem 0';
        navbar.style.borderBottomColor = 'rgba(0, 212, 255, 0.3)';
    } else {
        navbar.style.padding = '1.5rem 0';
        navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
    }
});

// Product card intersection observer for subtle reveal
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .step, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
    observer.observe(el);
});

// Mock Upgrade button action
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        const confirmed = confirm("WARNING: Upgrading your humanity may cause minor existential instability and temporary loss of soul ownership. Do you wish to proceed?");
        if (confirmed) {
            alert("INITIATING NEURAL SCAN... PLEASE REMAIN STILL.");
            setTimeout(() => {
                alert("SCAN COMPLETE. NO SOUL DETECTED. PROCEEDING WITH OPTIMIZATION.");
            }, 2000);
        }
    });
});

// Logo interaction
const logo = document.querySelector('.main-logo');
if (logo) {
    logo.addEventListener('mouseover', () => {
        document.querySelector('.logo-glow').style.animationDuration = '1s';
    });
    logo.addEventListener('mouseout', () => {
        document.querySelector('.logo-glow').style.animationDuration = '4s';
    });
}

console.log("%cPROO LABS™ SYSTEM INITIALIZED", "color: #00d4ff; font-weight: bold; font-size: 1.2rem;");
console.log("Status: Human limitations detected. Optimization required.");
