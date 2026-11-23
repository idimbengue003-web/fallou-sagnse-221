(function(){
  var nav=document.querySelector('.topbar');
  function onScroll(){if(window.scrollY>20){nav.classList.add('scrolled')}else{nav.classList.remove('scrolled')}}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  var burger=document.getElementById('burger'),clip=document.getElementById('menuClip'),backdrop=document.getElementById('backdrop');
  function open(){clip.classList.add('show');burger.classList.add('open');backdrop.classList.add('show');document.body.style.overflow='hidden'}
  function close(){clip.classList.remove('show');burger.classList.remove('open');backdrop.classList.remove('show');document.body.style.overflow=''}
  if(burger){burger.addEventListener('click',function(e){e.stopPropagation();if(clip.classList.contains('show')){close()}else{open()}})}
  if(backdrop){backdrop.addEventListener('click',close)}
  document.querySelectorAll('.menu-drawer a').forEach(function(a){a.addEventListener('click',close)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){close()}});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
  document.querySelectorAll('.prod').forEach(function(card){
    var thumbs=card.querySelectorAll('.prod-thumbs .thumb');if(!thumbs.length)return;
    var main=card.querySelector('.prod-main');if(!main)return;
    thumbs.forEach(function(t){t.addEventListener('click',function(){
      thumbs.forEach(function(x){x.classList.remove('on')});t.classList.add('on');
      main.src=t.dataset.src;var im=t.querySelector('img');if(im)main.alt=im.alt;
    })});
  });
  var sl=document.getElementById('slider');
  if(sl&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    var slSlide=sl.querySelectorAll('.slider-slide'),slImg=sl.querySelectorAll('.slider-slide img'),slDot=sl.querySelectorAll('.slider-dots span');
    function slUpd(){var r=sl.getBoundingClientRect(),vh=window.innerHeight;var p=(0-r.top)/(r.height-vh);p=p<0?0:p>1?1:p;var n=slSlide.length;for(var i=0;i<n;i++){var c=n>1?i/(n-1):0;var op=Math.abs(p-c)*2;op=op>1?0:1-op;slSlide[i].style.opacity=op.toFixed(3);slImg[i].style.transform='scale('+(1.02+0.08*op).toFixed(3)+')';if(slDot[i])slDot[i].classList.toggle('on',op>0.5);}}
    var slT;function slOn(){cancelAnimationFrame(slT);slT=requestAnimationFrame(slUpd);}window.addEventListener('scroll',slOn,{passive:true});window.addEventListener('resize',slOn);slUpd();
  }
})();