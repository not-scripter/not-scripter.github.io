$(function(){
  $(".headerx").load("../../assets/header.html"); 
});
$(function(){
  $(".footerx").load("../../assets/footer.html"); 
});
$(function(){
  $(".mobileNav").load("../../assets/mobileNav.html"); 
});
$(function(){
  $(".settingsMenuBg").load("../../assets/settings.html"); 
});
$(function(){
  $(".searchBox").load("../../assets/searchBox.html"); 
});

let tl = gsap.timeline();
tl.from(".devMode", {
 opacity: 0,
 y: "-100%",
 duration: 2,
 ease: Expo.easeInOut,
})


gsap.to(".scrollerTop", {
 scrollTrigger: {
  trigger: ".scroller",
  scroller: "body",
  scrub: 5,
  start: "top 90%",
  end: "bottom 0%"
 },
 right: 0,
})

gsap.to(".scrollerBot", {
 scrollTrigger: {
  trigger: ".scroller",
  scroller: "body",
  scrub: 5,
  start: "top 90%",
  end: "bottom 0%",
 },
 left: 0,
})
