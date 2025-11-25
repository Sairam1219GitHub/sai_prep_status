// let x=10;
// console.log(x);
// console.log("hello jsp");


// let a =null;
// console.log(a);

// var a =10;
// var b =[10,20,30,40];
// console.log(b[0]+b[1]);

// let student={
//     name:'sai',
//     age:25,
//     email:"sairam@gmail.com",
//     phone:9876543210
// }
// console.log(student.email,student.age);





// var a=20;
// var b="hello";
// console.log(typeof a);
// console.log(typeof b);

// pop's up in js
// To display messages and get input from users, js provides theree built-in methods:

// alert 
// conform 
// promt 

// ALERT method is used to display a message to the user in a dialog box with an OK button.
// exp:

// alert("welcome to js");

// CONFIRM method is used to display a message to the user in a dialog box with OK and Cancel buttons. It returns true if the user clicks OK, and false if the user clicks Cancel.

// let user=conform("are you 18+");
// console.log(user);
// confirm("are you 18+");
// let cnf=confirm("are you 18+");
// console.log(cnf);

// exp 2:

// var age=confirm("enter your age");

// if(age){
//     console.log("your are eligible to use this site");
//     }
// else{
//     console.log("your not eligible to use the site");
    
// }


// PROMPT method is used to display a dialog box that prompts the user for input. It returns the input value as a string.
// exp1:

// let age=prompt("enter your age");
// console.log(age);
// if(age>=18){
//     console.log("your are eligible to use this site");
//     }
// else{
//     console.log("your not eligible to use the site");
// }


// exp 2:
// let a =Number(prompt('enter a number'));
// let b=Number(prompt("enter another number"));
// alert('sum of two no:'+ (a+b));


// ARRAY METHODS IN JS



// unshift()/indexOf()/slice()/Pop()/push()/

// POP METHOD IN ARRAY
// pop():- this method is used to remove the last element from an array and returns that removed element
//Exp:
// let arr=[10,20,30,40,50];
// console.log(arr.pop());
// console.log(arr);



// Push() METHOD IN ARRAY
// push():- this method is used to add one or more elements to the end of an array and return the new array length.
//Exp:
// let arr=[10,20,30,40,50];
// console.log(arr);
// arr.push(60);
// console.log(arr.length);

// The return type of push() method is number 
// which is the updated length of array

// UNSHIFT() METHOD IN ARRAY
// unshift():- this method is used to add one or more elements to the beginning of an array and return the new array length.
//Exp:
// let arr=[10,20,30,40,50];
// // arr.unshift(5);
// // console.log(arr.indexOf(30));

// SHIFT() method in array
// SHIFT():- this method is used to remove the first element from an array and returns that removed element.
//Exp:
// let arr=[10,20,30,40,50];
// var ar=arr.shift();
// console.log(ar);
// console.log(arr);

// SLICE METHOD IN ARRAY
// slice():- this method is used to extract a section of an array and returns a new array.
// It does not modify the original array.
// The original array remains unchanged.

// syntax : array.slice(starting index, ending index(not included));
// The ending index is optional.if we dont provide ending index it will slice till the end of the array.
//Exp:

// let arr=[10,20,30,40,50];
// console.log(arr.slice(0,3));
// console.log(arr.slice(2));
// console.log(arr);

//*** */ SPLICE method in array
// this is splice method in array by using this we can addEventListener, remove and replace elements in array 
// syntax :Array.splice(starting index , number of elements to remove, elemets to add);
//Exp:

// ADD elements in array using splice method
// let arr=[10,20,30,40,50];
// arr.splice(2,0,25,27);
// console.log(arr);

// REMOVE elements in array using splice method
// let arr=[10,20,30,40,50];
// console.log(arr);
// arr.splice(2,2);
// console.log(arr);

// REPLACE elements in array using splice method
// let arr=[10,20,30,40,50];
// arr.splice(2,1,33);
// console.log(arr);

// INCLUDE method in array:
// INCLUDE():- This method is used to check wether the element is present in the array or not ,it returns boolean value(true/false).
// let arr=[10,20,30,40,50];
// console.log(arr.includes(10));
// console.log(arr);



//JOIN() and SPLIT() methods in array
// JOIN():- this method is used to convert array into string 
    // let arr=[10,20,30,40,50];
    // let ar=arr.join(' ')
    // console.log(ar);

