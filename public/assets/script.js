
// Tabs
document.querySelectorAll('[role="tab"]').forEach(btn=>{
  btn.addEventListener('click', e=>{
    const set = btn.closest('[data-tabset]');
    set.querySelectorAll('[role="tab"]').forEach(t=>t.setAttribute('aria-selected','false'));
    btn.setAttribute('aria-selected','true');
    const target = btn.getAttribute('aria-controls');
    set.querySelectorAll('.tabpanel').forEach(p=>p.classList.remove('active'));
    set.querySelector('#'+target).classList.add('active');
  });
});
// Default first tab active
document.querySelectorAll('[data-tabset]').forEach(set=>{
  const first = set.querySelector('[role="tab"]');
  const firstPanel = set.querySelector('.tabpanel');
  if(first) first.setAttribute('aria-selected','true');
  if(firstPanel) firstPanel.classList.add('active');
});
// Simple chip popover
document.querySelectorAll('[data-pop]').forEach(chip=>{
  chip.addEventListener('click', e=>{
    const msg = chip.getAttribute('data-pop');
    const tip = document.createElement('div');
    tip.textContent = msg;
    Object.assign(tip.style, {
      position:'absolute', background:'#0f172a', color:'#fff', padding:'8px 10px',
      borderRadius:'10px', fontSize:'12px', zIndex:40, transform:'translate(-50%,-120%)'
    });
    document.body.appendChild(tip);
    const r = chip.getBoundingClientRect();
    tip.style.left = (r.left + r.width/2)+'px';
    tip.style.top = (r.top) +'px';
    setTimeout(()=> tip.remove(), 1500);
  });
});
