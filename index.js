//IS TRUTHY
//all cases for falsey values given via if and if else statements
//console will print corresponding statement if condition met
//if none met, will print true 

let value= ""

if (value===false) {
    console.log("The boolean value false is falsy");
}
 else if (value===null) {
    console.log("The null value is falsy");
}
 else if(value===undefined) {
    console.log("undefined is falsey");
}
else if(value===0){
    console.log("The number 0 is falsy (the only falsy number)");
;}
else if(value===""){
    console.log("The empty string is falsy(the only falsy string)");
}
else {
    console.log(true);
}


//NUMBER LINE
//if statements will take a sum of 2 numbers and print out statements
//depending on the result. individual cases proposed and statement aaded to 
//console log. 

let num1 = -5
let num2 = 0
let sum = num1 + num2
if(sum< -1000) {
    console.log(sum + " is less than -1000");
}
else if (sum<0) {
    console.log(sum + " is a negative number");
}
else if (sum ===0) {
    console.log(sum + " is equal to 0");
}
else if (sum>0 && sum<=100) {
    console.log(sum + " is larger than 0");
}
else if (sum>100){
    console.log(sum + " is greater than 100");
}


//GREATER THAN 5
// two numbers will be evaluated and if both are greater than
//or equal to 5, true will be printed. otherwise false will be printed. 

let number1 = 5
let number2 = 5

if (number1>=5 && number2>=5) {
    console.log (true);
}
else {
    console.log(false);
}


//PAIR AND COMPARE
//two sets of values will be taken and evaluated
//if either the first pair or the second pair are equal in value and data type,
//true will be printed. otherwise, it will be false. 

let param1A = "cake"
let param1B = "cake"

let param2A = "pie"
let param2B = "pie"

if (param1A===param1B || param2A===param2B) {
    console.log (true);
}
else {
    console.log (false);
}


