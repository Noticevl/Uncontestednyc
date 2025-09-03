
function openTab(id, el){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tabcontent').forEach(c=>c.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  el.classList.add('active');
}
document.addEventListener('DOMContentLoaded', ()=>{
  const first = document.querySelector('.tab');
  if(first){ first.click(); }
});
