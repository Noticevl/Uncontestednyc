
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('[data-tab]');
  const panels = document.querySelectorAll('[data-panel]');
  tabs.forEach(t => {
    t.addEventListener('click', () => {
      const name = t.getAttribute('data-tab');
      tabs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      panels.forEach(p => {
        p.classList.toggle('active', p.getAttribute('data-panel') === name);
      });
    });
  });
});
