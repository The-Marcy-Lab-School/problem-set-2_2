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
  for(let i=1;i<9;i++){
    let count=1;
    let hashtag='';
    
    if (i%2==0){
      while(count<9){
        if(count%2==0){
          hashtag+='#';
          count+=1;
        }else{
          hashtag+=' ';
          count+=1;
        }
      }
      console.log(hashtag);
    }else{
      while(count<9){
        if(count%2==0){
          hashtag+=' ';
          count+=1;
        }else{
          hashtag+='#';
          count+=1;
        }
      }
      console.log(hashtag);
    }
  }
}