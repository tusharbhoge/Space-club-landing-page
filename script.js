var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-130+"px"
    blur.style.top = dets.y-130+"px"
})



gsap.to("nav",{
    backgroundColor :"#000",
    height:"120px",
    duration: 0.4,
    scrollTrigger:{
    trigger: "nav",
    scroller: "body",
    marker:true,
    start:"top 10px",
    end:"top -40px",
    scrub:2
    }
})