setTimeout(() => {


let mobileMenu = document.querySelector('.mobileMenu');
let menuBtn = document.querySelector('.menuBtn');
let menuCloseBtn = document.querySelector('#menuCloseBtn');
let setBtn = document.querySelector('#setBtn');
let settingsMenuBg = document.querySelector('#settingsMenuBg');
// let deskSetCloseBtn = document.querySelector('#deskSetCloseBtn');




//Mobile Menu Btn

// MobileMenu
menuBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0;"
  menuBtn.style.cssText = "bottom: -10vh;"
  settingsMenuBg.style.cssText = "bottom: -70vw; opacity: 0;"
})
menuCloseBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: -60vw;"
  menuBtn.style.cssText = "bottom: 2.5vh;"
  settingsMenuBg.style.cssText = "bottom: -130vw;"
})
setBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0; height: 130vw; opacity: 0; z-index: -1;"
  menuBtn.style.cssText = "bottom: -10vh;"
  settingsMenuBg.style.cssText = "bottom: 0;"
})
deskSetCloseBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0;"
  menuBtn.style.cssText = "bottom: -10vh;"
  settingsMenuBg.style.cssText = "bottom: -70vw; opacity: 0;"
})






}, 1000);
