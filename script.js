// Simple scroll-to-top button logic (optional enhancement for older users)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = "↑ Top";
scrollToTopBtn.style.position = "fixed";
scrollToTopBtn.style.bottom = "20px";
scrollToTopBtn.style.left = "20px";
scrollToTopBtn.style.padding = "10px 15px";
scrollToTopBtn.style.borderRadius = "8px";
scrollToTopBtn.style.border = "none";
scrollToTopBtn.style.backgroundColor = "#0077cc";
scrollToTopBtn.style.color = "#fff";
scrollToTopBtn.style.cursor = "pointer";
scrollToTopBtn.style.display = "none";
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
  scrollToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
