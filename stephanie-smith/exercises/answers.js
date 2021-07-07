// Question 1: Looping a Triange
function triangle() {
  // write your answer to question one below
  let repeat = '#';
  
  while(repeat.length < 8) { //starts with one hash, but will end at 7
    console.log(repeat); //prints hashes
    repeat += '#'; //adds an extra hash until there are 7
  }
}

// Question 2: FizzBuzz
function fizzBuzz() {
  // write your answer to question two below
  for (let i = 1; i < 101; i++) { //starts at 1, ends at 100 and adds 1 each loop
    if (i % 3 == 0 && i % 5 === 0) { //for those that are divisible by 3 and 5
      console.log("fizzbuzz");
    }
    else if (i % 3 == 0) { //for those that are divisible by 3
      console.log("fizz");
    }
    else if (i % 5 == 0) { //for those that are divisible by 5
      console.log("buzz");
    }
    else { //prints out any number that isn't divisible by stated conditions
      console.log(i);
    }
  }
}


// Question 3: Chess Board
function chessBoard() {
  // write your answer to question three below
  let grid = 8;
  let board = '';

  for(let i = 0; i < grid; i++) { //for column
    for(let j = 0; j < grid; j++) { //for rows, loop includes spaces which is why there are only 4 hashes
      if((i + j) % 2 === 0) { //determines whether a space or hash will be used
        board += ' '; //adds spacing
      }
      else {
        board += '#'; //adds hash
      }
    }
    board += "\n"; //after row loop finishes its turn, adds a new row
  }
  console.log(board); //makes sure it prints to the console, otherwise it doesn't show anything
}
