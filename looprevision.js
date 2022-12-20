let capitalcities = {
  Nepal: "Kathmandu",
  India: "Delhi",
  China: "Beijing",
  USA: "Washington",
  Germany: "Berlin",
};
/*or (let i = 0; i < Object.keys(capitalcities).length; i++) {
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
*/
let ages = {
  Ram: 20,
  Shyam: 32,
  Sonam: 30,
  Jivan: 10,
  Simon: 15,
  Johan: 45,
};
/*
for (let i = 0; i < Object.keys(ages).length; i++) {
  console.log(
    "The Age of " + Object.keys(ages)[i] + " is " + ages[Object.keys(ages)[i]]
  );
}

for (let keys in ages){
    console.log('The age of ' + keys + ' is ' + ages[keys] +'.');
}*/
surnames = {
  Gopal: "Basnet",
  Alan: "Gregor",
  Leonel: "Messi",
  Brandon: "Macculun",
  Felix: "Winter",
};
/*
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

/*const mean = (a, b, c, d) => {
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
