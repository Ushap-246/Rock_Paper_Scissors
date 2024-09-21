 let userScore = 0;
 let compScore = 0;

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");

 const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);// we are using floor function to generate only the whole number and we are using Math.random function to generate random numbers. Since string cannot be used to generate the number we have used the array that indicates the index
  //rock, paper, scissors
     return options[randIdx];
}

 const drawGame =  () => {
    msg.innerText = "Game was DRAW. Play again";
    msg.style.backgroundColor = "#081b31";
 };

 const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{

        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats ${userChoice}`;;
        msg.style.backgroundColor = "red";
    }
 };


const playGame = (userChoice) =>{ 
    //Generate computer choice --> modular way of programming
     const compChoice = genCompChoice();
     console.log("comp choice = ", compChoice);

     if(userChoice === compChoice){
        //Draw Game
        drawGame();
     } else{
        let userWin = true;

        if(userChoice === "rock"){
            //computer has choices of paper and scissors
            userWin = compChoice === "paper" ? false :true;
        }
        else if (userChoice === "paper"){
            //comp has now rock and scissors
            userWin =  compChoice === "scissors" ? false : true;
        }else {
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
            }

         showWinner(userWin, userChoice, compChoice);//this is to check weather the user won or not
     }
 };

 choices.forEach((choice) => {    //here we are choosing all the choices and we are adding an eventListener to each choice in the container called "Choices"
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
 });