let header = document.querySelector(".header");
header.innerText = "The first chapter of Javascript";
header.style.fontSize = "80px";
header.style.color = "red";

let para1 = document.querySelector(".p");
para1.style.fontSize = "18px";
para1.innerHTML =
  "<p>JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.</p>";

let h2 = document.querySelector(".header2");
h2.style.fontSize = "50px";

const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);

let button = document.createElement("button");
button.innerText="Click here";
document.body.appendChild(button);

let list = document.createElement("list1");
list.innerText="Gordon";
document.body.appendChild(list);

let list1 = document.querySelector('#List');
console.log(list1)
list1.style.color = "blue";
console.log(list1.firstElementChild);
console.log(list1.tagName);
