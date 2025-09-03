
// Mobile nav (simple)
document.addEventListener('click', (e)=>{
  // chip tooltips
  const chip = e.target.closest('.chip[data-tip]');
  const anyOpen = document.querySelectorAll('.chip.active');
  if(chip){
    // toggle active on this, close others
    anyOpen.forEach(c=>{ if(c!==chip) c.classList.remove('active'); });
    chip.classList.toggle('active');
    e.stopPropagation();
  }else{
    anyOpen.forEach(c=>c.classList.remove('active'));
  }
  if(e.target.classList.contains('close-tip')){
    e.target.closest('.chip').classList.remove('active');
  }
});

// Accordion
document.querySelectorAll('.acc-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item = btn.closest('.acc-item');
    item.classList.toggle('open');
  });
});

// Tabs (Hub)
function setupTabs(){
  const tabs = document.querySelectorAll('[data-tabs]');
  tabs.forEach(wrapper=>{
    const tabBtns = wrapper.querySelectorAll('.tab');
    const panes = wrapper.querySelectorAll('.tabpane');
    tabBtns.forEach((btn,i)=>{
      btn.addEventListener('click',()=>{
        tabBtns.forEach(b=>b.classList.remove('active'));
        panes.forEach(p=>p.classList.remove('active'));
        btn.classList.add('active');
        panes[i].classList.add('active');
      });
    });
  });
}
setupTabs();
