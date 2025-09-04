
function initTabs(){
  document.querySelectorAll(".tabs").forEach(group=>{
    const tabs = group.querySelectorAll(".tab");
    const panes = group.nextElementSibling.querySelectorAll(".pane");
    tabs.forEach((t,i)=>{
      t.addEventListener("click",()=>{
        tabs.forEach(x=>x.classList.remove("active"));
        panes.forEach(p=>p.classList.remove("active"));
        t.classList.add("active");
        panes[i].classList.add("active");
        group.scrollIntoView({behavior:"smooth",block:"start"});
      });
    });
  });
}
document.addEventListener("DOMContentLoaded", initTabs);
