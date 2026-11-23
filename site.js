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
})();