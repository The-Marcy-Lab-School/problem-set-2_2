# Problem Set 2.2 - Variables and Control Flow
## Short Response Questions

1. **What does the code below log? Why?**
   ```javascript
    {
      let singer = 'Omar Apollo';
    }

    console.log(`My favorite singer is ${singer});
   ```
* This will log ‘My favorite singer is Omar Apollo’ because the variable is declared with the string ‘Omar Apollo’ and is being concatenated with the string “my favorite singer is”

2. **What happens when we run the following code? Why?**
   ```javascript
const favorite = 'Juan Pablo';
console.log(`Our favorite Marcy Lab family member is ${favorite}!`);
favorite = 'Maya';
console.log(`Actually, ${favorite} is my favorite.`);
   ```
*It will log `Our favorite Marcy Lab family member is Juan Pablo!` because the varible ‘favorite’ is declared as a const variable which means it can not be changed once it is declared even if it is initiated again.  

3. **What does the following code log? Why?**
   ```javascript
   let score = 90; 
   let newScore = score;
   score = 100; 
   console.log(score, newScore);
   ```
*This will log ‘100, score’ because even if the variable ‘score’ was declared with a value of the number 90 it was initiated again with the number 100. The variable ‘newScore’ was declared with a value of the string ‘score’. 

4. **Why doesn't the following code log an uppercase string? Change the code so that it does.**
   ```javascript
   let greet = 'hello';
   greet.toUpperCase();
   let scream = greet;
   console.log(scream); 
   ```
*It will not log with uppercase letters bcause when you declared the variable ‘scream’ with the value of the variable ‘greet’, it logged the value of when ‘greet’ was originally declared. 
``` 
let greet = 'hello';
greet.toUpperCase();
let scream =  greet.toUpperCase();
console.log(scream);
```
*The new version of the varibale ‘ scream’ should be declared with the value of the variable ‘greet’  with .toUpperCase to log the string with upper case letters. 

5. **What does the following log? Explain why ensuring to explain how `someName` and `busy` were declared?**
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

*It will first l log ‘ ghost evaluates to true’ 
This is because the variable ‘someName’ is a logical OR operator taking in the variables ‘name’ and ‘nickname’ as operands. Logical OR operators consider at least one operand to be a truthy value in order to return true. The variable ‘someName’ returns ‘ghost’ because the operand ‘nickname’ has a truthy value of ‘ghost’. 
*It will then log ‘ null evaluates to false’.
*This is because the variable ‘busy’ is a logical AND operator which will consider both operands to be truthy values in order to return true. In the variable ‘busy’ the operand ‘children’ has a flasy value of null which will make the varible ‘busy’ return false. 
*The ternary operator takes in three operands. In this problem it is asking if the variables “someNmae’ and ‘busy’ are true or false. 

6. **The following code causes an infinite loop. Why?**
   ```javascript
   let counter = 0;
   while (counter <= 5) {
     counter = 1;
     console.log(`count: ${counter}`);
counter += 1;
   }
   ```
*This is an infinite loop because, the variable ‘counter’ is declared with a value of 0. This will pass through the while loop because it is less than 5 which is the condition for the loop. However, in the loop it is reassigned a value of 1 and then it adds 1 again so the new value is 2. After the loop, the variable has a value of 2 which passes through the loop and in the loop it is reassigned the value of 1 and the cycle goes on infinitely. 


