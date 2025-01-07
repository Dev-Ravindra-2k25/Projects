  var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 90%",
    end:"50% 50%",
    scrub:"true",             //SCRUB   REVERSE ANIMATION..................
    // markers: true,
}})
tl.to("#fanta",{
    top:"120%",
    left:"0%"
},'lemon')

tl.to("#lemon",{
    top:"100%",
    rotate:"180deg",

    left:"20%",
},'lemon')

tl.to("#lemon2",{
    top:"155%",
    left:"2%",
},'lemon')

tl.to("#leaf",{
    rotate:"180deg",
    top:"105%",
    left:"2%",
},'lemon')



var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 90%",
    end:"20% 50%",
    scrub:"true",             //SCRUB   REVERSE ANIMATION..................
    // markers: true,
}})

tl2.from(".lemon",{
    rotate:"-90deg",
    left:"-100%",
    top:"110%",
},'coca')
tl2.from("#cocacola",{
    rotate:"-90deg",
    left:"-100%",
    top:"110%",
},'coca')



tl2.from(".lemon",{
    rotate:"90deg",
    left:"100%",
    top:"110%",
},'coca')
tl2.from("#pepsi",{
    rotate:"90deg",
    left:"100%",
    top:"110%",
},'coca')


tl2.to("#lemon",{
    left:"40%",
    top:"198%",
},'coca')
tl2.to("#fanta",{
    left:"33%",
    width:"35%",
    top:"220%",
},'coca')


