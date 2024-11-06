function mainScript(){
	console.log(window.innerWidth)
	if(window.innerWidth>800){
		let x=splitText('.quote')
		let elems=Array.isArray(x) ? x : [x];
	    elems.forEach(
	    	function(elem){
	    	    ScrollTrigger.create({
	    	    	trigger:elem[0],
	    	    	start:'top 85%',
                    end:'bottom 8%',
                    onEnter:function(){
	    	            gsap.to(elem,{opacity:1,duration:0.5,stagger:0.05})
	    	        }
	            })
	        })
	    Array.from(document.querySelectorAll('.partBack')).forEach(function(elem){
	    	if(parseInt(getComputedStyle(elem.parentNode).height)>500){
	    	    ScrollTrigger.create({
	    	    	trigger:elem.parentNode,
	    	    	start:'top 20%',
	    	    	end:'bottom 90%',
	    	    	pin:elem,
	    	    	markers:true,
	    	    })
	    	    ScrollTrigger.create({
                	trigger:elem.parentNode,
                	start:'top 90%',
                	end:'80% 8%',
                	onEnter:()=>gsap.to(elem,{opacity:1}),
                	onLeave:()=>gsap.to(elem,{opacity:0}),
                	onEnterBack:()=>gsap.to(elem,{opacity:1}),
                	onLeaveBack:()=>gsap.to(elem,{opacity:0}),
                })
	        }
	        else{
                ScrollTrigger.create({
                	trigger:elem,
                	start:'top 85%',
                	end:'bottom 8%',
                	onEnter:()=>gsap.to(elem,{opacity:1,}),
                	onLeave:()=>gsap.to(elem,{opacity:0,}),
                	onEnterBack:()=>gsap.to(elem,{opacity:1,}),
                	onLeaveBack:()=>gsap.to(elem,{opacity:0,}),
                })
            }
	    })
    }
}