// SPLIT():- this method is used to convert string to array
    // let arr="sai ram";
    // let ar=arr.split('')
    // console.log(ar);


    // FLAT METOD IN ARRAY 
    // flat():- this method is used to convert multiple array into single array.
    // let arr=[10,20,[30,[1,2,[3,4],5],40,50],60,70,]
    // console.log(arr);
    // console.log(arr.flat(2));



    // find / findindex / filter / map / reduce / foreach / foroff / forin loop in array 
    

    // find():- this method is used to return the first element that satisfies the provided testing function.
    // let arr=[10,20,30,40,50];
    // let sum=arr.find((element)=>element>25);
    // console.log(sum);

    // findindex():- this method is used to return the index of the first element that satisfies the provided testing function.
    // let arr1=[10,20,30,40,50];
    // let result1=arr1.findIndex((element)=>element>25);
    // console.log(result1);

    // filter():- this method is used to create a new array with all elements that pass the test implemented by the provided function.
    // let arr2=[10,20,30,40,50];
    // let result1=arr2.filter((element)=>element>25);
    // console.log(result1);

    // map():- this method is used to create a new array populated with the results of calling a provided function on every element in the calling array.
    // let arr3=[10,20,30,40,50];
    // let result4=arr3.map((element)=>element*5);
    // console.log(result4);

    // reduce():- this method is used to execute a reducer function on each element of the array, resulting in a single output value.
    // The reducer function takes four arguments: accumulator, currentValue, currentIndex, and array.
    // The most commonly used arguments are accumulator and currentValue.
    // The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
    // The currentValue is the current element being processed in the array.
    // Syntax: array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
    // Exp:
    // let arr4=[10,20,30,40,50];
    // let result5=arr4.reduce((accumulator,element)=>accumulator*element,0);
    // console.log(result5);

    // explanation:
    // Here, we are using the reduce() method to sum up all the elements in the arr4 array.
    // The callback function takes two parameters: accumulator and element.
    // The accumulator starts with an initial value of 0 (as provided in the second argument to reduce()).
    // For each element in the array, we add the current element to the accumulator.
    // Finally, the reduce() method returns the total sum of all elements in the array, which is stored in result5 and logged to the console.


    // exp2: without arrow function
    // let arr5=[10,20,30,40,50];
    // let result=arr5.reduce(function(accumulator,element){
    //     return accumulator+element;

    // },3);
    // console.log(result);

    // let a=[1,2,3,4,5,6];
    // let v=a.reduce(function(acc,ele){
    // return acc=acc*ele;
    // },2);
    // console.log(v);
    
    
      
//  FOR EACH METHOD IN ARRAY

    // forEach():- this method is used to execute a provided function once for each array element.
    // let arr6=[10,20,30];
    // arr6.forEach((element,index,array)=>{
    //     console.log('element:',element);
    //     console.log('index:',index);
    //     console.log('array:',array);
    // });


//     let arr6=[10,20,30,40,50];
//   let v1=arr6.forEach((ele)=>{
//     return ele;
//   })
//     console.log(v1);
// console.log('****************');

//     // let arr6=[10,20,30,40,50];
//   let v2=arr6.map((ele)=>{
//     return ele;
//   })
//     console.log(v2); 

// The difference between forEach() and map() is that forEach() does 
// not return a new array, whereas map() returns a new array containing 
// the results of applyining the provided function to each element of the
//  original array.

 
// for...of LOOP IN ARRAY

//for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets,etc..
// it allows up to loop through the values of an iterable object one by one.
// syntax: for(variable of iterable){
//  // code to be executed
// }
// // exp:1
// let arr7=[10,20,30,40,50];
// for(let element of arr7){
//     console.log(element);
// }
// // exp:2
// let student={
//     name:'sai',
//     age:25,
//     address:'hyd',
//     phone:9876543210,
//     email:'hello@gmail.com',
// }
//  for(let value of Object.entries(student)){
//     console.log(value);
//  }
//   for(let value of Object.values(student)){
//     console.log(value);
//  }
//  for(let value of Object.keys(student)){
//     console.log(value);
//  }



// for...in LOOP IN ARRAY

// for...in loop is used to itterate the index values of the given array,objects,string.sets...
//syntax: for(variable in iterable){
// code to be executed
// }
// // exp:1
// let arr=['sairam',2,true,898]
// for(let ar in arr){
//     console.log(ar);
    
// }
// console.log('-------------------');

// // exp:2
// let student={
//     name:'sai',
//     age:25,
//     address:'hyd',
//     phone:9876543210,
//     email:'hello@gmail.com',
// }
//  for(let value in Object.entries(student)){
//     console.log(value);
//  }
//   for(let value in Object.values(student)){
//     console.log(value);
//  }
//  for(let value in Object.keys(student)){
//     console.log(value);
//  }



    // Object methods : keys()/values()/entries()/assign()/freeze()/seal()/getownpropertynames()
    
// let student1={ 
//     name:'sai',
//     age:25,
//     address:'hyd',
//     phone:9876543210,
//     email:'hello@gmail.com',
// }
// UPDATE:- using this method we can update the value
// student1.name='ram'

