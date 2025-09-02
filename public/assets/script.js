
document.addEventListener('click', (e)=>{
  if(e.target.matches('.faq-item button')){
    const item = e.target.closest('.faq-item');
    const ans = item.querySelector('.a');
    const open = ans.style.display==='block';
    document.querySelectorAll('.faq-item .a').forEach(a=>a.style.display='none');
    ans.style.display = open ? 'none' : 'block';
  }
});
