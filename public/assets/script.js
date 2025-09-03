
function toggleMenu(){
  const nav=document.querySelector('.nav');
  const cta=document.querySelector('.btn-cta');
  if(nav.style.display==='flex'){ nav.style.display='none'; if(cta) cta.style.display='none'; }
  else{ nav.style.display='flex'; if(cta) cta.style.display='inline-block'; }
}

// Tabs on hub
document.addEventListener('click', (e)=>{
  if(e.target.classList.contains('tab')){
    const buttons=[...document.querySelectorAll('.tab')];
    const panels=[...document.querySelectorAll('.tabpanel')];
    buttons.forEach(b=>b.classList.remove('active')); 
    panels.forEach(p=>p.classList.remove('active'));
    e.target.classList.add('active');
    const id=e.target.getAttribute('aria-controls');
    document.getElementById(id).classList.add('active');
  }

  if(e.target.classList.contains('pill')){
    const id=e.target.getAttribute('data-pop');
    const pop=document.getElementById(id);
    if(pop){ pop.classList.add('active'); }
  }
  if(e.target.classList.contains('pop-close')){
    const id=e.target.getAttribute('data-close');
    const pop=document.getElementById(id);
    if(pop){ pop.classList.remove('active'); }
  }
});
document.addEventListener('keydown', (e)=>{
  if(e.key==='Escape'){
    document.querySelectorAll('.popover').forEach(p=>p.classList.remove('active'));
  }
});
document.addEventListener('click',(e)=>{
  if(e.target.classList.contains('popover')){
    e.target.classList.remove('active');
  }
});
