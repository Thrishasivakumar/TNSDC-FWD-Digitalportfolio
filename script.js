// Contact form handling
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  msg.textContent = "✅ Thanks, your message has been sent!";
  msg.style.color = "black";
  form.reset();
});