// import LocomotiveScroll from 'locomotive-scroll';


let scroll = new LocomotiveScroll({

    el: document.querySelector('#main'),
    smooth: true
   
});

function circlechaptakaro(){
    let xscale = 1;
    let  yscale = 1;

    let  xprev = 0;
    let  yprev = 0;

    window.addEventListener("mousemove", function(dets){
        // clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);

        // var xdiff = dets.clientX - xprev;
        // var ydiff = dets.clientY - yprev;

        xprev =dets.clientX;
        yprev = dets.clientY;


        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function (){
            
            document.querySelector("#minicircle").style.transform= `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;//1,1 makes the mouse circle

        }, 100);
       
       

    } );
}
circlechaptakaro();


function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove",function (dets) {
        document.querySelector("#minicircle").style.transform= `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}, ${yscale  })`;
      
    })

}
circleMouseFollower();

function firstpageAnim(){
    let tl = gsap.timeline();
    tl.from("#nav",{
        y:'-10',
        opacity: 0,
        delay:0.3,
        ease:Expo.easeInOut,
        duration:2
    })
    tl.from("#heading",{
        y:10,
        opacity:0,
        ease:Expo.easeInOut,
        duration:1,
        // stagger:5/

    })
    tl.from("#heading2",{
        x:30,
        opacity:0,
        duration:1,
        stagger:2
       
    })
    tl.from("#hfooter",{
        x:-40,
        opacity:0,
        duration:1.5,
        delay:-.5,
        stagger:5



    })
    gsap.from(" #second ")

    tl.from(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        stagger:.2
    })
    tl.from("#footerleft",{
        x:-29,
        opacity:0,
        duration:2,
        stagger:.2
    })
    tl.from("#footerright",{
        opacity:1,
        y:300,
        duration:.5,
        delay:1,
        stagger:.2
    })
  
}
firstpageAnim();

//skew the mouse mouse in averaege (difinating maximum and minimum )


// document.querySelectorAll(".elem").forEach(function(elem){
//     elem.addEventListener("mousemove", function(details){
//         // console.log(details)
//        console.log(dets.clientY -  elem.getBoundingClientRect().top);
//         gsap.to(elem.querySelector("img"),{
//             opacity : 1,
//             ease : Power1,
//             top: diff,
//             left:dets.clientX


//         })
        
   

//     })

// });

let second = document.querySelectorAll(".elems")
second.forEach(function(elem){
    // elem.addEventListener("mouseenter",function(){
    //     backgroundColor="red"
    // })
    elem.addEventListener("mouseenter",function(){
        let att = elem.getAttribute("data-image")
        // console.log(att)
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

