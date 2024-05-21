// Method of String
document.write("<h2>Methods of String</br>");

let name = "Mirza"
let myName = "Waqar";

document.write(`<h2>String is name : ${myName}`);
document.write(`<h2>String Length : ${myName.length}`);
document.write(`<h2>Index of q : ${myName.indexOf("q")}`);
document.write(`<h2>Index of r : ${myName.lastIndexOf("r")}`);
document.write(`<h2>Slice of String : ${myName.slice(2,3)}`);
document.write(`<h2>String Replace : ${myName.replace(myName,name)}`);
document.write(`<h2>String UpperCase : ${myName.toUpperCase()}`);
document.write(`<h2>String LowerCase : ${myName.toLowerCase()}`);
document.write(`<h2>String Concat : ${myName.concat(" ", name)}`);


// Arrays Methods
document.write("</br></br>")
document.write("<h2>Arrays Methods</br>");

let fruits = ["Apple","Mango","Grapes"];

document.write("<h2>", fruits);