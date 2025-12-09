//basic function calling
function Myfirst(name){
    console.log("This is my first function and its name is "+name);
}
Myfirst("FirstOne");
//
//arrow functions(fucntion names are delcared using const keyword)

const MyFirstArrow =() => {
    return "my first arrow function";
}
console.log(MyFirstArrow());
//arrow fucntion for the square of a number
const square = number =>{
    console.log("the square of "+number+" is "+number*number);
}
square(10)
//function for mathematical operations
function Math(a,b){
    console.log("the addition of "+a+" and "+b+" is "+(a+b));
    console.log("the subtraction of "+a+"-"+b+" is "+(a-b));
    console.log("the product of "+a+" and "+b+" is "+(a*b));
    console.log("the  division of "+a+" and "+b+" is "+(a/b));
    console.log("the remainder of "+a+" and "+b+" is "+(a%b));
}
let a=10,b=20;
Math(a,b);
