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


let fruits = ["Apple","Mango"];
let num = [1,2,3,4]
document.write(`<h2> Print Array: ${fruits}`);

fruits.push("Grapes");
document.write(`<h2> Push (Grapes) in Array: ${fruits.join(", ")}`);

num.pop();
document.write(`<h2> Pop Method in Array: ${num}`);

let fruit = ["Apple","Mango","Orange"];
fruit.fill("Dates");
document.write(`<h2> Fill Method in Array: ${fruit}`);

let fruitItems = ["Apple","Mango","Orange"];
fruitItems.shift();
document.write(`<h2> Shift Method in Array: ${fruitItems}`);

