/*  Anna Sullivan
    sullivan_a05a.js
    INFO2124WW
    Thoendel
    1/16/2020
*/

{

let todoArray = ["Take out trash", "Clean dishes", "Mop floors", "Brush dog"]; /* Declared ToDo List Array literal syntax and populated with 4 items*/

let groceryListArray = new Array("Cheese", "Milk", "Bread", "Beans", "Tomatos", "Turkey"); /* Declared Grocery List Array using constructor function and populated with 6 items*/

console.log(todoArray); /*Write out the ToDo List*/
console.log(""); /*Write out empty line*/

todoArray.unshift("Read instructions"); /*Add fifth value to beginning of the ToDo List Array using unshift() method*/
console.log(todoArray.join(", ")); /*Write out the ToDo List using join() method adding a comma and space*/
console.log(""); /*Write out empty line*/

todoArray.reverse(); /*Reverse the ToDo List using the reverse() method*/
todoArray.sort(); /*Sort the ToDo List using the sort() method*/
console.log(todoArray.join(", ")); /*Write out the ToDo List using join() method adding a comma and space*/
console.log(""); /*Write out empty line*/

console.log(todoArray.includes("x")); /*Determine if list contains letter "x" using includes() method*/
console.log(""); /*Write out empty line*/

console.log(groceryListArray.join(", ")); /*Write out the Grocery List using join() method adding a comma and space*/
console.log(""); /*Write out empty line*/

let firstGrocery = groceryListArray.shift(); /*remove the first item from list using shift() method */
console.log(groceryListArray.join(", ")); /*Write out the Grocery List using join() method adding a comma and space*/
console.log(""); /*Write out empty line*/

groceryListArray.splice(2, 0, "Cake", "Juice"); /* Adds two items to middle of list using splice() method */
console.log(groceryListArray.join(", ")); /*Write out the Grocery List using join() method adding a comma and space*/
}
