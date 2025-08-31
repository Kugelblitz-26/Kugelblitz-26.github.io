// Data Scientist Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initTypedText();
    initParticles();
    initScrollAnimations();
    initSkillBars();
    initLanguageBars();
    initCounters();
    initProjectFilters();
    initProjectModals();
    initContactForm();
    initMobileNav();
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            const navMenu = document.getElementById('nav-menu');
            const navToggle = document.getElementById('nav-toggle');
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Highlight active navigation link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
        
        // Add/remove navbar background on scroll
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(var(--color-slate-900-rgb), 0.98)';
        } else {
            navbar.style.background = 'rgba(var(--color-slate-900-rgb), 0.95)';
        }
    });
}

// Typed text animation in hero section
function initTypedText() {
    const typedTextElement = document.getElementById('typed-text');
    const cursor = document.getElementById('cursor');
    const textArray = ['Data Scientist', 'Machine Learning Engineer', 'Analytics Expert', 'Problem Solver'];
    let textArrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = textArray[textArrayIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 100 : 150;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textArrayIndex = (textArrayIndex + 1) % textArray.length;
            typeSpeed = 500; // Pause before typing new text
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    typeText();
}

// Particle background animation
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const numberOfParticles = 50;
    
    for (let i = 0; i < numberOfParticles; i++) {
        createParticle();
    }
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        
        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        
        particlesContainer.appendChild(particle);
    }
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Trigger specific animations
                if (entry.target.classList.contains('stats-grid')) {
                    initCounters();
                }
                if (entry.target.classList.contains('skills-grid')) {
                    animateSkillBars();
                }
                if (entry.target.classList.contains('languages-grid')) {
                    animateLanguageBars();
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.stats-grid, .skills-grid, .languages-grid, .timeline-item, .project-card, .education-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Animated skill bars
function initSkillBars() {
    // Animation will be triggered by scroll observer
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        }, index * 100);
    });
}

// Animated language bars
function initLanguageBars() {
    // Animation will be triggered by scroll observer
}

function animateLanguageBars() {
    const languageBars = document.querySelectorAll('.language-progress');
    languageBars.forEach((bar, index) => {
        setTimeout(() => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
        }, index * 200);
    });
}

// Animated counters
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50; // Animation duration control
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Project filtering
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.classList.remove('filtered');
                } else {
                    const category = card.getAttribute('data-category');
                    if (category === filterValue) {
                        card.classList.remove('filtered');
                    } else {
                        card.classList.add('filtered');
                    }
                }
            });
        });
    });
}

// Project modal functionality
const projectData = {
    christmas: {
        title: 'Christmas Image Classification',
        description: 'Developed a sophisticated Convolutional Neural Network using EfficientNet-B0 architecture for accurate Christmas image classification. The project involved comprehensive data preprocessing, advanced data augmentation techniques, and robust model evaluation methodologies.',
        features: [
            'EfficientNet-B0 architecture implementation',
            'Advanced data augmentation pipeline',
            'Cross-validation and model evaluation',
            'Transfer learning optimization',
            'Real-time prediction capabilities'
        ],
        technologies: ['Deep Learning', 'PyTorch', 'CNN', 'EfficientNet', 'Python', 'Computer Vision'],
        accuracy: '90%',
        duration: 'Jan 2025 – Mar 2025',
        challenges: 'Handling diverse image qualities and lighting conditions, optimizing model performance while maintaining accuracy.',
        results: 'Successfully achieved 90% accuracy on test dataset with robust performance across different Christmas image categories.'
    },
    novel: {
        title: 'Novel Recommendation System',
        description: 'Built a comprehensive hybrid recommendation system combining collaborative filtering and content-based approaches. The system features an intuitive user interface and was successfully deployed on cloud infrastructure.',
        features: [
            'Hybrid recommendation algorithm',
            'Content-based filtering',
            'Collaborative filtering',
            'User-friendly web interface',
            'Cloud deployment on Heroku'
        ],
        technologies: ['Machine Learning', 'NLP', 'Flask', 'Heroku', 'Python', 'Scikit-learn'],
        accuracy: '95%',
        duration: 'Aug 2023 – Sep 2023',
        challenges: 'Balancing recommendation accuracy with system performance, handling sparse user-item interaction data.',
        results: 'Achieved 95% accuracy in recommendations with positive user feedback and successful cloud deployment.'
    }
};

