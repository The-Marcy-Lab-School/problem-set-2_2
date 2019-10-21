// Question 1: Looping a Triange
function triangle() {
  // write your answer to question one below
let sum = "#";
for (let num = 1 ; num <= 7; num += 1) {
 sum = sum + '#';
  console.log(sum);
}


}

// Question 2: FizzBuzz
function fizzBuzz() {
  // write your answer to question two below
 let counter = 0;
 while (counter <= 100){
   counter += 1;
   if (counter % 3 === 0){
     console.log('fizz');
   } 
   if (counter % 5 === 0){
     console.log('buzz');
   }
   if (counter % 3 === 0 && counter % 5 === 0) {
     console.log('fizzbuzz');
   } else{
     console.log(counter);
   }
 }

}

// Question 3: Chess Board
function chessBoard() {
  // write your answer to question three below

let odd = (" # # # #");
let even = ("# # # #");
let counter = 0;
while (counter <= 7) {
  counter += 1;
  if (counter % 2 === 0){
    console.log(even);
  } else {
    console.log(odd);
  }
}
}
