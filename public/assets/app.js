
document.addEventListener('DOMContentLoaded', () => {
  // Expandable hub tiles
  document.querySelectorAll('[data-expand]').forEach(tile => {
    tile.addEventListener('click', () => {
      const id = tile.getAttribute('data-expand');
      const panel = document.getElementById(id);
      if(panel){
        panel.open = !panel.open;
        panel.scrollIntoView({behavior:'smooth', block:'center'});
      }
    });
  });
});
