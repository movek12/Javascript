/*let result;
const operators = prompt("Enter an operator( either +,-,*,/)");
const number1 = parseInt (prompt("Enter the firstnumber"));
const number2 = parseInt (prompt("Enter the secondnumber"));
switch (operators){
    case"+" :
    result=(number1+number2);
    alert(result)
    console.log(result);

    case"*" :
    result=(number1*number2);
    alert(result)
    console.log(result);

    case"/" :
    result=(number1/number2);
    alert(result)
    console.log(result);

    case"-" :
    result=(number1-number2);
    alert(result)
    console.log(result);

break;
}*/
/*let result;
const opp = prompt ("Enter an operator(either +,-,*,/)");
const num1 = parseInt (prompt("Enter the first number"));
const num2 = parseInt (prompt("Enter the second number"));
switch (opp){
    case  "+":
        result = (num1+num2);
        alert(result);

    case  "-":
        result = (num1-num2);
        alert(result);
    case  "*":
        result = (num1*num2);
        alert(result);
    case  "/":
        result = (num1/num2);
        alert(result);

    break;
}*/
/*let result;
const op = prompt ("Enter an operator(either +,-,*,/");
const n1 = parseInt (prompt ("Enter the second number"));
const n2 = parseInt (prompt ("Enter the first number"));
switch (op) {
    case "+" :
        result = (n1+n2);
        alert(result);
        console.log(`${n1}+${n2}=${result}`);
        break;

    case "-" :
        result = (n1-n2);
        alert(result);
        console.log(`${n1}-${n2}=${result}`);
        break;

    case "*" :
        result = (n1*n2);
        alert(result);
        console.log(`${n1}*${n2}=${result}`);
        break;

    case "/" :
        result = (n1/n2);
        alert(result);
        console.log(`${n1}/${n2}=${result}`);
    break;
}*/
/*let result;
const op = prompt ("Enter an operator(either +,-,*,/)");
const n1 = parseInt (prompt ("Enter  the first number"));
const n2 = parseInt (prompt ("Enter  the SECOND number"));
switch (op) {
    case "+" :
        result =(n1+n2);
        alert(result);
        console.log(`${n1}+${2}=${result}`);
        break;
    case "-" :
        result =(n1-n2);
        alert(result);
        console.log(`${n1}-${2}=${result}`);
        break;
    case "*" :
        result =(n1*n2);
        alert(result);
        console.log(`${n1}*${2}=${result}`);
        break;
    case "/" :
        result =(n1/n2);
        alert(result);
        console.log(`${n1}/${2}=${result}`);
        break;
        
}*/

//Array Methods
/*Push: adds an element at the end,syntax: (array.push(element))

unshift: adds at first syntax:(array.unshift(element)),

pop:removes the last element, syntax:(array.pop(empty))

shift: removes the first element syntax: (array.shift(element))*/

//sort: it sorts the objects in ascending order syntax: (array.sort(empty))

//reverse : it reverse all the element ssyntax: (array.reverse(empty))

//concat : you can add elemnts of another array syntax: (array.concaat(array))

/*map : it is used to modify elements. 
syntax: 
const array=[......]
const newarry=(array.map(function1))
function function1(abc){
return abc +,-,/,* a number; 
}
console.log1(newarry);*/


//1. Push Method(add an element at first)

/*let colors= ["Black","White","Blue","Gray"]
console.log(colors);
colors.push("Yellow");
console.log(colors);

//2.Unshift Method(add at last)
colors.unshift("Green");
console.log(colors);

//3.Pop Method(removes the last)
colors.pop();
console.log(colors);

//4.Shift Method (removes the first one)
colors.shift();
console.log(colors);

//5. Also using an INdex, an element can be added or changed.
//adding a new element in an array usong Index.
colors[4]="Red";
console.log(colors)

//changing an element using an Index.
colors[3]="Burgundy";
console.log(colors);
*/

