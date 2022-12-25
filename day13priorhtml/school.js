const inputField1 = document.querySelector("#inputfield1");
// console.log(inputField1, "inputfield1");
const inputField2 = document.querySelector("#inputfield2");
// console.log(inputField2, "inputfield2");
const addButton = document.querySelector("#button");
// console.log(button, "button");
let listofDatas = document.querySelector(".listofdatas");
// console.log(listofDatas);
const UL1 = document.querySelector("#ul1");
// console.log(UL1, "ul1");
const UL2 = document.querySelector("#ul2");
// console.log(UL2, "ul2");

let createElement = () => {
    //list1
    let listofDatas1 = document.createElement("li");
    let label1 = document.createElement("label");
    label1.className = "label1";
    label1.innerText = inputField1.value;
    listofDatas1.appendChild(label1);
    UL1.appendChild(listofDatas1);
    // console.log(listofDatas1);
    //list2
    let listofDatas2 = document.createElement("li");
    let label2 = document.createElement("label");
    label2.className = "label2";
    label2.innerText = inputField2.value;
    listofDatas2.appendChild(label2);
    UL2.appendChild(listofDatas2);
    // console.log(listofDatas2);
    //editButton1
    let editButton1 = document.createElement("button");
    editButton1.innerText = "Edit";
    listofDatas1.appendChild(editButton1);
    editButton1.className = "edit1";
    //removeButton1
    let removeButton1 = document.createElement("button");
    removeButton1.innerText = "Remove";
    listofDatas1.appendChild(removeButton1);
    removeButton1.className = "remove1";
    //editButton2
    let editButton2 = document.createElement("button");
    editButton2.innerText = "Edit";
    listofDatas2.appendChild(editButton2);
    editButton2.className = "edit2";
    //removeButton2
    let removeButton2 = document.createElement("button");
    removeButton2.innerText = "Remove";
    listofDatas2.appendChild(removeButton2);
    removeButton2.className = "remove2";
    return [listofDatas1, listofDatas2];
};
function handleRemove1() {
    let listofDatas1 = this.parentNode;
    // console.log(listofDatas);
    let UL1 = listofDatas1.parentNode;
    UL1.removeChild(listofDatas1);
    inputField1.value = "";
    // console.log(UL1);
}
function handleRemove2() {
    let listofDatas2 = this.parentNode;
    let UL2 = listofDatas2.parentNode;
    UL2.removeChild(listofDatas2);
    inputField2.value = "";
    // console.log(UL2);
}
function handleEdit1() {
    let listofDatas1 = this.parentNode;
    let label1 = listofDatas1.querySelector(".label1");
    listofDatas1 = label1.parentNode;
    let ulOflistDatas1 = listofDatas1.parentNode;
    ulOflistDatas1.removeChild(listofDatas1);
    addButton.innerText = "Update";
    inputField1.value = label1.textContent;
}
function handleEdit2() {
    let listofDatas2 = this.parentNode;
    let label2 = listofDatas2.querySelector(".label2");
    listofDatas2 = label2.parentNode;
   let ulOfthelistDatas2 = listofDatas2.parentNode;
   ulOfthelistDatas2.removeChild(listofDatas2);
    addButton.innerText = "Update";
    inputField2.value = label2.textContent;
}
const handleEvents = (listofDatas) => {
    // console.log(listofDatas);
    let removeButton1 = listofDatas[0].querySelector(".remove1");
    removeButton1.addEventListener("click", handleRemove1);

    let removeButton2 = listofDatas[1].querySelector(".remove2");
    removeButton2.addEventListener("click", handleRemove2);

    let editButton1 = listofDatas[0].querySelector(".edit1");
    editButton1.addEventListener("click", handleEdit1);

    let editButton2 = listofDatas[1].querySelector(".edit2");
    editButton2.addEventListener("click", handleEdit2);
};

let inputDatas = () => {
    let listofDatas = createElement();
    console.log(listofDatas, "created element");
    handleEvents(listofDatas);
    inputField1.value = "";
    inputField2.value = "";
};
addButton.addEventListener("click", inputDatas);
