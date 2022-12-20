/*//Array map method
let arr = [12,4,13,15,67,87];
let a = arr.map((value,index,array)=>{
console.log(value,index,array)
return value + index 
})
//Array filter method
console.log(a)
let arr2 =[12,5,13,8,10,9,6,2];
let a2 =arr2.filter((v)=>{
    return v<10;
})
console.log(a2)

//Array reduce method
let arr3 = [1,2,3,4,5,6,7,8];
let newarr3 = arr3.reduce((b1,b2)=>{
return b1 + b2;
});
console.log(newarr3);
*/
/*
let x=1;

try {
    if (x===0) {
        console.log("Test passed");
    }else{
        throw "errors";
    }
    console.log("hello")
}catch(error){
    console.log(error,"");
}
*/
/*
let abc = new Promise((resolve, reject) => {
    // Pending : it takes time to execute then you know its pending.
    resolve();
    reject();
})*/
/*let x=1;

let promise = new Promise((resolve,reject) =>{
    if  (x===0){
        resolve ("resolved");
    }else {
        reject ("Error")
    }
});
console.log(promise,"promise");

promise.then(
    (value) =>{console.log(value, "value");
},
(error) => {
    console.log(error,"error");
});
*/

/*let header = document.querySelector(".h2");
//header.innertext = "hey there gg"
header.innerHTML= "<p>this is my day</p>"
header.style.color="blue";
header.style.fontSize="100px";
*/
button =document.createElement("button");
button.innerText="click"

document.body.appendChild(button);
console.log(button,"Button")


h1 = document.createElement("h1");
h1.innerText="Hey ther Dhilala"
document.body.appendChild(h1);
console.log(h1,"h1)");

list = document.getElementById("List")
console.log(list.firstElementChild,"first child");
console.log(list.tagName,"tag name");
console.log(list.parentNode,"parent node");
console.log(list.childNodes,"child nodes");
console.log(list);


