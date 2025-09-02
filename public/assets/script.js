
document.querySelectorAll('img[data-fallback]').forEach(img=>{
  img.addEventListener('error', ()=>{
    const wrap = img.closest('.media-mask') || img.parentElement;
    if(wrap){ wrap.classList.add('fallback'); img.remove(); }
  });
});
