let inputfieldName = document.querySelector('#fullname');
console.log(inputfieldName);
let inputfieldAge = document.querySelector('#age');
console.log(inputfieldAge);
let inputfieldgrade = document.querySelector('#grade');
console.log(inputfieldgrade);
let addButton = document.querySelector('#button');
console.log(button);

let UL1 = document.querySelector('#ul1');
console.log(UL1);
let UL2 = document.querySelector('#ul2');
console.log(UL2);
let UL3 = document.querySelector('#ul3');
console.log(UL3);

let addItems = () =>{
    console.log("Got it");
    const listItems1 = document.createElement('li')
    listItems1.innerText = inputfieldName.value;
    UL1.appendChild(listItems1);
    console.log(listItems1,'listItems1');
    const listItems2 = document.createElement('li')
    listItems2.innerText = inputfieldAge.value;
    UL2.appendChild(listItems2);
    console.log(listItems2,'listItems2');
    const listItems3 = document.createElement('li')
    listItems3.innerText = inputfieldgrade.value;
    UL3.appendChild(listItems3);
    console.log(listItems3,"listItems3");
    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    listItems1.appendChild(removeButton);
    removebutton.addEventListener('click',()=> listItems1.remove());
    listItems2.appendChild(removeButton);
    removebutton.addEventListener('click',()=> listItems2.remove());
    listItems3.appendChild(removeButton);
    removebutton.addEventListener('click',()=> listItems3.remove());

    };

addButton.addEventListener('click',addItems);