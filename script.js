let body = document.querySelector('body')
let headerx = document.querySelector(".headerx");
let scrollWatcher = document.createElement("div");
let mobileMenu = document.querySelector('.mobileMenu')
let menuBtn = document.querySelector('.menuBtn')
let menuCloseDark = document.querySelector('#menuCloseDark')
let menuCloseLight = document.querySelector('#menuCloseLight')
let darkMode = document.querySelector('.darkMode')
let modeBtn = document.querySelector('#modeBtn')
let modeDeskBtn = document.querySelector('#modeDeskBtn')
let setBtn = document.querySelector('#setBtn')
let setBtnDark = document.querySelector('#setBtnDark')
let deskSetBtnLight = document.querySelector('#deskSetBtnLight')
let deskSetBtnDark = document.querySelector('#deskSetBtnDark')
let setBackBtn = document.querySelector('#setBackBtn')
let setBackBtnDark = document.querySelector('#setBackBtnDark')
let deskSetCloseLight = document.querySelector('#deskSetCloseLight')
let deskSetCloseDark = document.querySelector('#deskSetCloseDark')
let setMenu = document.querySelector('#setMenu')
let settingsMenuBg = document.querySelector('#settingsMenuBg')
let genSetBtn = document.querySelector('#genSetBtn')
let accSetBtn = document.querySelector('#accSetBtn')
let langSetBtn = document.querySelector('#langSetBtn')
let regSetBtn = document.querySelector('#regSetBtn')
let helpSetBtn = document.querySelector('#helpSetBtn')
let genSet = document.querySelector('#genSet')
let accSet = document.querySelector('#accSet')
let langSet = document.querySelector('#langSet')
let regSet = document.querySelector('#regSet')
let helpSet = document.querySelector('#helpSet')
let home = document.querySelector('#home')
let services = document.querySelector('#services')
let about = document.querySelector('#about')
let contact = document.querySelector('#contact')
let help = document.querySelector('#help')
let homeBtn = document.querySelector('#homeBtn')
let servicesBtn = document.querySelector('#servicesBtn')
let aboutBtn = document.querySelector('#aboutBtn')
let contactBtn = document.querySelector('#contactBtn')
let helpBtn = document.querySelector('#helpBtn')
let deskHomeBtn = document.querySelector('#deskHomeBtn')
let deskServicesBtn = document.querySelector('#deskServicesBtn')
let deskAboutBtn = document.querySelector('#deskAboutBtn')
let deskContactBtn = document.querySelector('#deskContactBtn')
let deskHelpBtn = document.querySelector('#deskHelpBtn')


// Long Press Action
window.oncontextmenu = function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
};
// Sticky Header
scrollWatcher.setAttribute("data-scroll-watcher", "");
headerx.before(scrollWatcher);
const navObserver = new IntersectionObserver(
  (entries) => {
    headerx.classList.toggle("stickHead", !entries[0].isIntersecting);
  },
  { rootMargin: "80px 0px 0px 0px" }
);
navObserver.observe(scrollWatcher);

// MobileMenu
menuBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0;"
  menuBtn.style.cssText = "bottom: -10vh;"
  setMenu.style.cssText = "bottom: -20vh; opacity: 0; z-index:5;"
})
menuCloseDark.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: -37vh;"
  menuBtn.style.cssText = "bottom: 2.5vh;"
  setMenu.style.cssText = "bottom: -57vh; z-index:5;"
})
menuCloseLight.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: -37vh;"
  menuBtn.style.cssText = "bottom: 2.5vh;"
  setMenu.style.cssText = "bottom: -57vh; z-index:5;"
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
// Desk Mneu
deskSetBtnLight.addEventListener('click', function(){
  settingsMenuBg.style.cssText = "display: flex;"
})
deskSetBtnDark.addEventListener('click', function(){
  settingsMenuBg.style.cssText = "display: flex;"
})
deskSetCloseLight.addEventListener('click', function(){
  settingsMenuBg.style.cssText = "display: none;"
})
deskSetCloseDark.addEventListener('click', function(){
  settingsMenuBg.style.cssText = "display: none;"
})

