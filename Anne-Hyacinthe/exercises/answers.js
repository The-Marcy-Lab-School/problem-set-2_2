// Question 1: Looping a Triange
function triangle() {
  // write your answer to question one below
  let hashStr = "";
  let counter = 1;
  while (counter <= 7){
    counter += 1;
    hashStr += "#";
    console.log(hashStr);
}

}

// Question 2: FizzBuzz
function fizzBuzz() {
  // write your answer to question two below
for ( let i=1; i <= 100; i += 1){
  if (i%15 === 0){
    console.log('fizzbuzz');
  } else if (i%3 === 0){
    console.log('fizz');
  } else if (i%5 === 0){
    console.log('buzz');
  } else {
    console.log(i);
  }
  
}
}

// Question 3: Chess Board
function chessBoard() {
  // write your answer to question three below
  let row = "# # # #"
for(let i = 0; i <= 10;i += 1){
  if (i % 2 == 0) {
    console.log(" " + row);
  } else {
    console.log(row);
  }
}

}

triangle();
fizzBuzz();
chessBoard(); 
