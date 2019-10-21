# Problem Set 2.2 - Variables and Control Flow
## Short Response Questions

1. **What does the code below log? Why?**
   ```javascript
    {
      let singer = 'Omar Apollo';
    }

    console.log(`My favorite singer is ${singer}`);
   ```
    The above code logs an error because the string variable `singer` is declared outside the scope of where the console can log it. 

2. **What happens when we run the following code? Why?**
   ```javascript
   const favorite = 'Juan Pablo';
   console.log(`Our favorite Marcy Lab family member is ${favorite}!`);

   favorite = 'Maya';
   console.log(`Actually, ${favorite} is my favorite.`);
   ```
   The above code logs:
      "Our favorite Marcy Lab family member is Juan Pablo!" [This is logged because, On line 16 the string variable `favorite` is assigned a value of 'Juan Pablo'. ]
      "Actually, Maya is my favorite." [This is logged because on line 19 the string variable `favorite` has its value reassigned to 'Maya'.]

3. **What does the following code log? Why?**
   ```javascript
   let score = 90; 
   let newScore = score;
   score = 100; 
   console.log(score, newScore);
   ```
    The above code logs: "100"
                         "90"

   This is logged because on line 28, the number variable `score` is assigned a value of 90. 
   Then on line 29 a new variable named `newScore` is set equal to the number variable `score`. 
   Then on line 30 `score` is reassigned a value of 100. Then on line 31 both variables are console logged, 
   and at this point the value of `score` is now 100, and the value of `newScore` is equal to the value of `score`,
   as it was on line 29. `newScore` retains the value of `score` on line 29 and doesn't change to the value of `score`
   on line 31 because the memories of variables aren't "deeply linked with each other".

4. **Why doesn't the following code log an uppercase string? Change the code so that it does.**
   ```javascript
   let greet = 'hello';
   greet.toUpperCase();
   let scream = greet;
   console.log(scream); 
   ```
    The above code does not log an uppercase string because the string variable `greet` does not get reassigned to a value that is a string with uppercase letters. Nor does the string variable `scream` get assigned a value that is as such.
    The code below will do so:
    
   ```javascript
   let greet = 'hello';
   let scream = greet.toUpperCase();
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

   someName ? console.log(`${someName} evaluates to true`) : console.log(`${someName} evaluates to false`);

   busy ? console.log(`${busy} evaluates to true`) : console.log(`${busy} evaluates to false`);
   ```
    The above code logs: "ghost evaluates to true"
                         "null evaluates to false"
  
   "ghost evaluates to true", is logged because on line 61 the variable `name` is declared but left undefined. 
   Thus on line 63 when the OR logical operator compares the variable `name` to the string variable `nickname`,
   It short circuits on the first truthy value which will be `nickname`, which in turn gives the variable `someName` a truthy value.
   Then on line 68 the code in the first argument in the loop shorthand is excuted. 

   "null evaluates to false", is logged because on line 64 the variable `children` is assigned a value of null, then on line 66, 
   the logical AND operator compares its two operands `children` and `homework`. Since `children` is assigned a value of null, the operation short circuits at `children`,
   and assigns `busy` a value of null. Then on line 70 the variable `busy` is considered falsy which results in the code in the second argument to be executed.

6. **The following code causes an infinite loop. Why?**
   ```javascript
   let counter = 0;

   while (counter <= 5) {
     counter = 1;
     console.log(`count: ${counter}`);
     counter += 1;
   }
   ```
   The code on line 89 creates an infinite loop. 

