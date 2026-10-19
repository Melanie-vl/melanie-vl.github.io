(function(){
  /* photo viewer */
  var dlg=document.getElementById('lightbox');
  if(dlg&&dlg.showModal){
    var big=dlg.querySelector('img'), count=dlg.querySelector('.count');
    var list=[], i=0;
    var show=function(){var im=list[i];big.src=im.getAttribute('src');big.alt=im.alt;count.textContent=(i+1)+' / '+list.length;};
    var open=function(imgs,n){list=imgs;i=n;show();dlg.showModal();};
    document.querySelectorAll('[data-gallery]').forEach(function(g){
      var imgs=[].slice.call(g.querySelectorAll('img'));
      g.querySelectorAll('button').forEach(function(b,n){
        b.setAttribute('aria-label','Enlarge photo: '+imgs[n].alt);
        b.addEventListener('click',function(){open(imgs,n);});
      });
      var all=g.parentNode.querySelector('.all');
      if(all){
        all.textContent='View all '+imgs.length+' photos';
        all.addEventListener('click',function(){open(imgs,0);});
      }
    });
    var step=function(d){i=(i+d+list.length)%list.length;show();};
    dlg.querySelector('.prev').onclick=function(){step(-1)};
    dlg.querySelector('.next').onclick=function(){step(1)};
    dlg.querySelector('.close').onclick=function(){dlg.close()};
    dlg.addEventListener('click',function(e){if(e.target===dlg||e.target.classList.contains('lb'))dlg.close();});
    document.addEventListener('keydown',function(e){if(!dlg.open)return;if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1);});
  }

  /* gentle depth on scroll: layers move at slightly different speeds */
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var layers=[].slice.call(document.querySelectorAll('[data-speed]'));
  if(!layers.length) return;
  var bases=layers.map(function(el){return el.getAttribute('data-base')||'';});
  var ticking=false;
  var update=function(){
    var vh=window.innerHeight;
    layers.forEach(function(el,k){
      var box=(el.closest('.stage,.head-art,.portrait')||el.parentNode).getBoundingClientRect();
      if(box.bottom<-200||box.top>vh+200) return;
      var off=box.top+box.height/2-vh/2;
      el.style.transform=bases[k]+' translateY('+(off*parseFloat(el.getAttribute('data-speed'))).toFixed(1)+'px)';
    });
    ticking=false;
  };
  window.addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(update);}},{passive:true});
  window.addEventListener('resize',update);
  update();
})();
