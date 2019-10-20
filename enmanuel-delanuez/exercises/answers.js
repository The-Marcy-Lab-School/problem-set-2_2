// Question 1: Looping a Triange
function triangle() {
  // write your answer to question one below
  let pascal = '#'
  while (pascal.length <= 7) {
    console.log(pascal);
    pascal += '#';
  }
}

// Question 2: FizzBuzz
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0 && i % 3 != 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// Question 3: Chess Board
function chessBoard() {
  // write your answer to question three below
  for (let i = 1; i <= 64; i++) {
    if (i % 2 == 0) {
      console.log('#');
    } else {
      console.log(' ');
    }
  }
  
  for (let i = 1; i <= 8; i++) {
    
  }
}
