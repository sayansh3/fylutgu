// random value generated

var y=Math.floor(Math.random()*10+1);

var x=document.getElementById("guessField").value;
  
// counting the number of guesses
if(x==y){
    alert("CONGRATULATIONS!!!"+playername+"    YOU GUESSED IT RIGHT IN"+guess+"  GUESS ");
    guess=1 ;
}
// made for correct Guess
else if(x>y){
    guess++;
    alert("OOPS SORRY!!! TRY A SMALLER NUMBER.")
}
else{
    guess++;
    alert("OOPS SORRY!!! TRY A GREATER NUMBER.")

}

  
// function for number guessed by user     
function playAgain(){
    var y=Math.floor(Math.random()*10+1);

}