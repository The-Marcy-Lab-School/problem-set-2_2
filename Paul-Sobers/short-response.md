# Problem Set 2.2 - Variables and Control Flow
## Short Response Questions

1. **What does the code below log? Why?**
   ```javascript
    {
      let singer = 'Omar Apollo';
    }

    console.log(`My favorite singer is ${singer}`);
   ```
Answer:This code log will give you back a reference error sayin singer is undefined. It is undefined because singer was declared in a block scope and we logging a string interpolation with a variable singer that is not recognzied because we are outside the scope.


2. **What happens when we run the following code? Why?**
   ```javascript
   const favorite = 'Juan Pablo';
   console.log(`Our favorite Marcy Lab family member is ${favorite}!`);

   favorite = 'Maya';
   console.log(`Actually, ${favorite} is my favorite.`);
   ```
Answer: When this code is run it logs, 'Our favorite Marcy Lab Family member is Juan Pablo!' because `favorite` references 'Juan Pablo' because it was declared with `const` it cannot be reassigned. So when I try to reassign a value of 'Maya' to `favorite` it throws an error.


3. **What does the following code log? Why?**
   ```javascript
   let score = 90; 
   let newScore = score;
   score = 100; 
   console.log(score, newScore);
   ```
Answer: This code logs 100 90 because `score` was assigned the number value 90 and `newScore` was assigned `score` which had the number value 90 also. On line 30 `score` was reassigned a number value of 100 and because `newScore` wasn't reassigned also it kept the number value 90 and `console.log` return 100 90.

4. **Why doesn't the following code log an uppercase string? Change the code so that it does.**
   ```javascript
   let greet = 'hello';
   greet.toUpperCase();
   let scream = greet;
   console.log(scream.toUpperCase()); 
   ```
Answer: The following code does not log an uppercase string because we did not call .toUpperCase on scream on line 40. 

5. **What does the following log? Explain why, ensuring to explain how `someName` and `busy` were declared?**
   ```javascript
   let name;
   let nickname = 'ghost';
   let someName = name || nickname;
   let children = null;
   let homework = 'lots';
   let busy = children && homework;

   someName ? console.log(`${someName} evaluates to true`) : console.log(`{someName} evaluates to false.`);

   busy ? console.log(`${busy} evaluates to true`) : console.log(`{busy} evaluates to false.``);
   ```
Answer: The following code will log "ghost evaluates to true" and "busy evaluates to be false."" The first log on line 53 evaluates to be true because `someName` was assigned `name` OR `nickname`.  so on line 53 when `someName ?` was declared it was then asked to choose between a true or false value by the `question mark` ad depending on the trth value it will log one of the following. Since `name ` was undefined(falsey) and `nickname` was assigned a truthy value, the program  logged 'ghost evaluates to true'. The second logs {busy} evaluates to be false because on line 55 `busy` was assigned `children` and `homework` using the AND logical operator. The logical AND shortcircuits on the first falsey value. Since children has a falsey value of null, we assign busy a value of null. Thus, the else statement on line 55 will execute.


6. **The following code causes an infinite loop. Why?**
   ```javascript
   let counter = 0;

   while (counter <= 5) {
     counter = 1;
     console.log(`count: ${counter}`);
     counter += 1;
   }
   ```
Answer: This code causes an infinite loop because since `counter` was declared and assigned a number value 0 `while` creates a loop stating while counter is less than or equal to 5 (0 <= 5) , reassign `counter` to a number value of 1 and `console.log` logged a string interpolation `count: ${counter}` which always returned 1. Since the increment operator was placed on line 67 and not above line 65 the value of 1 was added after`console.log` which made the value always returned 1 (a truthy).If placed above line 65 the value would've added up eventually producing a false value thus stopping the loop.
