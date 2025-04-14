const score = 404

console.log(score)

const balance = new Number(100.00332)

console.log(balance)
console.log(balance.toString())

console.log(balance.toFixed(2))

const otherNumber =1321.282
console.log(otherNumber.toPrecision(5))

const hundred = 10000000000000
console.log(hundred.toLocaleString())
console.log(hundred.toLocaleString('en-IN'))

//******************************************************************************************************* */

console.log(Math)

console.log(Math.abs(-4)) //absolute value converting in positive 
console.log(Math.round(123.4))
console.log(Math.ceil(4.2)) // takes nearest top value
console.log(Math.floor(4.2)) //it takes smallest value
console.log(Math.sqrt(4))
console.log(Math.min('1','2','3'))
console.log(Math.max('1','2','3'))

console.log((Math.random()*10)+1)

const min =10
const max =13

const value = Math.floor(Math.random() * (max-min+1)) +min
console.log(value)

