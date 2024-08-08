var timer = 0;
var score = 0;
var ranNum;


function makeBubble(){
    var nums = "";

for (var i = 1; i <= 96; i++){
    var rannum = Math.floor(Math.random()*10);
    nums += `<div class="num">${rannum}</div>`;
}
document.querySelector('#elbtm').innerHTML = nums;
}

function runTimer(){
    var timerInt = setInterval(() => {
        if(timer > 0){
            timer--;
            document.querySelector('#time').textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector('#elbtm').innerHTML = 
            `<div id="restart">
                <h1>Game Over!</h1>
                
                <h2>Your Score: ${score}</h2>
                <button id="res-btn" onclick="restart()">Restart</button>
            </div>`;

        }
    },1000);
}

function hitNum(){
    ranNum = Math.floor(Math.random()*10);
    document.querySelector('#hit').textContent = ranNum;
}

function inScore (){
    score += 10;
    document.querySelector('#score').textContent = score;
}

document.querySelector('#elbtm')
.addEventListener("click", function(details){
    var clickedNum = Number(details.target.textContent);
    if (clickedNum === ranNum){
        inScore();
        hitNum();
        makeBubble();
    }
})

function start(){
    hitNum();
    runTimer();
    makeBubble();
    score = 0;
    timer = 120;
}




