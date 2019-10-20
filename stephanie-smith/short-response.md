# Problem Set 2.2 - Variables and Control Flow
## Short Response Questions

1. **What does the code below log? Why?**
   ```javascript
    {
      let singer = 'Omar Apollo';
    }

    console.log(`My favorite singer is ${singer}`);
   ```
   - It logs "My favorite singer is Omar Apollo".

2. **What happens when we run the following code? Why?**
   ```javascript
   const favorite = 'Juan Pablo';
   console.log(`Our favorite Marcy Lab family member is ${favorite}!`);

   favorite = 'Maya';
   console.log(`Actually, ${favorite} is my favorite.`);
   ```
   - When you run the code, you get an error about the type used for the variable `favorite`, which is a constant. This means they cannot be redefined.

3. **What does the following code log? Why?**
   ```javascript
   let score = 90; 
   let newScore = score;
   score = 100; 
   console.log(score, newScore);
   ```
   - It logs 100 and 90. The variable `score` starts off as 90, while a new variable `newScore` is defined as `score`. This means both `score` and `newScore` equal 90. Then, `score` is redefined as 100. The value in `newScore` does not change to 100 despite the newly assigned value, because of the way the code cascades.

4. **Why doesn't the following code log an uppercase string? Change the code so that it does.**
   ```javascript
   let greet = 'hello';
   let scream = greet.toUpperCase();
   console.log(scream); 
   ```
   - The function must be called when defining the variable `scream`, otherwise it won't work.

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
   - `someName` is a condition of being either  `name` or `nickname`, and `busy` is a condition of being both `children` and `homework`. Firstly, `someName` equates to "ghost", because "ghost" is true while undefined is false, and having an or statement will opt for true conditions. `busy` will equate to null, because there is one undefined variable, making the condition incomplete. A string, when coerced to a boolean, will be true, therefore `someName` will evaluate to true. A null type, when coerced to a boolean, will be false. 

6. **The following code causes an infinite loop. Why?**
   ```javascript
   let counter = 0;

   while (counter <= 5) {
     counter = 1;
     console.log(`count: ${counter}`);
     counter += 1;
   }
   ```
   - It causes an infinite loop because `counter` is declared as 1, and it is before the console logs it. The addition comes after the variable is logged, so it never gets added. Doing the addition instead of having `counter` equal 1 will fix the problem.