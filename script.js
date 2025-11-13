// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger to X
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // navbar height
            const targetPosition = target.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateOnScroll = document.querySelectorAll('.research-card, .publication-item, .project-card, .expertise-item');
animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to a server
    // For now, we'll just log it and show a success message
    console.log('Form submitted:', formData);

    // Show success message
    alert('Thank you for your message! I will get back to you soon.');

    // Reset form
    contactForm.reset();
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add animation delay to expertise items
const expertiseItems = document.querySelectorAll('.expertise-item');
expertiseItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// Add animation delay to research cards
const researchCards = document.querySelectorAll('.research-card');
researchCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

// Add animation delay to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

// Typing Effect for Hero Subtitle (Optional Enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body for any CSS animations
    document.body.classList.add('loaded');

    // Optional: Add typing effect to subtitle
    // const subtitle = document.querySelector('.hero-subtitle');
    // const subtitleText = subtitle.textContent;
    // typeWriter(subtitle, subtitleText, 75);
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - scrolled / 600;
    }
});

// Add copy email functionality
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const email = link.textContent;

        // Copy to clipboard
        navigator.clipboard.writeText(email).then(() => {
            // Show temporary tooltip
            const originalText = link.textContent;
            link.textContent = 'Email copied!';
            link.style.color = '#10b981';

            setTimeout(() => {
                link.textContent = originalText;
                link.style.color = '';
            }, 2000);
        }).catch(() => {
            // Fallback: open email client
            window.location.href = `mailto:${email}`;
        });
    });
});

// Add smooth fade-in for sections
const fadeInSections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15
});

fadeInSections.forEach(section => {
    sectionObserver.observe(section);
});
