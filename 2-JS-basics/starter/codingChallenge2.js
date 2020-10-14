/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var john1 = 89;
var john2 = 120;
var john3 = 124;

var mike1 = 116;
var mike2 = 94;
var mike3 = 123;

// 1
var johnAverage = (john1 + john2 + john3) / 3;
var mikeAverage = (mike1 + mike2 + mike3) / 3;

// 2 & 3
if (johnAverage > mikeAverage) {
    console.log("John is the winner with the average score " + johnAverage + "!");
} else if (johnAverage < mikeAverage) {
    console.log("Mike is the winner with the average score " + mikeAverage + "!");
} else {
    console.log("The result is draw with the same average score of " + johnAverage + "!");
}

// 4
var mary1 = 97;
var mary2 = 131;
var mary3 = 105;

var maryAverage = (mary1 + mary2 + mary3) / 3;

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log("John is the winner with the average score " + johnAverage + "!");
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
    console.log("Mike is the winner with the average score " + mikeAverage + "!");
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    console.log("Mary is the winner with the average score " + maryAverage + "!");
} else if (johnAverage === mikeAverage && johnAverage > maryAverage) {
    console.log("Winners are John and Mike with the average score " + johnAverage + "!");
} else if (johnAverage === maryAverage && johnAverage > mikeAverage) {
    console.log("Winners are John and Mary with the average score " + johnAverage + "!");
} else if (mikeAverage === maryAverage && mikeAverage > johnAverage) {
    console.log("Winners are Mike and Mary with the average score " + mikeAverage + "!");
} else {
    console.log("All 3 players have the same average score of " + johnAverage + "!");
}

console.log("John: " + johnAverage);
console.log("Mike: " + mikeAverage);
console.log("Mary: " + maryAverage);