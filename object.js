// object in javascript

const objectName={
    name:"ritesh",
    age: 23,
    contactNumber:9667924000,       // object declearationn in javaScript
    address:{
        city: "G Noida"
    }
}



//there are two ways to access data
// .dot operator
// [] square bracket Notification

// objectName.key

// objectName["key"]


console.log(objectName.name)

console.log(objectName["age"])


// obkect destructuring

var obj={
    name: "rit",
    age1:23,
    gender:"male"
}

var{age1,name,gender}=obj
console.log("your name  age and gender is : " + name,age1,gender)

var person={
    name: "rit",
    age1:23,
    gender:"male"
}

for(let x in person){
    console.log(x + ":" + person[x])
}