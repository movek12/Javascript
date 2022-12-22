/*let button = document.querySelector("#button")
console.log(button,"button")
button.addEventListener('click',()=>{
    console.log("I am clicked");
    para.innerText = "I am clicked"
});
let para = document.querySelector("#para")
console.log(para);

function testClick(){
    console.log("I am clicked from test");
}
let inputfield = document.querySelector("#input")
console.log(inputfield)
inputfield.addEventListener("keypress",keyPress);
function keyPress(event){
    if (event.key==="k"){
        console.log("keep pressed");
    }};
    console.log(event , "event");

    console.log("keep pressed"); }
*/

let input = document.querySelector("#input");
console.log(input);
let addButton = document.querySelector("#button");
console.log(addButton);
let list = document.querySelector("#Li");
console.log(list);

//here a new function creteElement is created to create elments
const createElement = () => {
    //creating a list
  const listItem = document.createElement("li");  
  //Giving label to the list, but has to be appended
  const label = document.createElement("label");

//creating a deleteButton
  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.className='delete';

// creading an editButton
  let editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.className = 'edit';

  label.innerText = input.value;

  //apending child elements to its parentelement
  listItem.appendChild(label);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
};

//creating another function for the delete button
function handleDelete() {
    console.log(this,'i am running');
    let listItem= this.parentNode;
    let list = listItem.parentNode;
    list.removeChild(listItem);
    console.log(listItem,'listItem in delete');
}
//hendelEdit
function handleEdit(){
    console.log(this,'handleEdit items');
    let listItem = this.parentNode;
    let label = listItem.querySelector('label');
    input.value = label.textContent;
    console.log(listItem,'handleEdit');
    addButton.innerText = 'Update';

    
}
//handleEvents
const handleEvents = (listItem) => {
console.log(listItem,"list of the items")
deleteButton = listItem.querySelector('.delete');
deleteButton.onclick= handleDelete;
editButton = listItem.querySelector('.edit');
editButton.onclick= handleEdit;
console.log(deleteButton,'deleteButton');
}

const addItem = () => {
  console.log("i am clicked");
  let listItem = createElement();
  input.value !== 'string' 
  ? list.appendChild(listItem) 
  : alert('Please enter a name of a Item');
  list.appendChild(listItem);
  handleEvents(listItem);
  input.value = '';
  addButton.innerText = 'Add';
 
}

addButton.addEventListener("click", addItem);




