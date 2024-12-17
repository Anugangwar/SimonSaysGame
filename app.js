let gameSeq = [];
let userSeq = [];



let btns = ["red","yellow","green","purple"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function() {
    if(start == false) {
        console.log("game is started");
        start = true;

        levelUp();
    }

});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
//choose random btn
    let randIdx = Math.floor(Math.random()*3);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    // console.log(randIdx);
    // console.log(randCol);
    // console.log(randBtn);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randBtn);
}


function checkBtn(idx) {
    // console.log("current lev",level);
    if(userSeq[idx] == gameSeq[idx]){
        //console.log("samevalue");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else {
        h2.innerHTML = `Game Over Your score was <b>${level}</b><br>Press any Key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }

}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userCol = btn.getAttribute("id");
    userSeq.push(userCol);

    checkBtn(userSeq.length-1);
}

let btnAll = document.querySelectorAll(".btn");
for(btn of btnAll) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}