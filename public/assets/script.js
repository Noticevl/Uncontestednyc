
// Popovers for chips
document.querySelectorAll('.chip').forEach(chip=>{
  const content = chip.dataset.popover;
  if(!content) return;
  const pop = document.createElement('div');
  pop.className = 'pop';
  pop.textContent = content;
  chip.appendChild(pop);
  chip.addEventListener('click', e=>{
    const isOpen = chip.getAttribute('aria-expanded')==='true';
    document.querySelectorAll('.chip[aria-expanded="true"]').forEach(c=>{
      c.setAttribute('aria-expanded','false');
      c.querySelector('.pop').style.display='none';
    });
    if(!isOpen){
      chip.setAttribute('aria-expanded','true');
      pop.style.display='block';
    }
  });
});
document.addEventListener('click', e=>{
  if(!e.target.closest('.chip')){
    document.querySelectorAll('.chip[aria-expanded="true"]').forEach(c=>{
      c.setAttribute('aria-expanded','false');
      c.querySelector('.pop').style.display='none';
    });
  }
});

// Tabs (hub)
const tabbars = document.querySelectorAll('[data-tabs]');
tabbars.forEach(bar=>{
  const tabs = bar.querySelectorAll('.tab');
  const panes = document.querySelectorAll('#'+bar.dataset.tabs+' > section');
  function activate(i){
    tabs.forEach((t,idx)=>t.classList.toggle('active', idx===i));
    panes.forEach((p,idx)=>p.classList.toggle('active', idx===i));
  }
  tabs.forEach((t,idx)=> t.addEventListener('click', ()=>activate(idx)));
  activate(0);
});
