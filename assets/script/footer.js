setTimeout(() => {



let menus = document.querySelector('#menus');
let menuMid = document.querySelector('#menuMid');
let menuBot = document.querySelector('#menuBot');
let footerNav = document.querySelector('#footerNav');
let footerSoc = document.querySelector('#footerSoc');
let clonedMenu = menus.cloneNode(true);
let clonedNav = menus.cloneNode(true);
let clonedSoc = menuBot.cloneNode(true);


// clonedMenu.id = 'menux';
menuMid.appendChild(clonedMenu);
footerNav.appendChild(clonedNav);
footerSoc.appendChild(clonedSoc);


}, 1000);
