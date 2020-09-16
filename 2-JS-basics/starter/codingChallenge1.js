/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). 
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// 1
var massMark, heightMark, massJohn, heightJohn;
massMark = 100;
heightMark = 1.98;
massJohn = 80;
heightJohn = 1.75;

// 2
var bmiMark, bmiJohn;
bmiMark = massMark / (heightMark * heightMark);
console.log('Mark\'s BMI: ' + bmiMark);
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log('John\'s BMI: ' + bmiJohn);

// 3
var isMarkBmiHigher = bmiMark > bmiJohn;

// 4
console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBmiHigher);