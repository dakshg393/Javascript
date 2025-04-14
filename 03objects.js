/*if object is made from constructor it is ""Singletone"  Eg:-object.create()
if from object literals its is "literal" Eg:- const obj ={} */

const mySym = Symbol("key1")

const User = {
    // System process Keys as String a -> "a"
    name:"Daksh",
    "full name":"daksh gupta",
    [mySym]:"mykey1",
    age:18,
    location:"Indore",
    email:"dakshg@gmail.com",
    isLoggedIn:false,
    lastLoggins:["monday","Sunday"]
}

console.log(User.email)
console.log(User["full name"]) //It is good prectice because full  name is not  accessible by name
console.log(typeof User[mySym]) 

// Object.freeze(User)      // Cannot modify the object

User.email = "dakshgupta@gmail.com"
console.log(User.email)
console.log(User)

User.greeting = function(){
    console.log(`Hello ${this.name}`) //"this" is refrence of object that we are working with
    //it also result console "undefine" because function expect return in this case we did not give return so it console undefine
}

console.log(User.greeting())


