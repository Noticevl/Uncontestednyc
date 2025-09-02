
// FAQ accordion
document.addEventListener('click', (e)=>{
  const q = e.target.closest('.faq-q');
  if(!q) return;
  const item = q.closest('.faq-item');
  item.classList.toggle('open');
});
