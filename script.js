/* ========================================
   Daniel Portfolio — JavaScript
   Interactive Features & Animations
   (Repurposed from Orange Brutus)
   ======================================== */

// ========================================
// MOBILE NAVIGATION
// ========================================
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');
const sideLinks = document.querySelectorAll('.side-link');

// Open mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sideMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close mobile menu
const closeMobileMenu = () => {
    hamburger.classList.remove('active');
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
};

closeMenu.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);

// Close menu when clicking a link
sideLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        closeMobileMenu();

        setTimeout(() => {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        }, 300);
    });
});

// ========================================
// HERO SLIDER
// ========================================
const heroSlides = document.querySelectorAll('.hero-slide');
const sliderDots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    heroSlides.forEach(slide => slide.classList.remove('active'));
    sliderDots.forEach(dot => dot.classList.remove('active'));

    heroSlides[index].classList.add('active');
    sliderDots[index].classList.add('active');

    const img = heroSlides[index].querySelector('.hero-slide-img');
    img.style.animation = 'none';
    setTimeout(() => {
        img.style.animation = 'zoomPulse 3s ease-in-out';
    }, 10);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    showSlide(currentSlide);
}

function startSlideshow() {
    slideInterval = setInterval(nextSlide, 3000);
}

function stopSlideshow() {
    clearInterval(slideInterval);
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        stopSlideshow();
        startSlideshow();
    });
});

if (heroSlides.length > 0) {
    startSlideshow();

    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', stopSlideshow);
        heroSlider.addEventListener('mouseleave', startSlideshow);
    }
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========================================
// SMOOTH SCROLLING FOR NAV LINKS
// ========================================
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;

            window.scrollTo({ top: targetPosition, behavior: 'smooth' });

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// ========================================
// ACTIVE NAV LINK ON SCROLL
// ========================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset + navbar.offsetHeight + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ========================================
// MENU / SKILLS CATEGORY FILTERING
// ========================================
const categoryBtns = document.querySelectorAll('.category-btn');
const menuItems = document.querySelectorAll('.menu-item');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');

        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        menuItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');

            if (itemCategory === category) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.transition = 'all 0.5s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                }, 10);
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) translateX(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeInElements.forEach(element => observer.observe(element));

// ========================================
// PROMO CARDS STAGGER ANIMATION
// ========================================
const promoCards = document.querySelectorAll('.promo-card');

promoCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
});

// ========================================
// MENU ITEM HOVER EFFECT
// ========================================
const menuItemsInteractive = document.querySelectorAll('.menu-item');

menuItemsInteractive.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) rotate(1deg)';
    });
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// ========================================
// FORM VALIDATION & SUBMISSION
// ========================================
const inquiryBtn      = document.querySelector('.inquiry-btn');
const inquiryName     = document.querySelector('.inquiry-input[name="name"]');
const inquiryEmail    = document.querySelector('.inquiry-input[name="email"]');
const inquiryMessage  = document.querySelector('.inquiry-textarea');

if (inquiryBtn) {
    inquiryBtn.addEventListener('click', () => {
        const nameVal    = inquiryName?.value.trim()    || '';
        const emailVal   = inquiryEmail?.value.trim()   || '';
        const messageVal = inquiryMessage?.value.trim() || '';

        if (!nameVal || !emailVal || !messageVal) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailVal)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        showNotification("Message sent! I'll get back to you soon 🌿", 'success');

        // Clear fields
        if (inquiryName)    inquiryName.value    = '';
        if (inquiryEmail)   inquiryEmail.value   = '';
        if (inquiryMessage) inquiryMessage.value = '';
    });
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================
function showNotification(message, type = 'success') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) existingNotification.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#2f6b2f' : '#f44336'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

const notifStyle = document.createElement('style');
notifStyle.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(400px); opacity: 0; }
        to   { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to   { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(notifStyle);

// ========================================
// LOCATION / EDUCATION SEARCH
// ========================================
const locationSearch = document.getElementById('locationSearch');

if (locationSearch) {
    locationSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const locationCards = document.querySelectorAll('.location-card');

        locationCards.forEach(card => {
            const locationName = card.querySelector('h4').textContent.toLowerCase();
            const locationAddress = card.querySelector('p').textContent.toLowerCase();

            if (locationName.includes(searchTerm) || locationAddress.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.3s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// ========================================
// BUTTON RIPPLE EFFECT
// ========================================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            top: ${y}px;
            left: ${x}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to { transform: scale(4); opacity: 0; }
    }
`;
document.head.appendChild(rippleStyle);

// ========================================
// PARALLAX EFFECT ON HERO
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');

    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ========================================
// LAZY LOADING FOR IMAGES
// ========================================
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            obs.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ========================================
// STATS COUNTER ANIMATION
// ========================================
const statNumbers = document.querySelectorAll('.stat-number');

const countUp = (element, target) => {
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const value = parseInt(target.textContent);
            if (!isNaN(value)) countUp(target, value);
            statsObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => statsObserver.observe(stat));

// ========================================
// SCROLL TO TOP BUTTON
// ========================================
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #2f6b2f;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(47, 107, 47, 0.4);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.1)';
    this.style.boxShadow = '0 6px 16px rgba(47, 107, 47, 0.5)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
    this.style.boxShadow = '0 4px 12px rgba(47, 107, 47, 0.4)';
});

// ========================================
// LOADING ANIMATION
// ========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// PROJECT MODAL
// Reads proj-card data attributes and populates the modal overlay.
// Triggered by clicking any .proj-card element in index.html.
// ========================================
const projCards  = document.querySelectorAll('.proj-card');
const projModal  = document.getElementById('projModal');
const projMClose = document.getElementById('projModalClose');
const projMBody  = document.getElementById('projModalBody');

if (projModal) {
    projCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('.proj-title')?.textContent || '';
            const year  = card.querySelector('.proj-year')?.textContent  || '';
            const tags  = card.querySelector('.proj-tags')?.textContent  || '';
            const media = card.querySelector('.proj-media')?.innerHTML   || '';
            const desc  = card.dataset.desc || '';
            const link  = card.querySelector('.proj-link')?.outerHTML   || '';

            projMBody.innerHTML = `
                <h2 style="margin-bottom: 0.5rem">
                    ${title}
                    <span style="font-size: 1rem; opacity: 0.5; font-weight: 400">${year}</span>
                </h2>
                <p style="color: #7fbf7f; margin-bottom: 1.5rem; font-size: 0.9rem">${tags}</p>
                <div class="proj-modal-media">${media}</div>
                <p style="line-height: 1.8; margin-bottom: 1rem; color: #78bb78">${desc}</p>
                ${link}
            `;

            projModal.classList.add('active');
        });
    });

    // Close modal on X button
    projMClose.addEventListener('click', () => projModal.classList.remove('active'));

    // Close modal when clicking the dark backdrop
    projModal.addEventListener('click', (e) => {
        if (e.target === projModal) {
            projModal.classList.remove('active');
        }
    });
}

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%c⚡ Daniel — Developer Portfolio',
    'font-size: 20px; font-weight: bold; color: #7fbf7f; background: #0f1720; padding: 10px; border-radius: 5px;');
console.log('%cBuilt with HTML, CSS & JS 🌿',
    'font-size: 16px; color: #2f6b2f; font-style: italic;');