document.addEventListener('DOMContentLoaded', function(){
  // Menu toggle for small screens
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if(toggle){
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      if(isOpen){
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.alignItems = 'flex-end';
      } else {
        navLinks.style.display = '';
      }
    });
  }
  // Close mobile menu when a nav link is clicked
  const links = document.querySelectorAll('.nav-links a');
  links && links.forEach(link => link.addEventListener('click', () => {
    if(navLinks.classList.contains('open')){
      navLinks.classList.remove('open');
      navLinks.style.display = '';
      if(toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  }));

  // Fill current year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Submit handler - friendly message
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');
      if(!name.value.trim()){
        alert('Please enter your name');
        name.focus();
        return;
      }
      if(!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        alert('Please enter a valid email');
        email.focus();
        return;
      }
      if(!message.value.trim()){
        alert('Please enter a message');
        message.focus();
        return;
      }
      alert('Thanks! Your message has been received.');
      form.reset();
    });
  }
});