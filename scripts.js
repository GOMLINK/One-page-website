document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    try {
      const response = await fetch('submit_form.php', {
        method: 'POST',
        body: formData
      });
      const result = await response.text();
      formStatus.textContent = result.includes('successfully') ? 'Message sent successfully!' : 'Failed to send message. Please try again.';
    } catch (error) {
      formStatus.textContent = 'An error occurred. Please try again.';
    }
  });
});
