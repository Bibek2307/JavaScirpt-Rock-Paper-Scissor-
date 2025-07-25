let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");

const genComp= ()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];   
}

const playgame=(userChoice)=>{
    const compChoice = genComp();
    let userwin=true;
     if(userChoice=="rock" && compChoice=="paper"){
            userwin=true;
            userScore++;
            user.innerText=userScore;
            showWinner(`You Win! Your ${userChoice} beats ${compChoice}`,userwin);
        }
        else if(userChoice=="paper" && compChoice=="rock"){
            userScore++;
            userwin=true;
            user.innerText=userScore;
            showWinner(`You Win! Your ${userChoice} beats ${compChoice}`,userwin);
        }
        else if(userChoice=="scissors" && compChoice=="paper"){
            userScore++;
            userwin=true;
            user.innerText=userScore;
            showWinner(`You Win! Your ${userChoice} beats ${compChoice}`,userwin);
        }
        else if(userChoice==compChoice){
            draw();
        }
        else{
            userwin=false;
            compScore++;
            comp.innerText=compScore;
            showWinner(`You Lose! ${compChoice} beats your ${userChoice}`,userwin);
        }
}

const draw= ()=>{
    msg.innerText="Game Was Draw";
    msg.style.backgroundColor="#081b31";

}

const showWinner=(text,userwin)=>{
    if(userwin){
        msg.style.backgroundColor="green";
        msg.innerText=text;
    }
    else{
        msg.style.backgroundColor="red";
        msg.innerText=text;
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
})