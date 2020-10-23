# Problem Set 2.2 - Variables and Control Flow
## Short Response Questions

1. **What does the code below log? Why?**
   ```javascript
    {
      let singer = 'Omar Apollo';
    }

    console.log(`My favorite singer is ${singer}`); 
   ```
   The code executes to an error since the variable singer is declared in a block scope therefore cannot be accessed outside of the scope. 

2. **What happens when we run the following code? Why?**
   ```javascript
   const favorite = 'Juan Pablo';
   console.log(`Our favorite Marcy Lab family member is ${favorite}!`);

   favorite = 'Maya';
   console.log(`Actually, ${favorite} is my favorite.`);
   ```
   Lines 16-17 are executed because the declaration and initialization of the const 
   variable is proper. However line 19-20 return a TypeError since a const variable
   cannot be reassigned to a new value. 
   
3. **What does the following code log? Why?**
   ```javascript
   let score = 90; 
   let newScore = score;
   score = 100; 
   console.log(score, newScore);
   ```
   The code logs 10090. The variable score is initialized to the value of 90, newScore is then initialized to score which agaian is, 90. The variable score is then reassigned without a problem to the value of 100. The console then logs the `number``values one after the other. 

   
4. **Why doesn't the following code log an uppercase string? Change the code so that it does.**
   ```javascript
   let greet = 'hello';
   greet = greet.toUpperCase();
   let scream = greet;
   console.log(scream); 
   ```
   The variable `greet` was not reassigned to the uppercased string therefore maintained the original string value. This resulted in `scream` being assigned the original string value of `greet` as well. Thus logging 'hello' instead of 'HELLO' 

5. **What does the following log? Explain why, ensuring to explain how `someName` and `busy` were declared?**
   ```javascript
   let name;
   let nickname = 'ghost';
   let someName = name || nickname;
   let children = null;
   let homework = 'lots';
   let busy = children && homework;

   someName ? console.log(`${someName} evaluates to true`) : console.log(`${someName} evaluates to false.`);

   busy ? console.log(`${busy} evaluates to true`) : console.log(`${busy} evaluates to false.`);
   ```
   The following code logs
   "ghost evaluates to true
    null evaluates to false."
   Since someName was assigned to either the value of name or nickname, the value of name being undefined the `||` operator would identify the value of nickname to be true and would be assigned to someName. 
   The second code snippet log would result in "null evaluates to false" because the comparison operator `&&` would short circuit since the falsy `null` is the falsy  && true results in the falsy. 

6. **The following code causes an infinite loop. Why?**
   ```javascript
   let counter = 0;

   while (counter <= 5) {
     counter = 1;
     console.log(`count: ${counter}`);
     counter += 1;
   }
   ```
   The following code causes an infinite loop as the variable `counter` is always reassigned to the value 1 inside of the loop. This would cause for the `counter` to always be less than 5. 
