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
  for(let i=1;i<9;i++){ //loop
    let col=1; // individual col where the hashes are plotted 
    let row=''; //each row (empty string)
    if (i %2 == 0){ //even rows
      while(col < 9){
        if(col %2 == 0){
          row += '#';
          col += 1;
        }else{
          row += ' ';
          col += 1;
        }
      }
      console.log(row);
    }else{ //uneven rows
      while(col < 9){
        if(col %2 == 0){
          row += ' ';
          col += 1;
        }else{
          row += '#';
          col += 1;
        }
      }
      console.log(row);
    }
  }
  }

triangle();
fizzBuzz();
chessBoard();
