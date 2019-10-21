// Question 1: Looping a Triange
function triangle() {
  // write your answer to question one below
  let hash = "";
  let counter = 0;
  
  while(counter <= 6){
    let i;
    for (i = 0; i < 7; i++){
      hash = hash + "#";
      console.log(hash);
      ++counter;
    }
  }

}

// Question 2: FizzBuzz
function fizzBuzz() {
  // write your answer to question two below
  let counter = 0;
  
  while(counter <= 99){
    counter++
    if(counter % 3 === 0){
      console.log("Fizz");
    }else if(counter % 5 === 0 && counter % 3 !== 0){
      console.log("Buzz");
    }else if(counter % 5 === 0 && counter % 3 === 0){
      console.log("FizzBuzz");
    }else{
      console.log(counter);
    }
  }
}

// Question 3: Chess Board
function chessBoard() {
  // write your answer to question three below
 let rowOne = " # # # #";
 let rowTwo = "# # # # ";
 let counter = 0;
 
 while(counter <= 7){
   if(counter % 2 === 0){
     console.log(rowOne);
   }else{
     console.log(rowTwo);
   }
   counter += 1;
 }
}
