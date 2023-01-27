//Functions


/* Generally speaking a fuction is a block of code that implement for a specific task 
function is reusable code its return a value or not 
function make code compact or simplify program */

/* function not same thing of all languages it can be different -2 
things to all specific language
*/

/* function is nothing but it is block of code 
it take arguments and parameter 
first we declare the function and after that called the function then pointer goes to particular definition of function body and perform task

inside the function which are declared by us thats called function statement
 it can be returnable or not depending on need 
 */

 /* there are various type of function on different context
 type of function in js 
 1. anonymous function
 2. arrow function 
 3. common function 
 4. expressional function 

 */
//   we discuss all type of function and regarding information 
/* when we declare the function that time pass parameter 
when we call that time pass argument 
*/


// 1. normal function 

    //     function normalFunction(num){
    //             return Math.floor(Math.random()*num+1)
    //     }

    //     console.log(normalFunction(6))

    //     var number = Math.floor(Math.random() * 9000000000) + 1000000000;
    // console.log(number);

    function random(len) {
        let result = Math.floor(Math.random() * Math.pow(10, len));
      
        return (result.toString().length < len) ? random(len) : result;
      }
      
      console.log(random(6));

    //   anonymous function i can be assigned or pass as parameter

var obj ={
    care:function(){
        console.log("bro take care ")
    }
}

obj.care()
 
 const fun =function(){
    return `too much too fun`
 }

 console.log(fun())

//  arraow function can not be hoisted