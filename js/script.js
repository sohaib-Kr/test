gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);
gsap.defaults({ duration: 0.8, ease: 'power2.in' });
window.onload = function () {
  Array.from(document.querySelectorAll('.gsapFadeOnScroll')).forEach(function(elem){
      ScrollTrigger.create({
        trigger:elem,
        start:'top 85%', 
        end:'bottom 8%', 
        onEnter:()=>gsap.to(elem,{opacity:1,}),
        onLeave:()=>gsap.to(elem,{opacity:0,}),
        onEnterBack:()=>gsap.to(elem,{opacity:1,}),
        onLeaveBack:()=>gsap.to(elem,{opacity:0,}),
      })
  })
  Array.from(document.querySelectorAll('.pseudoLink')).forEach(function(elem){
    elem.addEventListener('click',function(){
      window.location.href=elem.getAttribute('data-link')
    })
  })
  Array.from(document.querySelectorAll('.customBg')).forEach(
    function(elem){
      elem.style.backgroundImage='url(/images/'+elem.getAttribute('data-bg')+')'
    })
  Array.from(document.querySelectorAll('.varAspect')).forEach(
    function(elem){
      let newelem=elem.firstChild
      elem.style.aspectRatio=newelem.naturalWidth/newelem.naturalHeight
    })
    if (typeof mainScript === 'function') {
       mainScript();
    }
  //yoyo animations
  intouchyoyo = gsap.to('#intouch', {
    y: -15,
    duration: 1.4,
    repeat: -1,
    yoyo: true,
  });
  intouchayoyo = gsap.fromTo(
    '#intouch a',
    { boxShadow: '0 1px 3px 1px #0a52c7' },
    {
      duration: 1.4,
      repeat: -1,
      yoyo: true,
      boxShadow: '0 2px 13px 2px #0a52c7',
    }
  );

  gsap.fromTo('#headerTitle', { opacity: 0 }, { opacity: 1 });
  gsap.fromTo('#headerSub', { opacity: 0 }, { opacity: 1, delay: 0.5 });
  gsap.to(splitText('#headerTitle'), {
    color: 'white',
    textShadow: '0px 0px 10px #778aa9',
    delay: 0.5,
    duration: 0.3,
    stagger: 0.2,
  });
  gsap.to(splitText('#headerSub'), {
    color: '#e7e7e7',
    delay: 0.5,
    duration: 0.3,
    stagger: 0.05,
  });

  gsap.fromTo('#coverFilter', { opacity: 0.9 }, { opacity: 0.5, duration: 4 });


  ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    animation: gsap.fromTo('#scrollInd', { scaleX: 0.05 }, { scaleX: 1 }),
    scrub: 1.2,
    ease:'linear',
    pin: '#heroCover',
  })
  ScrollTrigger.create({
    trigger: '#foot',
    start: 'top 85%',
    end: 'bottom 8%',
    onEnter: () => {
      gsap.to(splitText('#foot h1'),{ opacity: 1, duration: 0.5,stagger:0.07});
      gsap.to(splitText('#foot p'),{ opacity: 1, duration: 0.5,stagger:0.03});
    },
  });
  //hover effect functions

  document.getElementById('intouch').addEventListener('mouseenter', () => {
    intouchyoyo.pause();
    intouchayoyo.pause();
    gsap.to('#intouch', { y: 0, duration: 0.7 });
    gsap.to('#intouch a', {
      boxShadow: '0 1px 3px 1px #0a52c7',
      duration: 0.7,
    });
  });

  document.getElementById('intouch').addEventListener('mouseleave', () => {
    intouchyoyo.play(0);
    intouchayoyo.play(0);
  });
};
