/*let addButton = document.querySelector('#Button');
console.log(addButton, 'button')
console.log(this, 'this is')
addButton.addEventListener('click',function(event){
console.log(this , 'hello');
});

function add(num1,num2 =10) {
    return num1 + num2;
}
console.log(add(5,3));
add(3);


let array = ["Mobek", "limbu"];
const [myName, mySurname] = array;
console.log(myName, "arrayname");

let obj = {
    name:'mobek',
    surname:'limbu'
}
const {name} = obj;
console.log(name , "onjname");

function sum(...args) {
    console.log(args, 'args');
    let total = 0;
    for(const arg of args) {
        total += arg;
    }
    return total;
}
console.log(sum(1,2,3));

const myVehicle = {
    brand:'Ford',
    model: 'Mustang',
    color: 'blue'
};

const updateMyvehicle = {
    type : 'car',
    year: '2001',
    color: 'yellow'
}
//let copyVariable = {...myVehicle,...updateMyvehicle};
let vehicles = updateMyvehicle;
console.log(vehicles, 'vehicles');
vehicles.testKey = 'hello';
console.log(vehicles, 'vehicles');
console.log(updateMyvehicle);

*/
let addButton = document.querySelector('#Button');
let division = document.querySelector('.division');
console.log(division);

const getPost = ()=> {
    let data = fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => (division.innerText = data.title));
    //const {title} = data;
}
 

addButton.addEventListener('click', getPost);

 