// ------ ---- -------- --------- ---------  JS CODE START  ------- ----- ---- ---- ------- -----//

// Example: Smooth scrolling when clicking navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});
