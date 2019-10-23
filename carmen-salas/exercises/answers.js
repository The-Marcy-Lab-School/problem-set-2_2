// Question 1: Looping a Triange
// 1.  **Looping A Triangle** 
  // Write a loop that makes seven calls to console.log to output the following triangle:

function triangle(){
  let hash = '';

  for (let i = 0; i < 7; i++) {
      hash = hash + '#';
      console.log(hash);
  }
}


// Question 2: FizzBuzz
function fizzBuzz() {
  
  let num = 1; 
  do{
     if((num%3)==0){
       if((num%5)==0){
         console.log('fizzBuzz');
       }else{
         console.log('fizz');
       }
     }else if (num%5==0){
       console.log('buzz')
     }else{
       console.log(num);
     }
     num+=1;
   }while(num<100);
}

// Question 3: Chess Board
// 3. **Chess Board**
//   Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a ”#” character. The characters should form a chess board.
//   Passing this string to console.log should show something like this:

function chessBoard() {
  let grid ='';
  
  for (var a = 0; a < 8; a++) {
  for (var b = 0; b < 8; b++) {
    grid += "# ";
  }
  grid += " #";
  console.log(grid);
}
}

triangle();
fizzBuzz();
chessBoard();
