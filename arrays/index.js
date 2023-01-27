// arrays in javascript it is an abstract datatype 
// in the js it can store multiple type of data type 
// it have own properties and functionalities 

// it is non primitive data type 
// it store the values as an idex number its indexing start by zero
// if you copy an array its provide an shallow copy 
// of an arrray not deep copy

// there are many ways to create an array 

// var arr =[]; // arrAY LITRALLY

// var arra = new Array(size).fill(value)

// 'fruits2' array created using the Array() constructor.
// const fruits2 = new Array("Apple", "Banana");
// console.log(fruits2.length);
// 2

// 'fruits3' array created using String.prototype.split().
// const fruits3 = "Apple, Banana".split(", ");
// console.log(fruits3.length);
// 2
// ACCESSING    an  traversing an arrays it happen by index movement
// arrays immutable non primitive data type 
//  we can delete and append and add an element in array


// array methods 
// map ()
// this method creates a new array with the results of a providedfunction on every elememt in this arr 
// const arr =[1,2,3,4,4,5,6];

// const maped =arr.map((el,index,array)=>{
//     return el+30
// }
// )
// console.log(maped)

const arr = [4,5,6,7,8];

const filtered =arr.filter((el,index,arr)=>{
    if(el%2==0){
        return el
    }
})

console.log(filtered)