
// Popovers for hero chips
document.addEventListener('click', (e)=>{
  const t = e.target.closest('[data-pop]');
  // Close all first
  document.querySelectorAll('.popover').forEach(p=>p.remove());
  if(!t) return;
  const txt = t.getAttribute('data-pop');
  const pop = document.createElement('div');
  pop.className = 'popover';
  pop.innerHTML = `<button class="close" aria-label="Close">×</button><p>${txt}</p>`;
  t.closest('.rel').appendChild(pop);
  // Position
  const r = t.getBoundingClientRect();
  const pr = t.closest('.rel').getBoundingClientRect();
  pop.style.left = (r.left - pr.left) + 'px';
  pop.style.top = (r.bottom - pr.top + 10) + 'px';
});
document.addEventListener('keydown',(e)=>{
  if(e.key==='Escape') document.querySelectorAll('.popover').forEach(p=>p.remove());
});
document.addEventListener('click',(e)=>{
  if(!e.target.closest('.popover') && !e.target.closest('[data-pop]')){
    document.querySelectorAll('.popover').forEach(p=>p.remove());
  }
});

// Tabs on hub
function initTabs(){
  document.querySelectorAll('[role="tab"]').forEach(tab=>{
    tab.addEventListener('click', ()=>{
      const group = tab.closest('[role="tablist"]');
      group.querySelectorAll('[role="tab"]').forEach(t=>t.setAttribute('aria-selected','false'));
      tab.setAttribute('aria-selected','true');
      const target = tab.getAttribute('data-target');
      document.querySelectorAll('.tabpanel').forEach(p=>p.classList.remove('active'));
      document.getElementById(target).classList.add('active');
    });
  });
}
document.addEventListener('DOMContentLoaded', initTabs);

// FAQ accordions are native <details>

// Quick intake micro-widget -> intake.html with prefilled query
function goQuickIntake(){
  const n = document.getElementById('qi-name').value.trim();
  const e = document.getElementById('qi-email').value.trim();
  const p = document.getElementById('qi-phone').value.trim();
  const q = new URLSearchParams({name:n,email:e,phone:p});
  window.location.href = 'intake.html?'+q.toString();
}
