


// //Premetive Deta types
// it is call by value
// means its value will assign 

// 7 types  String,Number,Boolean,null,undefined,Symbol

// //refrence (non premetive)
// //means its refrence will store
// Array,object ,function

const score =100
const scorevalue=100.2


let temp =null
//Symbole is usable in react where components are uniquely identified
const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(id==anotherId) //false

const bigNumber = 54464646464646464646464654654n  // autometically bigint we use n in last


//Non premetive

const arr = ["dog ","cat" ,"mouse"]

const myfunction = ()=>{}  // funtion is treat as variable

console.log(typeof myfunction)  //funtion object basically (object)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (premetive)   ,Heap(Non-premetive)
// stack give copy of value  stack store values  

// Heap give refrence of value Heap store refrences for objects if we change value of assined value it chage in object


