//1        //2
function hello() {
    //3
    console.log("Hello World!");
}


function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function numberEntered(num){
    console.log("The number you entered was: ", num);
}
numberEntered(5);
numberEntered(4);
numberEntered(3);

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}
addAnyTwoNumbers(4,5);
addAnyTwoNumbers(6,11);
addAnyTwoNumbers(7,8);


function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}

subtractTwoNumbers (18,3);
subtractTwoNumbers (5,2);
subtractTwoNumbers (218,171);

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage
}
console.log(getMyBattingAverage(250,91));

function add(x, y){
    let sum = x + y;
    return sum; //or return x + y
}
console.log(add(1,1));


function fullName(first, last){
    let wholeName = first + " " + last;
    return wholeName; // or return first + " " + last
}
console.log(fullName("Paul", "O'Connor"));

function greet(name){
    return "Hello" + name
};

var myName = "Jack";
result = greet(myName);
console.log(result);