// Question 1: Looping a Triange
function triangle() {
  // write your answer to question one below
  let pyra = "#"
  while(pyra.length <=7 ){
    console.log(pyra);
    pyra = pyra + "#";  
  }
}

// Question 2: FizzBuzz
function fizzBuzz() {
  // write your answer to question two below
  for (let i=1; i < 101; i++){
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

// Question 3: Chess Board
function chessBoard() {
  // write your answer to question three below
  let board = "";
  for(let e = 0; e < 8; e++){
    for(let a = 0; a < 8; a++){
      board += (a % 2) == (e % 2) ? " " : "#";
      //check if falsy value else print #
    }
    board += "\n";
    //new line
  }
  console.log(board);
}

triangle();
fizzBuzz();
chessBoard();
