//array is Mix of Multipal Data Type
/*  An array in JavaScript is a data structure that allows you to store multiple values 
    in a single variable. Arrays can hold values of any data type, and each value is accessed 
    using an index, with the first index being 0*/


const myArr= [2,4,6,8,74,6]

myArr.push(5) //add value in last
myArr.pop()//remove last value



myArr.unshift(9) //add value at starting 
myArr.shift() //remove firsr elemt from array

console.log(myArr)

console.log(myArr.includes(74))

console.log(myArr.indexOf(74))

const newArr = myArr.join() //convert in string
console.log(newArr)

const myn1 = myArr.slice(1,3)  //Slice not chage original array
console.log(myArr)
console.log(myn1)

const myn2 = myArr.splice(1,3) //it also effect last elecment in this 3rd element also remove and modify the original array also
console.log(myArr)
console.log(myn1)