function initProjectModals() {
    // Add event listeners to all project detail buttons
    const detailButtons = document.querySelectorAll('[data-project]');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectKey = this.getAttribute('data-project');
            openProjectModal(projectKey);
        });
    });
}

function openProjectModal(projectKey) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    const project = projectData[projectKey];
    
    if (!project) {
        console.error('Project not found:', projectKey);
        return;
    }
    
    modalTitle.textContent = project.title;
    modalBody.innerHTML = `
        <div class="modal-project-content">
            <p class="project-description">${project.description}</p>
            
            <div class="project-meta">
                <div class="meta-item">
                    <strong>Accuracy:</strong> <span class="accuracy">${project.accuracy}</span>
                </div>
                <div class="meta-item">
                    <strong>Duration:</strong> ${project.duration}
                </div>
            </div>
            
            <div class="project-section">
                <h4>Key Features</h4>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="project-section">
                <h4>Technologies Used</h4>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="project-section">
                <h4>Challenges</h4>
                <p>${project.challenges}</p>
            </div>
            
            <div class="project-section">
                <h4>Results & Impact</h4>
                <p>${project.results}</p>
            </div>
        </div>
        
        <style>
            .modal-project-content {
                line-height: 1.6;
            }
            
            .project-description {
                font-size: var(--font-size-lg);
                margin-bottom: var(--space-24);
                color: var(--color-text-secondary);
            }
            
            .project-meta {
                display: flex;
                gap: var(--space-24);
                margin-bottom: var(--space-24);
                padding: var(--space-16);
                background: var(--color-secondary);
                border-radius: var(--radius-md);
            }
            
            .meta-item strong {
                color: var(--color-text);
            }
            
            .project-section {
                margin-bottom: var(--space-24);
            }
            
            .project-section h4 {
                color: var(--color-primary);
                margin-bottom: var(--space-12);
                font-size: var(--font-size-lg);
            }
            
            .project-section ul {
                padding-left: var(--space-20);
                color: var(--color-text-secondary);
            }
            
            .project-section li {
                margin-bottom: var(--space-8);
            }
            
            .project-section p {
                color: var(--color-text-secondary);
                margin-bottom: var(--space-16);
            }
        </style>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Contact form validation and submission
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset previous errors
        document.querySelectorAll('.error-message').forEach(error => {
            error.style.display = 'none';
        });
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const subject = formData.get('subject').trim();
        const message = formData.get('message').trim();
        
        let isValid = true;
        
        // Validation
        if (!name) {
            showError('name-error', 'Name is required');
            isValid = false;
        }
        
        if (!email) {
            showError('email-error', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email-error', 'Please enter a valid email address');
            isValid = false;
        }
        
        if (!subject) {
            showError('subject-error', 'Subject is required');
            isValid = false;
        }
        
        if (!message) {
            showError('message-error', 'Message is required');
            isValid = false;
        } else if (message.length < 10) {
            showError('message-error', 'Message must be at least 10 characters long');
            isValid = false;
        }
        
        if (isValid) {
            // Simulate form submission
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you soon.');
                form.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        }
    });
}

function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mobile navigation toggle
function initMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }); 
}
// CV Download functionality
function downloadCV() {
    // Create an anchor element
    const link = document.createElement('a');

    // Set the href to the direct download link of your CV on GitHub
    // IMPORTANT: Replace the URL with the raw link to your own CV PDF on GitHub
    link.href = 'https://raw.githubusercontent.com/Kugelblitz-26/Kugelblitz-26.github.io/main/Prem_CV.pdf';

    // Set the download attribute to suggest a filename for the user
    link.download = 'Prem_CV.pdf';

    // Append the link to the body (this is necessary for Firefox)
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);

    // Optional: Show feedback to the user
    alert('Your CV download should begin shortly!');
}

// Utility function to add smooth reveal animations
function revealOnScroll() {
    const reveals = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .education-item');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Additional scroll effects
window.addEventListener('scroll', function() {
    revealOnScroll();
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Initialize reveal animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial styles for animated elements
    const animatedElements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .education-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    });
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Existing scroll functions here
}, 16)); // ~60fps