// Setings Content
genSetBtn.addEventListener('click', function(){
  genSet.style.cssText = "display: block;"
  accSet.style.cssText = "display: none;"
  langSet.style.cssText = "display: none;"
  regSet.style.cssText = "display: none;"
  helpSet.style.cssText = "display: none;"
})
accSetBtn.addEventListener('click', function(){
  genSet.style.cssText = "display: none;"
  accSet.style.cssText = "display: block;"
  langSet.style.cssText = "display: none;"
  regSet.style.cssText = "display: none;"
  helpSet.style.cssText = "display: none;"
})
langSetBtn.addEventListener('click', function(){
  genSet.style.cssText = "display: none;"
  accSet.style.cssText = "display: none;"
  langSet.style.cssText = "display: block;"
  regSet.style.cssText = "display: none;"
  helpSet.style.cssText = "display: none;"
})
regSetBtn.addEventListener('click', function(){
  genSet.style.cssText = "display: none;"
  accSet.style.cssText = "display: none;"
  langSet.style.cssText = "display: none;"
  regSet.style.cssText = "display: block;"
  helpSet.style.cssText = "display: none;"
})
helpSetBtn.addEventListener('click', function(){
  genSet.style.cssText = "display: none;"
  accSet.style.cssText = "display: none;"
  langSet.style.cssText = "display: none;"
  regSet.style.cssText = "display: none;"
  helpSet.style.cssText = "display: block;"
})


const mediaQuery361 = window.matchMedia('(max-width: 376px)')
if (mediaQuery361.matches) {
menuBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0;"
  menuBtn.style.cssText = "bottom: -20vh;"
  setMenu.style.cssText = "bottom: -20vh; opacity: 0; z-index:5;"
})
setBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0; height: 50vh; opacity: 0;"
  menuBtn.style.cssText = "bottom: -20vh;"
  setMenu.style.cssText = "bottom: 0; opacity: 1;"
})
setBtnDark.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0; height: 50vh; opacity: 0;"
  menuBtn.style.cssText = "bottom: -20vh;"
  setMenu.style.cssText = "bottom: 0; opacity: 1;"
})
setBackBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0; opacity: 1; z-index:12;"
  menuBtn.style.cssText = "bottom: -20vh;"
  setMenu.style.cssText = "bottom: -20vh; opacity: 0; z-index:5;"
})
setBackBtnDark.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0; opacity: 1; z-index:12;"
  menuBtn.style.cssText = "bottom: -20vh;"
  setMenu.style.cssText = "bottom: -20vh; opacity: 0; z-index:5;"
})
menuCloseDark.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: -40vh;"
  menuBtn.style.cssText = "bottom: 2.5vh;"
  setMenu.style.cssText = "bottom: -60vh; z-index:5;"
})
menuCloseLight.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: -40vh;"
  menuBtn.style.cssText = "bottom: 2.5vh;"
  setMenu.style.cssText = "bottom: -60vh; z-index:5;"
})
}


