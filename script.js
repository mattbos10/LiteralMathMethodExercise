// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
console.log(warmHugs);
// 1b
console.log(warmHugs.toLowerCase());
console.log(warmHugs);
// 1c
console.log(warmHugs.replace('like', 'love'));
console.log(warmHugs);

let beenImpaled = "Oh, look at that. I've been impaled.";
console.log(beenImpaled);

console.log(beenImpaled.slice(18));
console.log(beenImpaled);

let dotDotDot = "..."
console.log('...');

let skullBones = "I don't have a skull" + dotDotDot + "or bones."
console.log(skullBones);

Math.PI;
console.log(Math.PI);

let randomNum = Math.random();
console.log(randomNum);
    // returns a number from 0 up to 3
randomNum *= 3;
    // randumNum = randomNum * 3;
console.log(randomNum);
    // returns 0,1,2 or
randomNum = Math.floor(randomNum)
console.log(randomNum);
    // returns 1,2 or 6 --> adds 1 --> dice roll
randomNum++;
console.log(randomNum);
/* 
BONUS
*/
// 6
console.log(' Let it Go!');
console.log(' Let it Go!'.toUpperCase().repeat(2).trim());
// 7a
let reindeers = "Reindeers are better than people."
// 7b
console.log(reindeers.replace(/ /g, "_"));
// 8
Math.SQRT2;
console.log(Math.SQRT2);
// 9
var newRandomNumber = Math.floor(Math.random() * (23 - 7 + 1) + 7);
console.log(newRandomNumber);