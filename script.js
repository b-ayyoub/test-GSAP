// document.getElementById("btn").addEventListener("click", function(){
//     gsap.to(".box",{
//         duration: 1,
//         y: 0,
//         opacity: 1,
//         rotation: 180,
//         scale: 1.2,
//         ease: "bounce.inOut"
//     })
// });


///////////// exo 2
// window.addEventListener("DOMContentLoaded", function(){
//     gsap.from("#title", {
//         duration : 1.5,
//         opacity : 0,
//         y: -50,
//         ease : "power2out"

//     });
// });


//////////////// exo 3
// let tl = gsap.timeline({
//     default : { duration : 1, ease : "power2.out"}
// })

// tl.from("#title", { y: -50, opacity: 0})
//     .from("#btn", {scale:0, opacity: 0}, "+=0.5")
//     .from(".box", {x: -100, opacity:0});

////////////////////exo 4

// document.getElementById("showCard").addEventListener("click", function(){
//     gsap.fromTo(".card",
//         {y : -100, opacity :0},
//         {y: 150, opacity: 1, duration: 1, ease:"elastic.out(1, 0,8)" }
//     )
// })

document.getElementById("btn").addEventListener("click", function() {
    gsap.to(".box", {
        duration: 1,
        opacity: 1,
        scale: 2,
        y: 100,
        ease: "elastic.out(2, 0.5)" 
    });
});

document.getElementById("disp").addEventListener("click", function() {
    gsap.to(".box", {
        duration: 1,
        opacity: 0,
        y: 600,  
        ease: "power2.inOut"
    });
});