const mediaQuery321 = window.matchMedia('(max-width: 321px)')
if (mediaQuery321.matches) {
menuBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0;"
  menuBtn.style.cssText = "bottom: -20vh;"
  setMenu.style.cssText = "bottom: -25vh; opacity: 0; z-index:5;"
})
setBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0; height: 50vh; opacity: 0;"
  menuBtn.style.cssText = "bottom: -20vh;"
  setMenu.style.cssText = "bottom: 0; opacity: 1;"
})
setBtnDark.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0; height: 50vh; opacity: 0;"
  menuBtn.style.cssText = "bottom: -20vh;"
  setMenu.style.cssText = "bottom: 0; opacity: 1;"
})
setBackBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0; opacity: 1; z-index:12;"
  menuBtn.style.cssText = "bottom: -20vh;"
  setMenu.style.cssText = "bottom: -20vh; opacity: 0; z-index:5;"
})
setBackBtnDark.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0; opacity: 1; z-index:12;"
  menuBtn.style.cssText = "bottom: -20vh;"
  setMenu.style.cssText = "bottom: -20vh; opacity: 0; z-index:5;"
})
menuCloseDark.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: -50vh;"
  menuBtn.style.cssText = "bottom: 2.5vh;"
  setMenu.style.cssText = "bottom: -70vh; z-index:5;"
})
menuCloseLight.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: -50vh;"
  menuBtn.style.cssText = "bottom: 2.5vh;"
  setMenu.style.cssText = "bottom: -70vh; z-index:5;"
})
}
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

if (localStorage.getItem('mode')===('dark')) {
  modeBtn.click()
}
if (localStorage.getItem('mode')===('ligjt')) {
  modeBtn.click()
}
// Desk Modes
modeDeskBtn.onchange = (e) => {
  if (modeDeskBtn.checked === true) {
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
  modeDeskBtn.click()
}
if (localStorage.getItem('mode')===('ligjt')) {
  modeDeskBtn.click()
}

// Navigations
// Desktop
deskHomeBtn.addEventListener('click', function(){
  home.style.cssText = "display: block;"
  services.style.cssText = "display: none;"
  about.style.cssText = "display: none;"
  contact.style.cssText = "display: none;"
  help.style.cssText = "display: none;"
})
deskServicesBtn.addEventListener('click', function(){
  home.style.cssText = "display: none;"
  services.style.cssText = "display: block;"
  about.style.cssText = "display: none;"
  contact.style.cssText = "display: none;"
  help.style.cssText = "display: none;"
})
deskAboutBtn.addEventListener('click', function(){
  home.style.cssText = "display: none;"
  services.style.cssText = "display: none;"
  about.style.cssText = "display: block;"
  contact.style.cssText = "display: none;"
  help.style.cssText = "display: none;"
})
deskContactBtn.addEventListener('click', function(){
  home.style.cssText = "display: none;"
  services.style.cssText = "display: none;"
  about.style.cssText = "display: none;"
  contact.style.cssText = "display: block;"
  help.style.cssText = "display: none;"
})
deskHelpBtn.addEventListener('click', function(){
  home.style.cssText = "display: none;"
  services.style.cssText = "display: none;"
  about.style.cssText = "display: none;"
  contact.style.cssText = "display: none;"
  help.style.cssText = "display: block;"
})

// Mobile
homeBtn.addEventListener('click', function(){
  home.style.cssText = "display: block;"
  services.style.cssText = "display: none;"
  about.style.cssText = "display: none;"
  contact.style.cssText = "display: none;"
  help.style.cssText = "display: none;"
})
servicesBtn.addEventListener('click', function(){
  home.style.cssText = "display: none;"
  services.style.cssText = "display: block;"
  about.style.cssText = "display: none;"
  contact.style.cssText = "display: none;"
  help.style.cssText = "display: none;"
})
aboutBtn.addEventListener('click', function(){
  home.style.cssText = "display: none;"
  services.style.cssText = "display: none;"
  about.style.cssText = "display: block;"
  contact.style.cssText = "display: none;"
  help.style.cssText = "display: none;"
})
contactBtn.addEventListener('click', function(){
  home.style.cssText = "display: none;"
  services.style.cssText = "display: none;"
  about.style.cssText = "display: none;"
  contact.style.cssText = "display: block;"
  help.style.cssText = "display: none;"
})
helpBtn.addEventListener('click', function(){
  home.style.cssText = "display: none;"
  services.style.cssText = "display: none;"
  about.style.cssText = "display: none;"
  contact.style.cssText = "display: none;"
  help.style.cssText = "display: block;"
})

// Test
