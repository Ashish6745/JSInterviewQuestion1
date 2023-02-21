// <Q1>..
//Hoisting 
//x = 5;
//var x;
//console.log(x) // 5


// Q2...
// Arrow function vs Normal function
// const person{ name: 'duke', age:34, hello, say}
// normal function                               Arrow function
// function hello(){                          const say = () => {
//    return this.name                        return this.name
//}                                              }
// console.log(person.hello()) --> john
// console.log(person.say()) --> error     'this' keyword doesn't work with arrow function


//Q3....
// Spread operator(...)
  //.........Array.............
// example :-    const num = [1,2,3,4]
//      console.log(...num) // 1,2,3
// example 2:-    const num1 =[1,2] const num2 = [3,4,5]
//              const c =[...num1, ...num2]
//          console.log(c)                // [1,2,3,4,5]

// ...........Object...............
// const object1 = {x:1, y: 2}
// console.log(object1) //{x:1, y:2}



//Q4....
// Object-shortHand..
// const name = 'john';
// const age = 34;
// const person = {name, age};
// person = {name:'john', age:34}




//Q5...
// Sorting in JS...
// for numbers in array

// const arr = [1,2,3,4,5]
// arr.sort((a,b) => {
// return a - b;   // it will sort array in ascending order [1,2,3,4,5]
//})

// arr.sort((a,b)=>{
// return b - a; // it will sort array in descending order [5,4,3,2,1]
//})

// for strings in array..
// const arr = ['asa','aaa','acb' ]
//  arr.sort((a,b)=>{   return ((a>b) - (a<b))  // ['aaa', 'acb', 'asa']
// })

// const arr = ['asa','aaa','acb' ]
//  arr.sort((a,b)=>{   return ((a<b) - (a>b)) // ['asa', 'acb', 'aaa']
// })





//Q6 Slice in Array....
// const arr = [1,2,3,4,5] // indexing starts from '0'
// arr.slice(0,2) // 0 is starting index ,2 is the ending index but slice will implement [ending index - 1]
// 1,2
// arr.slice(0,4)
// 1,2,3


// Note:- No modification will be done in Array.



//Q7 Splice in Array..

// const arr = [1,2,3,4,5] 
// arr.splice(0,2) // 0 is the starting index and 2 is the no of element to remove
// 1, 2
// arr.splice(0,4)
// 1,2,3,4


// Note:- Modification will be done in Array.





//Q8 Promise in JS...
// Promise works when more than one callback or callback hell comes
// promise has 3 states .. 1. pending 2. success (if there is an success so callback in .then() will implement) 3.reject/failure [callback in .catch() will implement]

//Q9  convert Array to object...


// const arr ['a','b','c','d'];
// let obj = arr.reduce((acc, it)=> ({...acc, [it]:it})),{} // acc->accumalator , iterator-> iterator
// {a:'a',b:'b',c:'c'}






//Q10 FlatMap() --> when flat combines with map then it becomes flatMap
// const Arr = [[1,2,[4]],[3,4]] --> nested array
// console.log(Arr.flatMap(1)) --> if 1 is given in flatmap it will remove one layer from nested array ..[1,2,[4],3,4]
// console.log(Arr.flatMap(2)) --> [1,2,4,3,4]



// Q11 . Duplicates in Array
// const arr = [1,2,3,2,1]

// first method: using set 

// let s = new Set(arr) // created an new set
// console.log(s) // {1,2,3}

// but if we want to calculate no of duplicate in array
// use hashMap
// const HashMap = {}; // created a new hashmap
// arr.forEach(iterator =>{
// if(iterator in HashMap){
//   HashMap[iterator]++; // element is already present
//}
// else{
// HashMap[iterator] =1; // element coming for first time
//}
//)}
//{1:'2 times',2:'2 times', 3:'1 time'}



//Q12  converting string to array using Array.from()

// Array.from('hello) => ['h','e','l','l',o']
// from set to array..
// let s = new Set([1,2])
// console.log(s)
// Array.from(s) ['1','2']

// const arr = [1,2,3,4]
// Array.from(arr, iterator => iterator * 2)
// [2,4,6,8,10]




// keys , values and enteries
// const person = {name:'john',age:34}
// console.log(object.keys(person)) // {name, age}
// console.log(object.values(person)) // {'john',34}
// console.log(object.entries(person)) // {name:'john', age:34}




// length in Array
// const arr = [1,2,3,4,5]
// console.log(arr.length ) => 5
// set arr.length = 6 // [1,2,3,4,5,emptyelement ]
// set arr.length = 3 [1,2,3]
//set arr.length = 0  [empty array]



//Generator function
// having * with function name and in generator values are yield not return and there can be more than one yield 
// function *generator() {
// yield 1;
// yield 2;

//}
// const g = generator();
 //console.log([...g])
 // console.log(g.next()) // value 1
 // console.log(g.next()) // value 2
 // console.log(g.next()) // undefined because there are only 2 values







 


















