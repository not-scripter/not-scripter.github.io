let body = document.querySelector('body');
let headerx = document.querySelector(".headerx");
let scrollWatcher = document.createElement("div");
let mobileMenu = document.querySelector('.mobileMenu');
let menuBtn = document.querySelector('.menuBtn');
let menuCloseBtn = document.querySelector('#menuCloseBtn');
let darkMode = document.querySelector('.darkMode');
let modeBtn = document.querySelector('#modeBtn');
let modeDeskBtn = document.querySelector('#modeDeskBtn');
let setBtn = document.querySelector('#setBtn');
let deskSetBtn = document.querySelector('#deskSetBtn');
let setBackBtn = document.querySelector('#setBackBtn');
let deskSetClose = document.querySelector('#deskSetCloseBtn');
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
let home = document.querySelector('#home');
let services = document.querySelector('#services');
let about = document.querySelector('#about');
let contact = document.querySelector('#contact');
let help = document.querySelector('#help');
let homeBtn = document.querySelector('.homeBtn');
let servicesBtn = document.querySelector('.servicesBtn');
let aboutBtn = document.querySelector('.aboutBtn');
let contactBtn = document.querySelector('.contactBtn');
let helpBtn = document.querySelector('.helpBtn');
let menus = document.querySelector('#menus');
let menuMid = document.querySelector('#menuMid');
let menuBot = document.querySelector('#menuBot');
let menuSoc = document.querySelector('#menuSoc');
let footerNav = document.querySelector('#footerNav');
let footerSoc = document.querySelector('#footerSoc');
let clonedMenu = menus.cloneNode(true);
let clonedNav = menus.cloneNode(true);
let clonedSoc = menuBot.cloneNode(true);




//Mobile Menu Btn
// clonedMenu.id = 'menux';
menuMid.appendChild(clonedMenu);
footerNav.appendChild(clonedNav);
footerSoc.appendChild(clonedSoc);
// Long Press Action
window.oncontextmenu = function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
};
// Sticky Header
// scrollWatcher.setAttribute("data-scroll-watcher", "");
// headerx.before(scrollWatcher);
// const navObserver = new IntersectionObserver(
//   (entries) => {
//     headerx.classList.toggle("stickHead", !entries[0].isIntersecting);
//   },
//   { rootMargin: "80px 0px 0px 0px" }
// );
// navObserver.observe(scrollWatcher);


// MobileMenu
menuBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0;"
  menuBtn.style.cssText = "bottom: -10vh;"
  setMenu.style.cssText = "bottom: -70vh; opacity: 0; z-index:5;"
})
menuCloseBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: -60vw;"
  menuBtn.style.cssText = "bottom: 2.5vh;"
  setMenu.style.cssText = "bottom: -130vw; z-index:5;"
})
setBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0; height: 130vw; opacity: 0;"
  menuBtn.style.cssText = "bottom: -10vh;"
  setMenu.style.cssText = "bottom: 0; opacity: 1;"
})
setBackBtn.addEventListener('click', function(){
  mobileMenu.style.cssText = "bottom: 0; opacity: 1; z-index:12;"
  menuBtn.style.cssText = "bottom: -10vh;"
  setMenu.style.cssText = "bottom: -70vw; opacity: 0; z-index:5;"
})
// Desk Mneu
deskSetBtn.addEventListener('click', function(){
  settingsMenuBg.style.cssText = "display: flex;"
})
deskSetClose.addEventListener('click', function(){
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

