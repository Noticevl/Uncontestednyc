
// Tabs
document.addEventListener('click', (e)=>{
  if(e.target.classList.contains('tab-btn')){
    const id = e.target.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    e.target.classList.add('active');
    document.querySelectorAll('.tab-panel').forEach(p=>{
      p.classList.toggle('active', p.id===id);
    });
  }
  if(e.target.classList.contains('faq-q')){
    e.target.parentElement.classList.toggle('open');
  }
});

// Optional: disable chip click navigation; show tooltip on click
document.querySelectorAll('.chip').forEach(ch=>{
  ch.addEventListener('click', ()=>{
    ch.classList.add('active');
    setTimeout(()=> ch.classList.remove('active'), 1800);
  });
});
