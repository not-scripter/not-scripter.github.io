setTimeout(() => {


  let deskSearch = document.querySelector('#deskSearch');
  let deskFindBtn = document.querySelector('#deskFindBtn');
  let deskSetBtn = document.querySelector('#deskSetBtn');
  let deskFindVal = 0;



    deskSearch.click();

  deskFindBtn.addEventListener('click', ev => {
    if (deskFindVal == 0) {   
   deskSearch.style.cssText = "right: 3.25rem; opacity: 1;";
    deskFindBtn.innerHTML = "<img src='./resources/images/cross.svg' id='findCloseBtn' class='iconx'>";
      deskFindBtn.style.cssText = "transform: rotate(270deg); transition: 200ms ease-in-out;"
      deskFindVal = 1;
    } else { 
   deskSearch.style.cssText = "right: -9.25rem;";
    deskFindBtn.innerHTML = "<img src='./resources/images/search.svg' id='findCloseBtn' class='iconx'>";
      deskFindBtn.style.cssText = "transform: rotate(360deg); transition: 200ms ease-in-out;"
      deskFindVal = 0;
    }
  })




}, 1000);


// let ans = new Promise((res, rej) => {
//   if (false) {
//     return res()
//   } else {
//     return rej()
//   }
// })
// ans
//   .then(function() {
//   alert("result")
// })
//   .catch(function() {
//   alert("rejected")
// })


// let logo = document.querySelector('.logo')
// async function a() {
//   await fetch(settingsMenuBg);
//   alert("got it");
//
//   logo.style.display = "none";


// }
// a()



// gsap.to("header", {
//  height: "3rem",
//  scrollTrigger: {
//   trigger: "header",
//   scroller: "body",
//   scrub: 1,
//   start: "top 0",
//   end: "bottom 150vh"
//  }
// })

