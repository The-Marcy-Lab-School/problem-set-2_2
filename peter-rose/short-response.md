# Problem Set 2.2 - Variables and Control Flow
## Short Response Questions

1. **What does the code below log? Why?**
   ```javascript
    {
      let singer = 'Omar Apollo';
    }

    console.log(`My favorite singer is ${singer});
   ```
   <!--Answer-->
   'My favorite singer is Omar Apollo'


2. **What happens when we run the following code? Why?**
   ```javascript
   const favorite = 'Juan Pablo';
   console.log(`Our favorite Marcy Lab family member is ${favorite}!`);

   favorite = 'Maya';
   console.log(`Actually, ${favorite} is my favorite.`);
   ```
   <!--Answer-->
   The console will print the string and subsitute the value of 'favorite'. After that
   it will give an error because favorite is a constant it cannot be changed. if we wanted to change it
   we should have used "let favorite" or "var favorite" if we wanted to change the value of favorite later on.

3. **What does the following code log? Why?**
   ```javascript
   let score = 90; 
   let newScore = score;
   score = 100; 
   console.log(score, newScore);
   ```
   <!--Answer-->
   // 100, 90
   This is because the operator is not strict it does not operate based on value AND type it. 
   It is only assigning this number to the variable not giving it an explicit value.
   
4. **Why doesn't the following code log an uppercase string? Change the code so that it does.**
   ```javascript
   let greet = 'hello';
   greet.toUpperCase();
   let scream = greet;
   console.log(scream); 
   ```
   <!--Answer-->
   It does not log an uppercase string becasue of the operator on line 43. It is not strict enough so the change does not get
   passed on as intended. It should be `let scream === greet`.

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
   <!--Answers-->
   someName evaluates to nickname because name does not have an initialized value and the operator || only requires one value to be truthy.
   So it prints the first part f our conditional. --> `ghost evaluates to true`

   busy evaluates as null which is a falsy. So it outputs the second value in the conditional on line 63.
   So it outputs the following.  -->  `ghost evaluates to false'

6. **The following code causes an infinite loop. Why?**
   ```javascript
   let counter = 0;

   while (counter <= 5) {
     counter = 1;
     console.log(`count: ${counter}`);
     counter += 1;
   }
   ```
<!--Answers-->
   This causes an infitnite loop becasue counter is declared every time the loop is run.
   It resets the value of counter everytime the loop starts.
