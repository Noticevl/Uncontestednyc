
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1); if(!id) return;
    const el=document.getElementById(id); if(!el) return;
    e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});
