setTimeout(() => {



let darkMode = document.querySelector('.darkMode');
let modeBtn = document.querySelector('#modeBtn');
let deskSetBtn = document.querySelector('#deskSetBtn');
// let deskSetCloseBtn = document.querySelector('#deskSetCloseBtn');
let setMenu = document.querySelector('#setMenu');
let settingsMenuBg = document.querySelector('#settingsMenuBg');
let genSetBtn = document.querySelector('#genSetBtn');
let accSetBtn = document.querySelector('#accSetBtn');
let langSetBtn = document.querySelector('#langSetBtn');
let regSetBtn = document.querySelector('#regSetBtn');
let helpSetBtn = document.querySelector('#helpSetBtn');
let genSet = document.querySelector('#genSet');
let accSet = document.querySelector('#accSet');
let langSet = document.querySelector('#langSet');
let regSet = document.querySelector('#regSet');
let helpSet = document.querySelector('#helpSet');


// Desk Mneu
deskSetBtn.addEventListener('click', function(){
  settingsMenuBg.style.cssText = "display: flex;"
})
// deskSetCloseBtn.addEventListener('click', function(){
//   settingsMenuBg.style.cssText = "display: none;"
// })


// Setings Content
genSetBtn.addEventListener('click', function(){
  genSet.style.cssText = "display: block;"
  accSet.style.cssText = "display: none;"
  langSet.style.cssText = "display: none;"
  regSet.style.cssText = "display: none;"
  helpSet.style.cssText = "display: none;"
  genSetBtn.style.cssText = "backdrop-filter: saturate(900%) blur(2rem); box-shadow: var(--hoverBtn);"
  accSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
  langSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
  regSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
  helpSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
})
accSetBtn.addEventListener('click', function(){
  genSet.style.cssText = "display: none;"
  accSet.style.cssText = "display: block;"
  langSet.style.cssText = "display: none;"
  regSet.style.cssText = "display: none;"
  helpSet.style.cssText = "display: none;"
  genSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
  accSetBtn.style.cssText = "backdrop-filter: saturate(900%) blur(2rem); box-shadow: var(--hoverBtn)"
  langSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
  regSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
  helpSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
})
langSetBtn.addEventListener('click', function(){
  genSet.style.cssText = "display: none;"
  accSet.style.cssText = "display: none;"
  langSet.style.cssText = "display: block;"
  regSet.style.cssText = "display: none;"
  helpSet.style.cssText = "display: none;"
  genSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
  accSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
  langSetBtn.style.cssText = "backdrop-filter: saturate(900%) blur(2rem); box-shadow: var(--hoverBtn)"
  regSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
  helpSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
})
regSetBtn.addEventListener('click', function(){
  genSet.style.cssText = "display: none;"
  accSet.style.cssText = "display: none;"
  langSet.style.cssText = "display: none;"
  regSet.style.cssText = "display: block;"
  helpSet.style.cssText = "display: none;"
  genSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
  accSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
  langSetBtn.style.cssText = "backdrop-filter: none; box-shadow:none;"
  regSetBtn.style.cssText = "backdrop-filter: saturate(900%) blur(2rem); box-shadow: var(--hoverBtn)"
  helpSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
})
helpSetBtn.addEventListener('click', function(){
  genSet.style.cssText = "display: none;"
  accSet.style.cssText = "display: none;"
  langSet.style.cssText = "display: none;"
  regSet.style.cssText = "display: none;"
  helpSet.style.cssText = "display: block;"
  genSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
  accSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
  langSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
  regSetBtn.style.cssText = "backdrop-filter: none; box-shadow: none;"
  helpSetBtn.style.cssText = "backdrop-filter: saturate(900%) blur(2rem); box-shadow: var(--hoverBtn)"
})


// Desk Modes
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

if (localStorage.getItem('mode')===('dark')) {
  modeBtn.click()
}
if (localStorage.getItem('mode')===('ligjt')) {
  modeBtn.click()
}



}, 1000);
