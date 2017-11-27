// 短註解
/*
這是長註解
*/

/*
電腦：想一個數字（在1~10的隨機數字）
*/
var computerNumber = Math.floor(Math.random() * 10) + 1; //從0~1變成0~10，無條件捨去再+1
// var computer_number 另種js命名方式
console.log("電腦：" + computerNumber);

/*
玩家：講一個數字
*/
var guess = prompt("請你猜一個數字，在 1~10 之間。");
//把prompt的結果存到guess變數中。用parseInt將回答都轉成數字。
console.log("玩家：" + guess);

/*
電腦：猜的太高了、猜得太低了、答對了、非數字、大於10、小於1
*/
// console.log(computerNumber > guess);
// console.log(computerNumber < guess);
// console.log(computerNumber === guess);

if (guess > 10) {
    var guess = parseInt(prompt);
    alert("數大便是美💩");
} else if (guess < 1) {
    var guess = parseInt(prompt);
    alert("數小便是德");
} else if (guess > computerNumber) {
    var guess = parseInt(prompt);
    alert("猜得太高了");
} else if (guess < computerNumber) {
    var guess = parseInt(prompt);
    alert("猜得太低了");
} else if (guess == computerNumber){
    var guess = parseInt(prompt);
    alert("答對了😄");
} else if (typeof(guess) === "string"){
    alert("你484不認識數字😠")
} else {
    alert("恭喜測出我沒發現到的🐛！");
 }