/*let arrow =[1,2,4,5,7,9,10]
arrow.push(50);
console.log(arrow);*/
/*
let array =[12,"Gregor",null,["Belany",23]];
array.push("Shyam");
console.log(array);

 let numbers =[1,4,2,6,8,9,10];
 numbers.unshift(10);
 console.log(numbers);

 let number =[1,4,2,6,8,9,10];
 number.pop();
 console.log(number);

 let num =[1,4,2,6,8,9,10];
 num.shift();
 console.log(num);*/
/*
 let result;
 const op =( prompt("Enter an operato(either +.-.*,/"));
 const num1 =( parseInt (prompt ("Enter the first number")));
 const num2 =( parseInt (prompt ("Enter the second number")));
 switch (op) {
    case "+" :
    result =(num1+num2);
    alert(result);
    console.log(`${num1}+${num2}=${result}`);
    console.log(result);
    break;
 }*/
/*
let ary = [12, 1, 5, 6, 10];
console.log(ary.sort());
//output:[1, 10, 12, 5, 6]
let aryr = [12, 1, 5, 6, 10];
console.log(aryr.reverse());
//output : [10, 6, 5, 1, 12]

let aryy = [12, 1, 5, 6, 10];
console.log(aryy.concat(aryr));
//output : [12, 1, 5, 6, 10, 10, 6, 5, 1, 12]

let string1 = "Hello";
let string2 = "World";
let combinedString = string1 + " " + string2;

console.log(combinedString);

const values = [1,3,5,7,9,11];
const newval = values.map(function1);
    function function1(add) {
         return add + 2;
    } 
    console.log(newval);
// ouptput : [3, 5, 7, 9, 11, 13]

const val= [1,3,5,7,9,11];
const neuval = (val.map(fun));
function fun(v) {
    return  v * 2;
}
//output [2, 6, 10, 14, 18, 22]
console.log(neuval);
const vv = [2,4,6,8,10,12];
const newv = (vv.map(gun));
function gun(hn){
    return hn / 2;
}
console.log(newv);
//output [1, 2, 3, 4, 5, 6]




let players=[

    {    
        firstname:"Leonal",
        lastname: "Messi",
    },
    {
        firstn
        ame:"Christiano",
        lastname:"Ronaldo",
    },
    ];
        
    const names=players.map(fu);
    function fu(james){
    return {fullname:`${james.firstname} ${james.lastname}`};
   
    }
    console.log(names,"names");
    
    
    let person=[
    {  
        Firstname:"Gregor",
        Surname:"Hill"
     },
    {  
        Firstname:"Ganga",
        Surname:"Hang"
     }
    
    ];
    const newobj = person.map(funk);
    function funk(abc){
    return {fullname:`${abc.Firstname} ${abc.Surname}`};
    }
    console.log(newobj);


    let add =[
       
        {
            city: "Kathmandu",
            Street: "Dandemarge",
        },
        {
            city: "Pokhara",
            Street: "Lakeside",
        }
    ];
    const fulladd =add.map(hunk);
    function hunk(ab){
        return {Address: `${ab.city},${ab.Street}`}
    }
    console.log(fulladd);
  

    let padd =[
       
        {
            city1: "Kathmandu",
            Street1: "Dandemarge",
        },
        {
            city1: "Pokhara",
            Street1: "Lakeside",
        }
    ];
    const fullpadd =padd.map(trunk);
    function trunk(a){
        return a.city1 + "," + a.Street1
    }
    console.log(fullpadd);*/

    //copywithin()
    //copyWithin(target)
    //copyWithin(target, start)
    //copyWithin(target, start, end)
    
   /* const array = [1,"sweden",45,{type:true},[15,"hanger"]];
    console.log(array.copyWithin(-1,1));

    // here target<o,target+array.length
    //-1+5=4
    //start(1)="sweden" end(4)=[15,"hanger"]
    console.log(array.copyWithin(-1,3));*/
    
    /*let contries = [
        
        {
            id:2,
            nepal:"Kathmandu",
        },
  
        {
            id:1,
            India:"Delhi",
        },
       
        {
            id:2,
            USA:"washingtom",
        },
       
        {
            id:1,
            Maldives:"male",
        }
    ];
    const capital =contries.filter(hug)
    function hug (cap){
        return cap.id===2;
    };
    console.log(capital);
    */

    let players=[

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
        const names=players.filter(func);
        function func(name){
        return name.id===1;
        }
        console.log(names)

        //every() it tests wether all elements in the array pass the test implemented by the provided function. it returns a boolean value. 
// current value= elements of the array

/*const num = [2,4,6,8,10,12];
let test =num.reduce(sum , 0);
function sum(total , n) {
    console.log(total);
    return total+ Math.round(n);
}
console.log(test);

const foods= [
    { name: "Pizza", cost:120},
    { name: "Pastaa", cost:500},
];
let totaal = foods.reduce (summ,0);
function summ(tc) {
    console.log(tc);
    return tc + foods.cost);
}
console.log(totaal);

//value not assigned= hoisting(undefined)

var test;
function hello(){
    //local variable
    // var is also function scope
    let helloworlds;
}
console.log(helloworld);*/

//let and const block scope inside curly braces
//var is a function scope and global scope

/*const array1 = ['a', 'b', 'c'];


const array1 = array1.forEach(fun);
function fun(abc){
    return abc
}
console.log(array1)

//array1.forEach(element => console.log(element));

const 
//find for the output to be object. returns the first element to match the condition
const foods= [
    { name: "Pizza", cost:120},
    { name: "Pastaa", cost:500},
    { name: "Pastaa", cost:500},
    { name: "Pastaa", cost:500},
];
let totaal = foods.find (getfood);
function summ(tc) {
    return foods.name === "Pastaa";
}
console.log(totaal);

//function without name is anynomous
// function can be stored in a varaible
let arrFunc = function(foods){
return foods.name ==="pizza"
}
// arrow function
=>
let totaal = foods.find(foods)=>;
function summ(tc) {
    return foods.name === "Pastaa";
}
console.log(totaal);
const arrayFunction = () => 2;*/
/*
const student= [
    { name: "Pizza", marks:60,passed:'yes'},
    { name: "Pastaa", cost:500},
    { name: "Pastaa", cost:500},
   { name: "Pastaa", cost:500},
];*/
//let finder = foods.find((Pizza )=> foods.name === "Pizza);


// Syntax;
//while(condition exp)
//var i=0;
//while 
/*
const array = [1,2,3,4,5,6];
let newarray=[];
let i=0;
while (i < array.length) {
    newarray.push(array[i]);

   console.log(i,"i");
   i++;
}
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);

let array = ["ram","shyam","hari"];
let it=0;
let newarray2 =[];
do{console.log}
*/

// using the join method. 
//comma is the default.(empty)
//output .... , .... , ..... ,
//for the output ... + ... + ... ("+")

const fruits = ["Apple","Banana","Orange","Mango"];
console.log(fruits.join());
console.log(fruits.join("+"));

// using for loop
const arr = ["Apple","Banana","Orange","Mango"];

let string1='';
let string2='';

for (let i=0; i<arr.length; i++){

    if(i< arr.length -1){
        string1 += arr[i] + ",";
    }
else {
    string1 += arr[i];
}
}
console.log(string1);

for ( i =0; i< arr.length; i++){
    if ( i<arr.length-1){
        string2 += arr[i] + "+";
    } else {
    string2 += arr[i] ;
    }
}
console.log(string2);

array = [1,2,3,4,5,6]
console.log(array.join());
console.log(array.join("+"))

let num1='';

for ( let i=0; i<array.length; i++){
    if (i<array.length -1){
        num1 += array[i] + ',';
    } else {
        num1 += array[i];
    }
}
console.log(num1);

const data =[1,2,3,4,5,6];
console.log(data.reverse());

let reverseddatas = [];

for ( let i= (data.length -1); i>=0; i--){
    reverseddatas.push(data[i]);
}
console.log(reverseddatas);

const friends= ["Mobek","Kshetiz","Bibek","Biswo","sagar"];
console.log(friends.reverse());

let games = [];
for ( let i= (friends.length -1); i>=0; i--){
    games.push(friends[i]);
}
console.log(games);









