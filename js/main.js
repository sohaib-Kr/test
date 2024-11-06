ccr=[]
function killCCRs(){
  ccr.forEach(function(elem){
    elem.kill()
  })
  ccr=[]
}
function mainScript(){
  let T = splitText('#firstWrapper h2').concat(splitText('#firstWrapper p'));
  ScrollTrigger.create({
    trigger: '#firstWrapper',
    start: 'top 85%',
    end: 'bottom 8%',
    onEnter:function(){
      gsap.timeline().fromTo('.coverTop',{ opacity: 0, x: -5,scale:0.95},{opacity: 1,x: 0,})
      .to('.coverTop',{scale:1,duration:0.9,ease: 'linear' })
      killCCRs()
      T.forEach((elem, index) => {
        gsap.set(T[index],{opacity:0})
        ccr.push(gsap.to(T[index],{ opacity: 1, duration: 0.4, stagger: 0.03 }))
      });
    },
    onEnterBack:function(){
      gsap.to('.coverTop',{opacity: 1})
      killCCRs()
      T.forEach((elem, index) => {
        gsap.set(T[index],{opacity:0})
        ccr.push(gsap.to(T[index],{ opacity: 1, duration: 0.4}))
      })},
    onLeave: () => {
      gsap.to('.coverTop', { opacity: 0 });
      gsap.to(T,{opacity:0,duration:0.2})
    },
    onLeaveBack:() => {
      gsap.to('.coverTop', { opacity: 0 });
      gsap.to(T,{opacity:0,duration:0.4})
    },
  });
  Array.from(document.querySelectorAll('.ourPick')).forEach(function(elem){
    ScrollTrigger.create({
      trigger:elem,
    start: 'top 90%',
    end: 'bottom 20%',
      onEnter:(self)=>{gsap.timeline()
        .fromTo(
          self.trigger,
          { x: -50, opacity: 0, scale: 1.05 },
          { x: 0, opacity: 1, scale: 1.05 ,duration:0.7,ease:'linear'}
        )
        .to(self.trigger, { scale: 1, duration: 0.5 ,ease:'linear'});},
      onLeaveBack:(self)=>gsap.to(self.trigger, { opacity: 0 })
    })
  })
  ScrollTrigger.create({
    trigger: '.ourPick',
    start: 'top 50%',
    end: 'bottom 20%',
    onEnter:() => {
      gsap.to('.coverTop', { opacity: 0 });
      gsap.to('#firstWrapper p', { opacity: 0 });
      gsap.to('#firstWrapper h2', { opacity: 0 });
      gsap.to('#ourPick h1', { opacity: 1 });
      gsap.to(splitText('#ourPick h1'), { opacity: 1, stagger: 0.1 });
    },
    onLeaveBack: () => {
      gsap.to('.coverTop', { opacity: 1, duration: 0.7 });
      gsap.to('#firstWrapper p', { opacity: 1, duration: 0.7 });
      gsap.to('#firstWrapper h2', { opacity: 1, duration: 0.7 });
      gsap.to('#ourPick h1', { opacity: 0, duration: 0.9 });
    },
  });
  ScrollTrigger.create({
    trigger: '#authors',
    start: 'top 50%',
    end: 'bottom 40%',
    onEnter: () => {
      gsap.fromTo(
        '.author',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: 'power2.in',
          onComplete: () => {
            gsap.to('.author h2', { opacity: 1, duration: 0 });
            T=splitText('.author h2')
            document.querySelectorAll('.author h2').forEach((element,index) => {
              gsap.to(T[index], { opacity: 1, duration: 0.4 ,stagger:0.1});
            });
          },
        }
      );
      gsap.fromTo('.authorBack', { y: 30 }, { y: 0, duration: 1.2 });
    },
    onLeaveBack: () => {
      gsap.to('.author', { opacity: 0 });
      gsap.to('.author h2', { opacity: 0, duration: 0 });
    },
    onLeave: () => {
      gsap.to('.author', { opacity: 0 });
    },
    onEnterBack: () => {
      gsap.to('.author', { opacity: 1 });
    },
  });

  ScrollTrigger.create({
    trigger: '#signBack',
    start: 'top 55%',
    end: 'bottom 60%',
    scrub: true,
    animation: gsap.to('#signBackRight', { x: 40, y: -40 }),
    onEnter: () => {
      gsap.to('#signBack', { opacity: 1, duration: 1 });
      gsap.to('#signUp h3', { opacity: 1, duration: 1 });
      gsap.to('#signUp input', { opacity: 1, duration: 1, stagger: 0.5 });
      gsap.fromTo('#signBackLeft', { x: -50, y: 50 },{ x: 0, y:0 ,duration:1.5,ease:'linear'})
      gsap.fromTo('#signBackRight', { x: 50, y: -50 },{ x: 0, y:0,duration:1.5 ,ease:'linear' })
      gsap.to(splitText('#signUp h3'),{ opacity: 1, duration: 0.5,stagger:0.07 })
    },
    onLeaveBack: () => {
      gsap.to('#signBack', { opacity: 0, duration: 1 });
      gsap.to('#signUp input', { opacity: 0, duration: 1, stagger: 0.5 });
      gsap.to('#signUp h3', { opacity: 0, duration: 1 });
    }
  });
  ScrollTrigger.create({
    trigger: '#signBack',
    start: 'top 60%',
    end: 'bottom 60%',
    scrub: true,
    animation: gsap.to('#signBackLeft', { x: -40, y: 40 }),
  });

  Observer.create({
    target: '#signBack',
    type: 'pointer',
    onMove: (e) => {
      gsap.to('#signBackLeft div', {
        x: -e.x / 40,
        y: e.y / 40,
        duration: 0,
      });
      gsap.to('#signBackRight div', {
        x: e.x / 40,
        y: -e.y / 40,
        duration: 0,
      });
    },
  });
}