/* ========================================
   GODAYANA BUSINESS - MAIN JAVASCRIPT
   ======================================== */

/* ========================================
   STICKY NAVIGATION
   ======================================== */
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});

/* ========================================
   MOBILE MENU TOGGLE
   ======================================== */
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
      });
    });
  }
});

/* ========================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ======================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

/* ========================================
   FORM VALIDATION
   ======================================== */
class FormValidator {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    if (this.form) {
      this.init();
    }
  }

  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    this.form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('blur', () => this.validateField(field));
      field.addEventListener('input', () => this.validateField(field));
    });
  }

  validateField(field) {
    const rules = this.getValidationRules(field);
    const errors = [];

    // Required validation
    if (rules.required && !field.value.trim()) {
      errors.push('This field is required');
    }

    // Email validation
    if (rules.email && field.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value)) {
        errors.push('Please enter a valid email address');
      }
    }

    // Phone validation
    if (rules.phone && field.value) {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(field.value.replace(/\D/g, ''))) {
        errors.push('Please enter a valid 10-digit phone number');
      }
    }

    this.updateFieldStatus(field, errors);
    return errors.length === 0;
  }

  getValidationRules(field) {
    const rules = {};
    rules.required = field.hasAttribute('required');
    rules.email = field.type === 'email';
    rules.phone = field.classList.contains('phone-field');
    return rules;
  }

  updateFieldStatus(field, errors) {
    const errorElement = field.parentElement.querySelector('.error');
    
    if (errors.length > 0) {
      field.classList.add('invalid');
      if (errorElement) {
        errorElement.textContent = errors[0];
        errorElement.classList.add('show');
      }
    } else {
      field.classList.remove('invalid');
      if (errorElement) {
        errorElement.classList.remove('show');
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
    let isValid = true;
    this.form.querySelectorAll('input, textarea, select').forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    if (isValid) {
      this.submitForm();
    }
  }

  submitForm() {
    // Here you would typically send the form data to a server
    console.log('Form submitted successfully');
    
    // Show success message
    const submitBtn = this.form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Message Sent! ✓';
    submitBtn.disabled = true;

    // Reset after 3 seconds
    setTimeout(() => {
      this.form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 3000);
  }
}

// Initialize form validator on page load
document.addEventListener('DOMContentLoaded', function() {
  new FormValidator('form');
});

/* ========================================
   INTERSECTION OBSERVER FOR ANIMATIONS
   ======================================== */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.card, .timeline-item').forEach(el => {
    observer.observe(el);
  });
});

/* ========================================
   ACTIVE NAV LINK
   ======================================== */
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath.includes(href)) {
      link.style.color = 'var(--accent)';
    }
  });
});

/* ========================================
   SCROLL TO TOP BUTTON
   ======================================== */
window.addEventListener('scroll', function() {
  const scrollBtn = document.querySelector('.scroll-to-top');
  if (scrollBtn) {
    if (window.scrollY > 300) {
      scrollBtn.style.display = 'flex';
    } else {
      scrollBtn.style.display = 'none';
    }
  }
});
