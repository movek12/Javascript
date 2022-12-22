let capitalcities = {
  Nepal: "Kathmandu",
  India: "Delhi",
  China: "Beijing",
  USA: "Washington",
  Germany: "Berlin",
};
 for (let i = 0; i < Object.keys(capitalcities).length; i++) {
  console.log(
    `The Capital City of  ${Object.keys(capitalcities)[i]} is ${
      capitalcities[Object.keys(capitalcities)[i]]
    }`
  );
  console.log(
    "The Capital City of " +
      Object.keys(capitalcities)[i] +
      " is " +
      capitalcities[Object.keys(capitalcities)[i]]
  );
}
for (let keys in capitalcities){
    console.log('The Capital city of' + keys + " is " + capitalcities[keys] +'.');
}

let ages = {
  Ram: 20,
  Shyam: 32,
  Sonam: 30,
  Jivan: 10,
  Simon: 15,
  Johan: 45,
};

for (let i = 0; i < Object.keys(ages).length; i++) {
  console.log(
    "The Age of " + Object.keys(ages)[i] + " is " + ages[Object.keys(ages)[i]]
  );
}

for (let keys in ages){
    console.log('The age of ' + keys + ' is ' + ages[keys] +'.');
}
surnames = {
  Gopal: "Basnet",
  Alan: "Gregor",
  Leonel: "Messi",
  Brandon: "Macculun",
  Felix: "Winter",
};

for (let i = 0; i < Object.keys(surnames).length; i++) {
  console.log(
    "The Surname of " +
      Object.keys(surnames)[i] +
      " is " +
      surnames[Object.keys(surnames)[i]] +
      "."
  );
  console.log(
    `The Surname of ${Object.keys(surnames)[i]} is ${
      surnames[Object.keys(surnames)[i]]
    }.`
  );
}

for (let keys in surnames){
    console.log('The surname of ' + keys + ' is ' + surnames[keys] +'.');
}*/

//Write a function to find a mean of 4,8,9,10

const mean = (a, b, c, d) => {
return (a+b+c+d)/4;
}
console.log(mean(4,8,9,10)); 

//while loop
let n = parseInt (prompt ('Enter the value of n'));
let i =0;
while (i<n){
    console.log(i)
}*/
    
    
let n = parseInt (prompt ('Enter the value of n'));
let i =0;
do{
    console.log(i)
    i++;
}while(i<n)


//
// Use For loop first , Foreach loop and for of loop 
//1)Use above mentioned loop to print the name of fruits  in console:
//Input =
const Fruits =[
  { name: "Apple", cost: "200" },
  { name: "Guava", cost: "100" },
  { name: "Mango", cost: "200" },
];

for (let i=0; i<(Fruits).length; i++){
  console.log(Fruits[i].name);
}

Fruits.forEach( fruit=>{
  console.log(fruit.name);
});

for(const afruit of Fruits){
  console.log(afruit.name);
}

students = [
  {name:'Pranav',address:'Baluwatar',age:20},
  {name:'Roshan',address:'Bhaktapur',age:19},
  {name:'Biplav',address:'Baneshwor',age:23},
  {name:'Prashant',address:'Kalanki',age:18}
]

for (let i=0; i<students.length; i++){
  console.log(students[i].name + ' lives in ' + students[i].address + '. And his age is ' + students[i].age);
}

students.forEach(studentdetails =>{
  console.log(studentdetails.name);
});

for (const stddetails of students){
console.log(stddetails.name);
}

Candidates = [
  {name:'Rabi lamichane',Position: 'Primeminister',},
  {name:'Gagan Thapa',Position: 'Minister of Education',},
  {name:'KP Oli',Position: 'Minister of Forestry',},
  {name:'Sagar Dahal',Position: 'Minister of Sports',},
]

for (let i=0; i<Candidates.length; i++){
  console.log(Candidates[i].name + ' is the new elected ' + Candidates[i].Position + ' of Nepal.');
}

Candidates.forEach(candidate=>{
console.log(`${candidate.name} is the new elected ${candidate.Position} of Nepal`);
});
for(acandidate of Candidates){
  console.log('Is ' + acandidate.name + ' the new elected ' + acandidate.Position + ' of Nepal?' );
}

Weights = {
  Gregor: 70,
  Ganga: 80,
  Gerald: 50,
  Grapi: 55,
  Gonger: 65,
}

for (let i=0; i<Object.keys(Weights).length; i++){
  console.log(Object.keys(Weights)[i] + ' weighs ' + Weights[Object.keys(Weights)[i]] + ' Kg.');
}

Weights.forEach(weight=>{
console.log(Object.keys(weight) + ' weighs ' + weight[Object.keys(weight)])
});
*/
const Fruits =[
  { name: "Apple", cost: "200" },
  { name: "Guava", cost: "100" },
  { name: "Mango", cost: "200" },
];


for(let i=0; i< Fruits.length; i++){
  Fruits[0].name = "Grapes";
  Fruits[1].name = "Watermelon";
  Fruits[2].name = "Banana";
}
console.log(Fruits);

for (let fruit of Fruits) console.log(fruit.name);


const newNames = ["Grapes","Watermelon","Banana"];
for (let i=0; i<Fruits.length; i++){
   Fruits[i].name= newNames[i];
}
console.log(newNames);




const arr = [10, 20, 20, 10, 10, 20, 5, 20];

// Create an object to store the frequency of each element
const frequency = {};

// Iterate through the array and count the frequency of each element
for (const element of arr) {
  if (element in frequency) {
    frequency[element] += 1;
  } else {
    frequency[element] = 1;
  }
}

// Print the element and its frequency
for (const element in frequency) {
  console.log(element + ' ' + frequency[element]);
}*/
