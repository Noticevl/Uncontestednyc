
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if(href.length > 1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior: 'smooth'});
    }
  });
});
const callBtn = document.getElementById('sticky-call');
if (callBtn){
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      callBtn.style.opacity = '0';
      callBtn.style.pointerEvents = 'none';
    } else {
      callBtn.style.opacity = '1';
      callBtn.style.pointerEvents = 'auto';
    }
  }, {threshold: 0.01});
  observer.observe(document.querySelector('header'));
}
