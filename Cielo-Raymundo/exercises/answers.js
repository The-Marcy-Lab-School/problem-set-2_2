// Question 1: Looping a Triange
function triangle() {
  // write your answer to question one below
  let count=0;
  let hashtag='#';
  
  while(count<6){
    console.log(hashtag);
    hashtag+='#';
    count+=1;
  }

}

// Question 2: FizzBuzz
function fizzBuzz() {
  // write your answer to question two below
  let num=1;
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
function chessBoard() {
  // write your answer to question three below
  let line='';
  
  for(let i=1;i<9;i++){
    for(let col=1;col<5;col++){
      if ((col%2)==0){
        console.log(line +'#');
        line+='#';
      }else{
        console.log(line +' ');
        line+=' ';
      }
    }
  }
}
