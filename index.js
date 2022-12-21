const Board=document.querySelector('.board');
const cells=document.querySelectorAll('.cell');
const WinnigMessage=document.querySelector('.winning-message');
const winningMessageText=document.querySelector('#winningMessageText');
const buttonRestart=document.querySelector(".winning-message #restartButton");
let counterGameTurn=0;
let gameover=false;
let winningX=0;
let winningY=0;
let playerWin="";
let finishGame=false;

//console.log(buttonRestart)
//console.log(cells);
//console.log(Board);
console.log(winningMessageText);

for (let i = 0; i < cells.length&&(!finishGame); i++){

    cells[i].addEventListener("click",(e)=>{

        console.log(e.target.id);
        if(counterGameTurn%2==0){
            cells[i].innerText="X";
        }else{
            cells[i].innerText="O";
        }

        chekeIfWin();

        if(gameover){
            console.log("the game is over"+playerWin+"is the winner");
            if(playerWin==="X"){
                winningX++;
                console.log(playerWin+"win and have "+winningX+"points");
             
            }else{
                winningY++;
                console.log(playerWin+"win and have "+winningY+"points");
            }
           resetTable();
        }
        
       counterGameTurn++;
    })
  }



  function chekeIfWin(){

    if((cells[1].innerText===cells[0].innerText)&&(cells[0].innerText===cells[2].innerText)&&(cells[1].innerText!=''&&cells[2].innerText!=''&&cells[0].innerText!='')){
        console.log("1 the winer is "+cells[0].innerText);
        gameover=true;
        playerWin=cells[0].innerText;
        return;
    }
    if((cells[2].innerText===cells[5].innerText)&&(cells[2].innerText===cells[8].innerText)&&(cells[5].innerText!=''&&cells[2].innerText!=''&&cells[8].innerText!='')){
        console.log("1 the winer is "+cells[0].innerText);
        gameover=true;
        playerWin=cells[0].innerText;
        return;
    }
    if((cells[0].innerText===cells[3].innerText)&&(cells[0].innerText===cells[6].innerText)&&(cells[6].innerText!=''&&cells[0].innerText!=''&&cells[3].innerText!='')){
        console.log("2 the winer is "+cells[0].innerText);
        gameover=true;
        playerWin=cells[0].innerText;
        return;
    }
    if((cells[1].innerText===cells[4].innerText)&&(cells[1].innerText===cells[7].innerText)&&(cells[1].innerText!=''&&cells[7].innerText!=''&&cells[4].innerText!='')){
        console.log(" 3 the winer is "+cells[1].innerText);
        gameover=true;
        playerWin=cells[1].innerText;
        return;
    }
    if((cells[3].innerText===cells[4].innerText)&&(cells[3].innerText===cells[5].innerText)&&(cells[5].innerText!=''&&cells[3].innerText!=''&&cells[4].innerText!='')){
        console.log(" 4 the winer is "+cells[3].innerText);
        gameover=true;
        playerWin=cells[3].innerText;
        return;
    }
    if((cells[6].innerText===cells[7].innerText)&&(cells[6].innerText===cells[8].innerText)&&(cells[8].innerText!=''&&cells[6].innerText!=''&&cells[7].innerText!='')){
        console.log("the winer is "+cells[6].innerText);
        gameover=true;
        playerWin=cells[6].innerText;
        return;
    }
    if((cells[0].innerText===cells[4].innerText)&&(cells[0].innerText===cells[8].innerText)&&(cells[8].innerText!=''&&cells[0].innerText!=''&&cells[4].innerText!='')){
        console.log("the winer is "+cells[0].innerText);
        gameover=true;
        playerWin=cells[0].innerText;
        return;
    }
    if((cells[2].innerText===cells[4].innerText)&&(cells[6].innerText===cells[2].innerText)&&(cells[2].innerText!=''&&cells[6].innerText!=''&&cells[4].innerText!='')){
        console.log("the winer is "+cells[2].innerText);
        gameover=true;
        playerWin=cells[2].innerText;
        return;
    }

  }

  function resetTable(){

    for (let i = 0; i < cells.length; i++){

        cells[i].innerText="";
    }

    gameover=false;
    counterGameTurn=0;
    playerWin="";

  }


  buttonRestart.addEventListener("click",()=>{

    if(winningX>winningY){
        winningMessageText.innerText="x won more game than o";
        return;
    }
    if(winningX===winningY){
        winningMessageText.innerText="x is equal with o";
        return;
    }
    if(winningX<winningY){
        winningMessageText.innerText="o won more game than x";
        return;
    }

    resetTable();
    finishGame=true;

  })