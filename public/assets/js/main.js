
// basic no-framework interactions
document.addEventListener('click', (e)=>{
  const t = e.target.closest('[data-scroll]');
  if(t){
    e.preventDefault();
    const sel = t.getAttribute('data-scroll');
    const el = document.querySelector(sel);
    if(el){ window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 72, behavior:'smooth'}); }
  }
});
