# Problem Set 2.2 - Variables and Control Flow
## Short Response Questions

1. **What does the code below log? Why?**
   ```javascript
    {
      let singer = 'Omar Apollo';
    }

    console.log(`My favorite singer is ${singer});
   ```
   * It logs an error because singer is defiend in a scope but is being called outside of that scope.
2. **What happens when we run the following code? Why?**
   ```javascript
   const favorite = 'Juan Pablo';
   console.log(`Our favorite Marcy Lab family member is ${favorite}!`);

   favorite = 'Maya';
   console.log(`Actually, ${favorite} is my favorite.`);
   ```
   * `Our favorite Marcy Lab family member is Juan Pablo!` is logged but an error will then occur because the constant `favorite` can not be re-assigned.
3. **What does the following code log? Why?**
   ```javascript
   let score = 90; 
   let newScore = score;
   score = 100; 
   console.log(score, newScore);
   ```
   * It logs `100 90` becasuse `score` was re-assigned to `100`, but becasue a string is primitive `newScore` wasn't able to re-assigned along with `score`.
4. **Why doesn't the following code log an uppercase string? Change the code so that it does.**
   ```javascript
   let greet = 'hello';
   greet.toUpperCase();
   let scream = greet;
   console.log(scream); 
   ```
   * The code doesn't log an uppercase string because greet isn't inheriently re-assigned to `HELLO` when the function happens.
    ```
   let greet = 'hello';
   let scream;
      scream = greet.toUpperCase();
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

   someName ? console.log(`${someName} evaluates to true`) : console.log(`{someName} evaluates to false.``);

   busy ? console.log(`${busy} evaluates to true`) : console.log(`{busy} evaluates to false.``);
   ```
   * It logs an error due to the extra backticks in both false statements.
6. **The following code causes an infinite loop. Why?**
   ```javascript
   let counter = 0;

   while (counter <= 5) {
     counter = 1;
     console.log(`count: ${counter}`);
     counter += 1;
   }
   ```
   * The code cause an infinite loop becasue everytime it's being read counter is being defined as the value of 1 in the body.
