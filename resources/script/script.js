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


gsap.from(".devMode", {
 opacity: 0,
 y: "-100%",
 duration: 2,
 ease: Expo.easeInOut,
})
