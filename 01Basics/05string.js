const name = "daksh"

console.log(`My name is ${name}`) //string interpolation

console.log("Hello"+"daksh") //string concationation

const gamename = new String("hello-daksh")
console.log(gamename[0]) //h

console.log(gamename.__proto__)

console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.toLowerCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf('a'))

const newString = gamename.substring(0,4)
console.log(newString)
//The Diffrence in Sclice and SubString is Slice except negative value while Substring not if we give it start from 0
const anotherString = gamename.slice(-8,7)
console.log(anotherString)

const newStringOne = "          hello         l"

console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://dakshgupta.vercel/daksh%20gupta"
console.log(url.replace("%20",'-'))

console.log(url.includes('daksh'))

console.log(url.split('/',5))