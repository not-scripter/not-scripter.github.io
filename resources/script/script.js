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
  scrub: 2,
  start: "top 70%",
  end: "bottom 0%"
 },
 x: "-43.25rem",
})

gsap.to(".scrollerBot", {
 scrollTrigger: {
  trigger: ".scroller",
  scroller: "body",
  scrub: 2,
  start: "top 70%",
  end: "bottom 0%",
 },
 x: "0",
})
