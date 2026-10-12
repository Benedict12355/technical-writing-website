// =====================================================
// TECHNICAL WRITING WEBSITE — Main JavaScript
// =====================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---- Back to Top Button ----
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.style.display = 'flex';
      } else {
        backToTop.style.display = 'none';
      }
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Active Nav Link Highlighting ----
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath.startsWith('lecture') && href === 'lectures.html')) {
      link.classList.add('active');
    }
  });

  // ---- Contact Form (Formspree) ----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const status = document.getElementById('formStatus');
      const data = new FormData(contactForm);

      fetch(contactForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          status.innerHTML = '<div class="alert alert-success mt-3">✅ Thank you! Your message has been sent.</div>';
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(() => {
        status.innerHTML = '<div class="alert alert-danger mt-3">⚠️ Something went wrong. Please email me directly at markbenedictselda8@gmail.com.</div>';
      });
    });
  }

  // ---- Navbar Shadow on Scroll ----
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    });
  }

});