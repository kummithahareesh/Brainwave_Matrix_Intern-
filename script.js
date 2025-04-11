// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Scroll to top button
  const scrollBtn = document.getElementById('scrollToTopBtn');
  
  window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };
  
  scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Contact form validation
  const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (!email.includes('@') || !email.includes('.')) {
      alert("Please enter a valid email.");
      return;
    }
  
    alert("Message sent! We'll get back to you soon. 😊");
    this.reset(); // clear the form
  });
  
