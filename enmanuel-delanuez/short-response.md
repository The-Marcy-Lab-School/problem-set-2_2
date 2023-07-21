# Problem Set 2.2 - Variables and Control Flow
## Short Response Questions

1. **What does the code below log? Why?**
   ```javascript
      {
         let singer = 'Omar Apollo';
      }
      console.log(`My favorite singer is ${singer}`);
   ```
   This logs `ReferenceError: singer is not defined` because `console.log()` is looking for the variable `singer` in its global scope and cannot see it because it has a block scope. This is also supported by the keyword `let`, whereas the keyword `var` has a global or function scope.

2. **What happens when we run the following code? Why?**
   ```javascript
   const favorite = 'Juan Pablo';
   console.log(`Our favorite Marcy Lab family member is ${favorite}!`);

   favorite = 'Maya';
   console.log(`Actually, ${favorite} is my favorite.`);
   ```
   This logs `'Our favorite Marcy Lab family member is Juan Pablo'`. After, it logs a `TypeError` because the binding `favorite` was declared with the keyword `const` and we tried to reassign it before the second log which is not allowed.

3. **What does the following code log? Why?**
   ```javascript
   let score = 90; 
   let newScore = score;
   score = 100; 
   console.log(score, newScore);
   ```
   This logs `100, 90` because line 1 declares `score` to be equals to `90`, line 2 declares `newScore` to be equal to `score`, line 3 reassigns `score` to be equal to `100`. When `console.log` runs, it reads `score` which was last reassigned to `100` and then reads `newScore` which still holds the value `90` because when it was declared it grasped the value of `score` and does not keep tracking any future changes to `score`.

4. **Why doesn't the following code log an uppercase string? Change the code so that it does.**
   ```javascript
   let greet = 'hello';
   greet.toUpperCase();
   let scream = greet;
   console.log(scream); 
   ```
   This code doesnt log an uppercase string because while `scream` was declared and assigned `greet` after the `.toUpperCase` method, `greet` was acted upon but not *reassigned* to be the result of the operation. In order for us to see a log that is an uppercase string we can change our code to properly reassign the value of `greet`.

      ```javascript
      let greet = 'hello';
      greet = greet.toUpperCase();
      let scream = greet;
      console.log(scream); 
      ```

5. **What does the following log? Explain why, ensuring to explain how `someName` and `busy` were declared?**
   ```javascript
   let name;
   let nickname = 'ghost';
   let someName = name || nickname;
   let children = null;
   let homework = 'lots';
   let busy = children && homework;

   someName ? console.log(`${someName} evaluates to true`) : console.log(`{someName} evaluates to false.`);

   busy ? console.log(`${busy} evaluates to true`) : console.log(`${busy} evaluates to false.`);
   ```
   This will log `'ghost evaluates to true'` and `'null evaluates to false'`. This results from the use of the ternary operator to create a conditional. `someName` is declared as `name` OR `nickname`, using the bindings as the operands of a OR binary bitwise operator which returns the truthy `‘ghost’`. `busy` is declared as `children` AND `homework`, `null && ‘lots’`, returns null. The format of a conditonal program using a ternary operator looks like conditional ? expressionOne: expressionTwo; 

6. **The following code causes an infinite loop. Why?**
   ```javascript
   let counter = 0;

   while (counter <= 5) {
     counter = 1;
     console.log(`count: ${counter}`);
     counter += 1;
   }
   ```
   This loop is infinite because the binding `counter` is reassigned to a value that will ensure the conditional after `while` is true every time the loop is executed.
