const mahindra = ["3xo","xuv700","Thar"]
const tata = ["nexon","Altroz","Punch"]

mahindra.push(...tata) //ading in existing array
const newarr=mahindra.concat(tata) //returns new array
console.log(mahindra)

const anotherArry = [1,2,[3,4],5,6,7,[8,9,[10,11]]]
const anotherArry1= anotherArry.flat(3) //return new array with flete inside arrays it takes depth of array as paramether
console.log(anotherArry1)

console.log(Array.isArray(anotherArry))
console.log(Array.isArray("anotherArry"))
console.log(Array.from("anotherArry"))
console.log(Array.from({name:"daksh"})) ///return empty array because not specify array from keys or from values
const score1=500
const score2=100
const score3="300"
console.log(Array.of(score1,score2,score3))