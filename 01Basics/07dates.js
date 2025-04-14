const d=new Date()
console.log(d)
console.log(d.toString())
console.log(d.toDateString())
console.log(d.toJSON())
console.log(d.getTime())

console.log(Date.now())


console.log(Math.floor(Date.now()/1000))

const newDate=new Date()

console.log(newDate.toLocaleString('default',{
    weekday:'long',
    day:'2-digit',
  
}))

const myDate=new Date("01-11-2023")
console.log(myDate)
console.log(myDate.toLocaleString())