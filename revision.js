/*console.log('i created revision .js file')
//this is a comment
function add(a,b){
    return a+b;
}*/

/*let a=[1,2,3,"mobek",[123,"hang"]] 
if ( (a[4][0])>20 ) {
    alert ("you are allowed to drive") 
}
else{
alert ("not allowed")
}*/

/*const user={
    username:"frank",
    password:"frank11"
}
if(user.username ==="frank" && user.password ==="frank1"){
    alert ("you are loggid in")
    }
    else {
       alert ("username invalid")
}*/

/*function add(a,b){
    let c=a+b;
    return alert(c);
  }
add(10,20);*/
/*function div(a,b){
    let c=a/b;
    return alert(c);
}
div(20,4);*/
/*function mod(a,b){
    let c=a%b;
    return alert(c);   
}
mod(5,2);*/

/*function expo(a,b){
     let c=a**b;
    return alert(c);   
}

expo(2,2);*/

/*function incre(a,b){
    let c=a++;
    c=b++;   
    return alert(c);
}
incre(1,2);*/

/*function decre(a,b){
    let c=a--;
    return alert(c);
   
}
decre(1,2);*/
/*function comp(a,b) {
    if(a>b){
        return alert("it is correct");
    }
    else{
        return alert("incorrect")
    }
}
comp(10,12);
for(let i=0; i<=20; i++) {
    console.log(i)
}*/
/*
let obj={
    Johan:80,
    Bibek:90,
    Ginger:70,
    Felix:50,
    Gregor:78,
}
//for in loop
for(let a in obj){
    console.log("Marks of " , a , " are " + obj[a])
}
// for of loop
for(let b of "Gregory"){
    console.log(b)
}
let ar =[10,"tv", [ 12, "dvd"], null]
  for (let i=0; i<ar.length; i++){
    console.log(ar[i])
}*/

// var result;
// var num1=$("#number1").val()
// const op= prompt("Enter Operator(either +,-,* or /):");
// var number1=parseInt(prompt("Enter first number"));
// const number2=parseInt(prompt("Enter second number"));
// switch(op){
//     case '+':
//     result = number1+number2;
//     console.log(result)
//     break;
//     case '-':
//     result = number1-number2;
//     console.log("The result of"+number1+"-"+number2+"="+result)
//     console.log(`The result of ${number1}-${number2}=${result}`)
//     break;
//     case '*':
//     result = number1*number2;
//     console.log(`${number1}*${number2}=${result}`)
//     break;
//     case '/':
//     result = number1/number2;
//     console.log(`${number1}/${number2}=${result}`)
//     break;
// }
function Login() {
    var username=$("#username").val();
    var password=$("#password").val();
    check(username,password);
}

function check(u,p) {
    if(u=="Movek" && p=="Lawati"){
        alert("Welcome"+u);

    }else{
        alert("Invalid credentials !!!!")
    }
}
function GetResult() {
    let result;
    const number1=parseInt($("#num1").val());
const number2=parseInt($("#num2").val());
var op=$("#opp").val();
switch(op){
        case '+':
        result = number1+number2;
        console.log(result)
        break;
        case '-':
        result = number1-number2;
        console.log("The result of"+number1+"-"+number2+"="+result)
        console.log(`The result of ${number1}-${number2}=${result}`)
        break;
        case '*':
        result = number1*number2;
        console.log(`${number1}*${number2}=${result}`)
        break;
        case '/':
        result = number1/number2;
        console.log(`${number1}/${number2}=${result}`)
        break;
    }
    alert(`The result is ${result}`)
}

//array methods
//push adds an element at the end.
/*let roomnumbers=[10,12,15];
roomnumbers.push(20);
console.log(roomnumbers) 
// unshift adds an element at the front
let doomnumbers=[10,12,15];
doomnumbers.unshift(21);
console.log(doomnumbers) 
// pop removes last element
let coomnumbers=[10,12,15];
coomnumbers.pop();
console.log(coomnumbers) 
// shift removes first element
let poomnumbers=[10,12,15];
poomnumbers.shift();
console.log(poomnumbers) 

let names=["Johan","Rishav","Birhang"]
names.pop();
console.log(names)

let james=["Johan","Rishav","Birhang"]
james[3]="Gems";
console.log(james)
// if the given index has already an element it replaces
let games=["Johan","Rishav","Birhang"]
games[0]="Gems";
console.log(games)
//SORTING
//sort sortes the elements in ascendingly
let tames=["Johan","Rishav","Birhang"]
console.log(james.sort())
// reverse reverses
let lames=["Johan","Rishav","Birhang"]
console.log(lames.reverse())
//concat adds the elements of two variables
let mames=["Johan","Rishav","Birhang"]
console.log(mames.concat(games))*/
/*
const numbers=[2,4,6,8,10]
const newarry=numbers.map(multiply);
function multiply(n){
    return n*2;
}
console.log(newarry, "new arry")

const number=[2,4,6,8,10]
const newary=number.map(sub);
function sub(n){
    return n-1;
}
console.log(newary, "new arry")
/*
let players=[

{    
    firstname:"Leonal",
    lastname: "Messi",
},
{
    firstname:"Christiano",
    lastname:"Ronaldo",
},
];
    
const upnames=players.map(fullname);
function fullname(james){
console.log(james.firstname, "test name");
return {fullname:`${james.firstname} ${james.lastname}`};
}
console.log(names,"names");
/*let players=[

{
  id:1,  
    firstname:"Leonal",
    lastname: "Messi",
},
{
    id:1,
    firstname:"Christiano",
    lastname:"Ronaldo",
},
]   
const names=players.filter(fltr);
function fltr(name){
return name.id===1;
}
console.log(names)*/









   



