document.getElementById('escHam').addEventListener('click',function(){
  document.getElementById('escMob').classList.toggle('open');
});
// Highlight active nav
var path = window.location.pathname;
document.querySelectorAll('.esc-nav li a').forEach(function(a){
  if(a.getAttribute('href') === path) a.parentElement.classList.add('active');
});

// homepage

(function(){
  var c=document.getElementById('epCanvas'),ctx=c.getContext('2d'),W,H,P=[];
  function resize(){W=c.width=c.offsetWidth||window.innerWidth;H=c.height=c.offsetHeight||window.innerHeight;P=[];for(var i=0;i<60;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*1.5+.3,t:i%3,a:Math.random()*Math.PI*2,va:(Math.random()-.5)*.015,sz:Math.random()*12+6});}
  function dBook(x,y,w,h,a,al){ctx.save();ctx.translate(x,y);ctx.rotate(a);ctx.globalAlpha=al;ctx.strokeStyle='#C8922A';ctx.lineWidth=1;ctx.beginPath();ctx.rect(-w/2,-h/2,w,h);ctx.stroke();ctx.beginPath();ctx.moveTo(-w/2+3,-h/2+5);ctx.lineTo(w/2-3,-h/2+5);ctx.stroke();ctx.beginPath();ctx.moveTo(-w/2,-h/2);ctx.lineTo(-w/2,h/2);ctx.lineWidth=3;ctx.stroke();ctx.restore();}
  function dStar(x,y,r,a,al){ctx.save();ctx.translate(x,y);ctx.rotate(a);ctx.globalAlpha=al;ctx.strokeStyle='#E8B84B';ctx.lineWidth=1;ctx.beginPath();for(var i=0;i<5;i++){var ag=i*Math.PI*2/5-Math.PI/2;i===0?ctx.moveTo(r*Math.cos(ag),r*Math.sin(ag)):ctx.lineTo(r*Math.cos(ag),r*Math.sin(ag));}ctx.closePath();ctx.stroke();ctx.restore();}
  function draw(){ctx.clearRect(0,0,W,H);P.forEach(function(p){p.x+=p.vx;p.y+=p.vy;p.a+=p.va;if(p.x<-40)p.x=W+40;if(p.x>W+40)p.x=-40;if(p.y<-40)p.y=H+40;if(p.y>H+40)p.y=-40;var al=.18+Math.sin(Date.now()*.0007+p.x*.01)*.1;if(p.t===0)dBook(p.x,p.y,p.sz*1.5,p.sz*2,p.a,al);else if(p.t===1)dStar(p.x,p.y,p.sz*.6,p.a,al);else{ctx.save();ctx.globalAlpha=al*1.3;ctx.fillStyle='#C8922A';ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();ctx.restore();}});for(var i=0;i<P.length;i++)for(var j=i+1;j<P.length;j++){var dx=P[i].x-P[j].x,dy=P[i].y-P[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<120){ctx.save();ctx.globalAlpha=(1-d/120)*.05;ctx.strokeStyle='#C8922A';ctx.lineWidth=.5;ctx.beginPath();ctx.moveTo(P[i].x,P[i].y);ctx.lineTo(P[j].x,P[j].y);ctx.stroke();ctx.restore();}}requestAnimationFrame(draw);}
  resize();draw();window.addEventListener('resize',resize);
})();

/* FAQ */
document.querySelectorAll('.ep-faq-item').forEach(function(item){
  item.addEventListener('click',function(){
    document.querySelectorAll('.ep-faq-item.open').forEach(function(i){if(i!==item)i.classList.remove('open');});
    item.classList.toggle('open');
  });
});

/* REVEAL */
(function(){
  function rev(){
    document.querySelectorAll('.esc-reveal:not(.esc-visible)').forEach(function(el){
      var ob=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('esc-visible');ob.unobserve(e.target);}});},{threshold:.08});
      ob.observe(el);
    });
  }
  var st=document.createElement('style');
  st.textContent='.esc-reveal{opacity:0;transform:translateY(28px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}.esc-visible{opacity:1!important;transform:translateY(0)!important}.esc-rd1{transition-delay:.1s}.esc-rd2{transition-delay:.2s}.esc-rd3{transition-delay:.3s}.esc-rd4{transition-delay:.4s}';
  document.head.appendChild(st);
  rev();
})();


// about

