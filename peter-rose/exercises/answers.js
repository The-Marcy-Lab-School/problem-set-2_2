// Question 1: Looping a Triange
function triangle() {
  // write your answer to question one below
  
  let text = "";
  let i = 0;
  let hash = "#";
  while (i < 11) {
    text += "<br>" + hash;
    hash = hash + "#"
    i++;
  }
}

// Question 2: FizzBuzz
function fizzBuzz() {
  // write your answer to question two below
  
  let counter = 1;
while (counter < 101) {
  if (counter % 3 == 0 && counter % 5 == 0) {
    console.log('fizzbuzz')
  }
  else if (counter % 5 == 0) {
    console.log('buzz')
  }
  else if (counter % 3 == 0) {
    console.log('fizz')
  }
  else {
    console.log(counter)
  }
  counter++
}
}

// Question 3: Chess Board
function chessBoard() {
  // write your answer to question three below


var loop = 9;
var boxy = "";

for (let col = 1; col < loop; col++) {
  for (let row = 1; row <= loop; row++) {
    if (( col + row ) % 2 == 0) {
      boxy = boxy + " ";
    } else {
      boxy = boxy + "#";
    }
  }
  boxy = boxy + "\n"; 
}
console.log(boxy);
}


triangle();
fizzBuzz();
chessBoard();

