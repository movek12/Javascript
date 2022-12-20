/*function add(a,b){
let c=a + b;
return alert(c);
}
add(3,4);*/

/*function sub(a,b) {
    let c=a-b;
    return alert(c);
}
sub(10,8);*/
/*
function modulus(a,b){
let c = a % b;
return alert(c);
}
modulus(45,10);*/

/*function compare(username,password){
    if (username === "Mobek" && password === "hang"){
       return alert("Welcome");
    } else{
       return alert("invalid credentials");
    } 
}
compare("Mobek","hang");*/

/*function permission(age,license){
    if(age>=18 && license === "yes"){
        return alert("you are allowed to drive");
    } else {
        return alert ("you are not allowd to drive")
    }
}
permission(10,"yes");

function course(payment,scholarship){
    if(payment === "yes" || scholarship === "yes"){
        return alert ("you are enrolled");
    } else {
        return alert("Make the Payement");
}
}
course("no","yes")

let inputs={
    username: "Nima",
    password: "Dong"
}

if (inputs.username=== "Nima" && inputs.password==="song"){
    alert ("You are logged in");
} else {
    alert ("Invalid credentials");
}

const Username=prompt("Enter your Username");
const Password=prompt("Enter your Password");
if (Username=== "Mobek" && Password === "hang"){
    alert("Welcome to the homepage");
} else {
    alert("Invalid credentials");
}
let obj= {
    Username:prompt("Enter your Username"),
    Password:prompt("Enter your Password")
}

switch (true) {

case (obj.Username === "Mobek" && obj.Password === "hang"):
    alert("Welcome to the Homepage");  
    break;
    default:
        alert("Invalid Credentials");
        break;
}

const Username = prompt("Enter your username");
const Password = prompt("Enter your password");

switch (true) {
  case (Username === "Mobek" && Password === "hang"):
    alert("Welcome to the homepage");
    break;
  default:
    alert("Invalid credentials");
}

function cinema (ticket,unwanteditems){
    if(ticket=== "yes" && unwanteditems==="no"){
        return console.log("Enter");
    } else if(ticket=== "yes" && unwanteditems==="yes"){
        return console.log("Please let me check your bag");
    } else {
        return console.log("First you have to buy tickets");
    }
}
cinema("no","no");

const ID = prompt ("Type yes or no: do you have an Identy Card?"); 
const Cellphone = prompt ("Type yes or no: do you have your cellphone on you?");
switch(true){
case (ID === "yes" && Cellphone === "no"):
    alert("Enter.");
    break;
case (ID === "no" && Cellphone === "no"):
    alert("You need an ID to enter.");
    break;
case (ID === "yes" && Cellphone === "yes"):
    alert("You are not allowed to enter with a cellphone.");
    break;
default:
    alert("You need an ID to enter and you are not allowed to enter with a cellphone.");
    break;
 }
*/

cinema(ID,Cellphone){
    if (ID === "yes" && Cellphone === "no"){
        return alert("You can enter.");

    } else if(ID === "no" && Cellphone === "no"){
        return alert("You need an ID to enter.");

    }else if(ID === "yes" && Cellphone === "yes"){
        return alert("You are not allowed to enter with a cellphone.");
}else{
        return alert("You need an ID to enter and you are not allowed to enter with a cellphone.");    
}
}
cinema("yes","no");

/*
const square = function (number) {
  return alert(number * number);
};
const x = square(4); // x gets the value 16

let b = function (n) {
  return alert(n * n);
};
b(2);*/

// Hoisting : In JavaScript, "hoisting" refers to the behavior of variable declarations being moved to the top of their scope before code execution.
//In JavaScript, "hoisting" refers to the behavior of variable declarations being moved to the top of their scope before code execution.
// function expressin cannot be hoisted. that means: it cannot be called before the declaration.
/*
const math = {
    factit: function factorial(n) {
      console.log(n)
      if (n <= 1) {
        return 1;
      }
      return factorial(n - 1);
    }
  };
  
  math.factit(2) //3;2;1;
  

const sum = (a,b)=>{
    let c = a + b;
    return (c);
}
console.log(sum(3,5));

const hello =()=>{
    return ("hi")
}
console.log(hello());*/

//starts from 0

/*for (let i=0; i<10 ;i++){
    console.log(i);
}
// (i+1) if you dont want zero

let cities = ["Biratnagar","Chitwan","Kathmandu","Pokhara","Birgunj","Dhangadi"];
for (let i = 0; i < cities.length; i++ ){
    console.log("This is " + cities[i] + " , one of the cities from Nepal");
}

cities.forEach(function(c){
    console.log("This is " + c );
});

let alp = ["Apple","Mango","Orange",'Banana','Jackfruit'];
for (let i=0; i<alp.length; i++){
    console.log('This is a ' + alp[i] +'.');
}

alp.forEach(function (fruits){
    console.log('this is a ' + fruits + '.');
}
    );

for(fruit of alp){
console.log("this is " + fruit);
}    

let students = {
    Name:'Johan',
    Surname: 'Wolfgang von Goethe',
    Age: 25,
    Rollno : 10,
    Address: 'Kathmandu',
    Grade: 7
};
for(keys in students) {
console.log(`${keys}:${students[keys]}`);
}

let candidate = {
    Name: "Rabi Lamichane",
    Candidacy: " Mayor",
    City: 'Chitwan',
    Party:'Rastriya Prajatantra Party',
    Age: 45
}

f.or(datas in candidate) {
    console.log(`${datas}:${candidate[datas]}`);
}

let i =0;
while (i<4){
    console.log(`${i} is less than 4`);
    i++;
}




const Username = prompt ("Enter your Username");
const Password = prompt ("Enter your Password");
if(Username === "sujal" && Password=== "malla"){
    alert ("Welcome to your Homepage");
} else {
    alert (" Invalid Credentials");
};


const Username = prompt ("Enter your Username");*/




// No parameters
const greet = () => console.log('Hello!');

// One parameter
const square = x => x * x;

// Multiple parameters
const add = (a, b) => a + b;

// Object destructuring in the parameter list is also supported
const logFullName = ({ first, last }) => console.log(`${first} ${last}`);