(function(){
  var st=document.createElement('style');
  st.textContent='.ab-rev{opacity:0;transform:translateY(28px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}.ab-vis{opacity:1!important;transform:translateY(0)!important}.ab-d1{transition-delay:.1s}.ab-d2{transition-delay:.2s}.ab-d3{transition-delay:.3s}';
  document.head.appendChild(st);
  document.querySelectorAll('.ab-rev').forEach(function(el){
    var ob=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('ab-vis');ob.unobserve(e.target);}});},{threshold:.08});
    ob.observe(el);
  });
})();

// blogsection

function blFilter(btn,cat){
  document.querySelectorAll('.bl-filter-btn').forEach(function(b){b.classList.remove('active');});
  btn.classList.add('active');
}
function blSubscribe(){
  var email=document.getElementById('blEmail').value;
  if(!email||!email.includes('@')){alert('Please enter a valid email address.');return;}
  alert('Thank you for subscribing! 😊 We\'ll send you the latest tips and updates.');
  document.getElementById('blEmail').value='';
}
(function(){
  var st=document.createElement('style');
  st.textContent='.bl-rev{opacity:0;transform:translateY(28px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}.bl-vis{opacity:1!important;transform:translateY(0)!important}.bl-d1{transition-delay:.1s}.bl-d2{transition-delay:.2s}.bl-d3{transition-delay:.3s}';
  document.head.appendChild(st);
  document.querySelectorAll('.bl-rev').forEach(function(el){
    var ob=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('bl-vis');ob.unobserve(e.target);}});},{threshold:.08});
    ob.observe(el);
  });
})();

// contactsection

function ctSubmit(){
  var n=document.getElementById('ctName').value;
  var p=document.getElementById('ctPhone').value;
  if(!n.trim()||!p.trim()){alert('Please fill in your name and phone number.');return;}
  document.getElementById('ctSuccess').classList.add('show');
  document.getElementById('ctName').value='';
  document.getElementById('ctPhone').value='';
  document.getElementById('ctEmail').value='';
  document.getElementById('ctCourse').value='';
  document.getElementById('ctBatch').value='';
  document.getElementById('ctMsg').value='';
  setTimeout(function(){document.getElementById('ctSuccess').classList.remove('show');},5000);
}
document.querySelectorAll('.ct-faq-item').forEach(function(item){
  item.addEventListener('click',function(){
    document.querySelectorAll('.ct-faq-item.open').forEach(function(i){if(i!==item)i.classList.remove('open');});
    item.classList.toggle('open');
  });
});
(function(){
  var st=document.createElement('style');
  st.textContent='.ct-rev{opacity:0;transform:translateY(28px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}.ct-vis{opacity:1!important;transform:translateY(0)!important}.ct-d1{transition-delay:.1s}.ct-d2{transition-delay:.2s}.ct-d3{transition-delay:.3s}';
  document.head.appendChild(st);
  document.querySelectorAll('.ct-rev').forEach(function(el){
    var ob=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('ct-vis');ob.unobserve(e.target);}});},{threshold:.08});
    ob.observe(el);
  });
})();

// footersection

(function(){
  var cur=document.getElementById('escCursor'),ring=document.getElementById('escRing');
  if(!cur||!ring)return;
  var mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
  function anim(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(anim);}
  anim();
  document.querySelectorAll('a,button').forEach(function(el){
    el.addEventListener('mouseenter',function(){cur.style.width='20px';cur.style.height='20px';ring.style.width='50px';ring.style.height='50px';});
    el.addEventListener('mouseleave',function(){cur.style.width='12px';cur.style.height='12px';ring.style.width='36px';ring.style.height='36px';});
  });
})();

// TOAST GLOBAL
window.escToast=function(msg){
  var t=document.getElementById('escToast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(function(){t.classList.remove('show');},3500);
};

// SCROLL REVEAL GLOBAL
window.escReveal=function(){
  document.querySelectorAll('.esc-reveal:not(.esc-visible)').forEach(function(el){
    var ob=new IntersectionObserver(function(entries){
      entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('esc-visible');ob.unobserve(e.target);}});
    },{threshold:.08});
    ob.observe(el);
  });
};
document.addEventListener('DOMContentLoaded',window.escReveal);

// GLOBAL REVEAL CSS
var st=document.createElement('style');
st.textContent='.esc-reveal{opacity:0;transform:translateY(28px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}.esc-visible{opacity:1!important;transform:translateY(0)!important}.esc-rd1{transition-delay:.1s}.esc-rd2{transition-delay:.2s}.esc-rd3{transition-delay:.3s}.esc-rd4{transition-delay:.4s}';
document.head.appendChild(st);