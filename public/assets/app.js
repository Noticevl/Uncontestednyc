
document.querySelectorAll('[data-accordion]').forEach((acc)=>{
  acc.querySelectorAll('summary').forEach((s)=>{
    s.addEventListener('click', (e)=>{
      // default details handles toggle
    });
  });
});
// simple year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
