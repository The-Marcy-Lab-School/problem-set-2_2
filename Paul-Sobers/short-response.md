# Problem Set 2.2 - Variables and Control Flow
## Short Response Questions

1. **What does the code below log? Why?**
   ```javascript
    {
      let singer = 'Omar Apollo';
    }

    console.log(`My favorite singer is ${singer});
   ```
Answer:This code log 'My favorite singer is Omar Apollo' because the variable `singer` was assigned 'Omar Apollo' and `console.log` called a string interpolation which is a string and template literal : ${singer} and `singer` is the value placed inside the template literal.


2. **What happens when we run the following code? Why?**
   ```javascript
   const favorite = 'Juan Pablo';
   console.log(`Our favorite Marcy Lab family member is ${favorite}!`);

   favorite = 'Maya';
   console.log(`Actually, ${favorite} is my favorite.`);
   ```
Answer: When this code is ran `console.log` return the value 'Our favorite Marcy Lab Family member is Juan Pablo!' because `favorite` was a value of 'Juan Pablo' and because it was declared by `const` it cannot be reassigned. So when I try to reassign a value of 'Maya' to `favorite` I recieved an error saying `const variable` was already assigned so when I `console.log` (`Actually,  ${favorite} is my favorite.`); it return the value "Actually, Juan Pablo is my favorite."


3. **What does the following code log? Why?**
   ```javascript
   let score = 90; 
   let newScore = score;
   score = 100; 
   console.log(score, newScore);
   ```
Answer: This code log 100 90 because `score` was assigned the number value 90 and `newScore` was assigned `score` which had the number value 90 also. On line 30 `score` was reassigned a number value of 100 and because `newScore` wasn't reassigned also it kept the number value 90 and `console.log` return 100 90.

4. **Why doesn't the following code log an uppercase string? Change the code so that it does.**
   ```javascript
   let greet = 'hello';
   greet.toUpperCase();
   let scream = greet;
   console.log(scream.toUpperCase()); 
   ```
Answer: The following code does not log an uppercase string because the `scream` was not attached to the property `.toUpperCase` in the `console.log` on line 40. 

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
Answer: The following code will log ghost evaluates to true and {busy} evaluates to be false. The first log on line 53 evaluates to be true because `someName` was assigned `name` and `nickname` value by the OR logical operator which either value must be true , so on line 53 when `someName ?` was declared it was then asked to choose between a true or false value by the `question mark` ad depending on the trth value it will log one of the following. Since `name ` was undefined(falsey) and `nickname` was assigned a value which made it true the `console.log` logged 'ghost evaluates to true'. The second log {busy} evaluates to be false because on line 55 `busy` was assigned `children` and `homework` by the AND logical operator which both values must be true. So when it was asked (by the `?`) to pick a true or false value it picked `{busy} evaluates to false.` because since the AND logical operator was declared both values (children && homework) must be true in order for the vaule to evaluates to true.


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
