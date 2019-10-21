# Problem Set 2.2 - Variables and Control Flow
## Short Response Questions

1. **What does the code below log? Why?**
   ```javascript
    {
      let singer = 'Omar Apollo';
    }

    console.log(`My favorite singer is ${singer});
   ```
      Nothing because its missing a `

      But seriously this code first initializes and declares a variable of singer with the string
      Omar Apollo, the it logs the phrase my favorite singer is with the value of singer using a template literal.
      "My favorite singer is Omar Apollo"
      
2. **What happens when we run the following code? Why?**
   ```javascript
   const favorite = 'Juan Pablo';
   console.log(`Our favorite Marcy Lab family member is ${favorite}!`);

   favorite = 'Maya';
   console.log(`Actually, ${favorite} is my favorite.`);
   ```
      At first this runs the same way as tomorrow, 
      an variable is intialized and declared and its value is added to a string through a template literal.

      The second string however will log the same thing even with the attempted assignment of the variable to a new value.
      Since the variable is a constant, the reassignment does not work leaving the second string to print "Actually, Juan Pablo is my favorite."
      the same response as the first.
   
3. **What does the following code log? Why?**
   ```javascript
   let score = 90; 
   let newScore = score;
   score = 100; 
   console.log(score, newScore);
   ```
    This snippet will log 100 and 90. At first score is declared and initialized with the value of 90
    Then so is newScore with the value of score, which for future reference is 90.
    Finally score is reassigned the value of 100 which happens for the variable score, but not for newScore
    which references the previous value of 90 even though it points to the value of score.

4. **Why doesn't the following code log an uppercase string? Change the code so that it does.**
   ```javascript
   let greet = 'hello';
   greet.toUpperCase();
   let scream = greet;
   console.log(scream); 
   ```
   Since scream references greet it is going to take its state of "hello" even though greet is transformed.
   to fix this 
   ```javascript
   let greet = 'hello';
   let scream = greet.toUpperCase();
   console.log(scream); 
   
   to fix this 
   ```javascript
      to fix this 
   ```javascript
   let name;eName = name || nickname;
   ```
   instead
   let children = null;
   let homework = 'lots';
   let busy = children && homework;

   someName ? console.log(`${someName} evaluates to true`) : console.log(`{someName} evaluates to false.``);

   busy ? console.log(`${busy} evaluates to true`) : console.log(`{busy} evaluates to false.``);
   ```

6. **The following code causes an infinite loop. Why?**
   ```javascript
   let counter = 0;

   while (counter <= 5) {
     counter = 1;
     console.log(`count: ${counter}`);
     counter += 1;
   }
   ```

