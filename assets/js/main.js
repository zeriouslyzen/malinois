function initReveal(){
  const targets=document.querySelectorAll('.reveal,.proof');
  if(!targets.length)return;
  const io=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(!entry.isIntersecting)return;
      entry.target.classList.add('vis');
      const cnt=entry.target.querySelector('.stat-counter');
      if(cnt&&!cnt.dataset.done){
        cnt.dataset.done='1';
        animateCounter(cnt,parseInt(cnt.dataset.target||'0',10));
      }
      io.unobserve(entry.target);
    });
  },{threshold:.12});
  targets.forEach((el)=>io.observe(el));
}

function animateCounter(el,target,duration=1500){
  let start=null;
  const step=(ts)=>{
    if(!start)start=ts;
    const p=Math.min((ts-start)/duration,1);
    const eased=1-Math.pow(1-p,3);
    el.textContent=Math.round(eased*target).toString();
    if(p<1)requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initNavEffects(){
  window.addEventListener('scroll',()=>{
    const nav=document.querySelector('nav');
    if(!nav)return;
    nav.style.borderBottomColor=window.scrollY>30?'rgba(255,255,255,.12)':'';
  },{passive:true});
}

function initMegaMenu(){
  const items=[...document.querySelectorAll('.nav-item.has-mega')];
  if(!items.length)return;
  let closeTimer=null;

  const closeAll=()=>items.forEach((item)=>item.classList.remove('open'));
  const openItem=(item)=>{closeAll();item.classList.add('open');};

  items.forEach((item)=>{
    item.addEventListener('mouseenter',()=>{
      if(closeTimer)clearTimeout(closeTimer);
      openItem(item);
    });
    item.addEventListener('mouseleave',()=>{
      closeTimer=setTimeout(()=>item.classList.remove('open'),140);
    });

    const trigger=item.querySelector('.nav-link');
    trigger.addEventListener('focus',()=>openItem(item));

    item.querySelectorAll('.mega-link,.mega-cta').forEach((link)=>{
      link.addEventListener('keydown',(e)=>{
        if(e.key==='Escape'){
          closeAll();
          trigger.focus();
        }
      });
    });
  });

  document.addEventListener('click',(e)=>{
    if(!e.target.closest('.nav-item.has-mega'))closeAll();
  });
  document.addEventListener('keydown',(e)=>{if(e.key==='Escape')closeAll();});
}

document.addEventListener('DOMContentLoaded',()=>{
  initReveal();
  initNavEffects();
  initMegaMenu();
});
