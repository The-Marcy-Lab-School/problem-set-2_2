# Problem Set 2.2 - Variables and Control Flow
## Short Response Questions

1. **What does the code below log? Why?**
   ```javascript
    {
      let singer = 'Omar Apollo';
    }

    console.log(`My favorite singer is ${singer});
   ```
   This will not log anything because the variable 'singer' doesn't exist outside it's scope

2. **What happens when we run the following code? Why?**
   ```javascript
   const favorite = 'Juan Pablo';
   console.log(`Our favorite Marcy Lab family member is ${favorite}!`);

   favorite = 'Maya';
   console.log(`Actually, ${favorite} is my favorite.`);
   ```
   This will console log "Actually, Maya is my favorite", because because on line 19 favorite is being reassigned to "Maya"

3. **What does the following code log? Why?**
   ```javascript
   let score = 90; 
   let newScore = score;
   score = 100; 
   console.log(score, newScore);
   ```
   This will console log "100, 90", because on line 28 score is being reassigned to 100 but on line 27 newScore was initialized to score's value, 
   which was 90

4. **Why doesn't the following code log an uppercase string? Change the code so that it does.**
   ```javascript
   let greet = 'hello';
   greet = greet.toUpperCase();
   let scream = greet;
   console.log(scream); 
   ```
   It doesn't log the string to uppercase because on line 36, "greet" was initialized to equal to 'hello'. On line 38 "scream" is initialized to 
   equal the variable "greet", and although on line greet was turned to uppercase it's value is still 'hello' so scream is also 'hello'
   and when you console log sream it will give you 'hello'

5. **What does the following log? Explain why, ensuring to explain how `someName` and `busy` were declared?**
   ```javascript
   let name;
   let nickname = 'ghost';
   let someName = name || nickname;
   let children = null;
   let homework = 'lots';
   let busy = children && homework;

   someName ? console.log('${someName} evaluates to true') : console.log('${someName} evaluates to false.');

   busy ? console.log('${busy} evaluates to true') : console.log('${busy} evaluates to false.');
   ```
   This will console log 'ghost evaluates to true' and 'null evaluates to false'. Line 54 is saying if someName is true console log the value of 
   " 'someName' evaluates to true", and if not console log " 'someName' evaluates to false". But someName is true, if you check line 49, someName 
   is equal to either to the variable "name" or "nickname", and since "nickname" has a value and "name" doesn't. someName will equal to "nickname".
   So line 54 will run as true since sameName has a value and is true.
   While line 56 is saying if busy is true then console log " 'busy' evaluates to true" and if it's false "'busy' evaluates to false". On line 
   52 "busy" is initialized to children and homework, but since "children" was initialized to null on line 50. "busy" is assigned to null, which is
   false so then it console logs "null evaluates to false".
   

6. **The following code causes an infinite loop. Why?**
   ```javascript
   let counter = 0;

   while (counter <= 5) {
     counter = 1;
     console.log(`count: ${counter}`);
     counter += 1;
   }
   ```
   This creates an infinite loop, because counter is set to equal 0 on line 69. On line 71 it says execute the following program if counter is less
   than or equal to 5, but on line 72 counter is reassigned to 1. So on line 73 console logs "count: 1", then on line 74 counter gets 1 added to it
   and becomes 2. So it goes in the loop again and it is less than or equal to 5 so it runs again, and sets counter to 1 again, console logs "count: 1"
   and then gets 1 added to it. It keeps on looping again and again because counter keeps being set to 1 and only being added 1, which will
   always be less than 5. 