// ADD:-using this method we can add the value
// student1.hight=167

// DELETE:- by using this method we can delete the value 
// delete student1.age

//Entries  we can get the objects entries .
// console.log(Object.entries(student1));

// keys method:- we can get aboject keys.
// console.log(Object.keys(student1));

//VALUES:- we can get the object values.
// console.log(Object.values(student1));
 



// let student1={ 
//     name:'sai',
//     age:25,
//     address:'hyd',
// }

// SEAL: by using the seal method we can update the values but we cant add the new values
// Object.seal(student1)
// student1.address='jkfgsjdgfldsjgldk'
// student1.hight=123

//FREEZE :- we can't add or update the values 
// Object.freeze(student1)

// student1.address='jkfgsjdgfldsjgldk'
// student1.hight=123

// console.log(student1);

// ajmeer question 

// document.getElementById("alertBtn").onclick = function () {
//     alert("hello");
// };


// TYPE Conversion :- hear by using this method we are converting one data type into another

// Ex 1;

// let a ='hello sai '
// let A='123';
// let B=1219;

// let b=Boolean(a);
// let c=Number(A);
// let d=String(B);

// console.log(typeof b,b); // o/p : boolean true

// console.log(typeof c,c); // o/p : number 123

// console.log(typeof d,d); // o/p : string 1219

//  one more thing hear you can't convert string in ot number but you can convert string numbers like '12345' this in to number 
//if you convert string ('hello ') to num you will get out put as Nan okay 

// example 

// let a='hello' // string 
// let A=Number(a);

// console.log(typeof a, a); // o/p : string hello

// console.log(typeof A, A); //o/p : number NaN

// Boolean:- In boolean true=1 & false=0 when you convert any data type in to boolean it will give the o/p in 1&0 
// example :

// let a=true;
// let b=Number(a);
// let c=String(a);
// let d=BigInt(a);
// let e=Boolean(a);
// console.log(typeof b,b);//number 1
// console.log(typeof c,c);//string true
// console.log(typeof d,d);//bigint 1n
// console.log(typeof e,e);//boolean true


// let A=false;
// let B=Number(A);
// let C=String(A);
// let D=BigInt(A);
// let E=Boolean(A);
// console.log(typeof B,B); //number 0
// console.log(typeof C,C);//string false
// console.log(typeof D,D);//bigint 0n
// console.log(typeof E,E);//boolean false


// conditional statements 

// if :- when the given condition is true then only the code will be exituted if the condition is false code wont exegute 

// let a =2;
// if(a>=18){
//     console.log('elgible to vot');
// }

// o/p  when condition is true :elgible to vot
// o/p : when condition is false : there is nothing in terminal 



    
// if else:- when the condition is fails it will go to the while statement and print while statement 

//     let a =2;
// if(a>=18){
//     console.log('elgible to vot');
// } else{
//     console.log('not elgible to vot');
    
// }

// o/p: not elgible to vot


// else if ladder : when the given i/p need's check the multiple conditions we use else if ladder 

// let day=8; 

// if(day==1){
//     console.log('MON');
// } 
// else if(day==2){
//     console.log('TUE');
// }
// else if(day==3){
//     console.log('WED');   
// }
// else if(day==4){
//     console.log('THU');
// }
// else if(day==5){
//     console.log('FRI');
// }
// else if(day==6){
//     console.log('SAT');
// }
// else if(day==7){
//     console.log('SUN');   
// }
// else console.log('no day');


// switch :- is used to switch the condition wether the given condition is correct or not  

// switch syntax
// var day=9;
// switch(day){
//     case 1 :{  console.log('M'); }
//     break;
//     case 2 :{  console.log('T'); }
//     break;
//     case 3 :{  console.log('W'); }
//     break;
//     case 4 :{  console.log('T'); }
//     break;
//     case 5 :{ console.log('F');  }
//     break;
//     case 6 :{ console.log('S'); }
//     break;
//     case 7 :{ console.log('S'); }
//     default:{console.log('no day');    
// }

// }


// loop statements 

// for(){}
// while 
// do while 

// ***** 
// Functions 

// types of functions

// function 
// named function expression 
// function expression 
// annonimus function 
// callback functions

// function callback(){
//     console.log('This is a callback function');
    
// }
// function another(callback){
//     console.log('This is Higher order function');
    
//     callback();
// }
// another(callback);

// callback-- is a function which passess as argument for another function 
// higher Order -- is a function which returns another function 


// let str='hello';
// let str1=' world';
// console.log(str+str1);
// console.log(str-str1);
// console.log(str.concat(str1));

// let str='hello';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


