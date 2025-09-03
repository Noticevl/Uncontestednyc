
// Tabs
document.querySelectorAll('[data-tabs]').forEach(wrapper => {
  const tabs = wrapper.querySelectorAll('.tab');
  const panels = wrapper.querySelectorAll('[data-tab-panel]');
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('active'));
      panels.forEach(p => p.style.display = 'none');
      t.classList.add('active');
      panels[i].style.display = 'block';
    });
  });
  // init
  tabs[0]?.classList.add('active');
  panels.forEach((p, i) => p.style.display = i === 0 ? 'block':'none');
});

// Accordions
document.querySelectorAll('.acc-item .acc-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.acc-item');
    item.classList.toggle('open');
  });
});
