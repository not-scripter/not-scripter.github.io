let body = document.querySelector('body')
let mobileMenu = document.querySelector('.mobileMenu')
let menuBtn = document.querySelector('.menuBtn')
let menuCloseDark = document.querySelector('#menuCloseDark')
let menuCloseLight = document.querySelector('#menuCloseLight')
let darkMode = document.querySelector('.darkMode')
let modeBtn = document.querySelector('#modeBtn')
let setBtn = document.querySelector('#setBtn')
let setBtnDark = document.querySelector('#setBtnDark')
let setBackBtn = document.querySelector('#setBackBtn')
let setBackBtnDark = document.querySelector('#setBackBtnDark')
let setMenu = document.querySelector('#setMenu')

// MobileMenu
menuBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0;"
  menuBtn.style.cssText = "bottom: -10vh;"
  setMenu.style.cssText = "bottom: -20vh; opacity: 0; z-index:5;"
})
menuCloseDark.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: -32vh;"
  menuBtn.style.cssText = "bottom: 2.5vh;"
  setMenu.style.cssText = "bottom: -50vh; z-index:5;"
})
menuCloseLight.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: -32vh;"
  menuBtn.style.cssText = "bottom: 2.5vh;"
  setMenu.style.cssText = "bottom: -50vh; z-index:5;"
})
setBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0; height: 50vh; opacity: 0;"
  menuBtn.style.cssText = "bottom: -10vh;"
  setMenu.style.cssText = "bottom: 0; opacity: 1;"
})
setBtnDark.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0; height: 50vh; opacity: 0;"
  menuBtn.style.cssText = "bottom: -10vh;"
  setMenu.style.cssText = "bottom: 0; opacity: 1;"
})
setBackBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0; opacity: 1; z-index:12;"
  menuBtn.style.cssText = "bottom: -10vh;"
  setMenu.style.cssText = "bottom: -20vh; opacity: 0; z-index:5;"
})
setBackBtnDark.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0; opacity: 1; z-index:12;"
  menuBtn.style.cssText = "bottom: -10vh;"
  setMenu.style.cssText = "bottom: -20vh; opacity: 0; z-index:5;"
})

// Modes
modeBtn.onchange = (e) => {
  if (modeBtn.checked === true) {
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
    window.localStorage.setItem('mode', 'dark');
  } else {
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
    window.localStorage.setItem('mode', 'light');
  }
}
