let timer = 60;
let score = 0;
let hitRn = 0;
// let goScore = document.querySelector('.scoreVal').textContent = score;

function getNewHit(){
  hitRn = Math.floor(Math.random()*10);
  document.querySelector(".hitVal").textContent = hitRn;
};

function makeBubble(){
  let clutter = "";
  for (let i=1; i<67; i++) {
    let rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
  };
  document.querySelector('.pbot').innerHTML = clutter;
};

function runTimer(){
  let timerInt = setInterval(function(){
    if (timer > 0) {
      timer--;
      document.querySelector(".timer").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector('.pbot').style.display = "none";
      document.querySelector('.ptop').classList.add("goptop");
      document.querySelector('.gameOver').style.display = "flex";
document.querySelector('.goScoreVal').textContent = score;
    }
  }, 1000);
};

function increaseScore(){
  score += 10;
  document.querySelector('.scoreVal').textContent = score;
};

document.querySelector('.pbot').addEventListener('click', ev => {
  let clickedNum = Number(ev.target.textContent);
  if (clickedNum === hitRn) {
    increaseScore();
    makeBubble();
    getNewHit();
  } else {
    makeBubble();
    getNewHit(); 
  }
})

document.querySelector('.tryBtn').addEventListener('click', ev => {
  document.querySelector('.ptop').classList.remove("goptop");
  document.querySelector('.pbot').style.display = "flex";
  document.querySelector('.gameOver').style.display = "none";
  timer = 60;
  score = 0;
  document.querySelector('.scoreVal').textContent = score;
  getNewHit();
  runTimer();
  makeBubble();  
})


getNewHit();
runTimer();
makeBubble();

