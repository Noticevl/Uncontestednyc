
function q(sel, el=document){return el.querySelector(sel)}
function qa(sel, el=document){return [...el.querySelectorAll(sel)]}

window.addEventListener('DOMContentLoaded', ()=>{
  // FAQ collapsed by default; <details> handles toggling
  // Smooth scroll
  qa('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href').slice(1)
      const t = document.getElementById(id)
      if(t){
        e.preventDefault()
        t.scrollIntoView({behavior:'smooth', block:'start'})
      }
    })
  })
})
