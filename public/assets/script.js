// Popover close when clicking outside
document.addEventListener('click', (e)=>{
  document.querySelectorAll('details.pill[open]').forEach(d=>{
    if(!d.contains(e.target)) d.removeAttribute('open')
  })
})

// Tabs on hub page
const hubTabs = document.querySelectorAll('[data-hub-tab]')
const hubPanels = document.querySelectorAll('[data-hub-panel]')
if(hubTabs.length){
  const activate = (id)=>{
    hubTabs.forEach(b=>b.classList.toggle('active', b.dataset.hubTab===id))
    hubPanels.forEach(p=>p.style.display = (p.dataset.hubPanel===id?'block':'none'))
  }
  hubTabs.forEach(b=>b.addEventListener('click', (e)=>{e.preventDefault(); activate(b.dataset.hubTab)}))
  // default
  activate(hubTabs[0].dataset.hubTab)
}
