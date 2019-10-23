// Question 1: Looping a Triange
function triangle() {
  // write your answer to question one below
  let pound =  "#";
  console.log(pound);
  while(pound.length <= 7){ 
    pound = pound + "#";
    console.log(pound);
  }
}


// Question 2: FizzBuzz
function fizzBuzz() {
  // write your answer to question two below
  let count = 1; 
  while(count <= 100){
    if(count % 15 === 0){
      console.log("fizzbuzz");
    }
    else if(count % 3 === 0 ){
      console.log("fizz");
    }
    else if(count % 5 === 0){
      console.log("buzz");
    }
    else {
      console.log(count);
    }
    count++;
  }
}



// Question 3: Chess Board
function chessBoard() {
  // write your answer to question three below
    for(i = 1; i < 9; i++){ //i is equal to rows
      let row = ""; //acts as the container for the row 
      let col = 1; 
      if((i % 2) !== 0){ // this is for odd rows
        col = 1;
          while( col < 9){
            if(col % 2 !== 0){ //odd columns
              row += " ";
              col += 1;
            }
            else{
              row+= "#";
              col += 1;
            } 
          } console.log(row);
      } //closes first if 
      if((i % 2) == 0){ // this is for even rows
        col = 1; 
          while( col < 9){
            if(col % 2 == 0){ //even columns
              row += " ";
              col += 1;
            }
            else{
              row+= "#";
              col += 1;
            } 
        } console.log(row);
      } //closes second if 
    }//closes for loop 
} //closes function 
chessBoard();
