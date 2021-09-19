//Object Destructing

// let person ={
//     firstName: "Shahadat",
//     lastName: "Hossain",
//     dob: '3-10-2000',
// }

// let fname = person.firstName,
//     lname = person.lastName,
//     dob = person.dob;
//     console.log(fname, lname, dob);

    
// let { firstName:fname, lastName:lname, dob} = person;
// console.log(fname,lname,dob);

// function display(person){
//     let fname = person.firstName,
//     lname = person.lastName,
//     dob = person.dob;

//     console.log(fname, lname,dob);
// }

// display(person);

// let person = {
//     firstName : "Shahadat",
//     lastName : "Hossain",
//     dob : '3-10-2000',
// }

// function display(person){
//     let fname = person.firstName,
//     lname = person.lastName,
//     dob = person.dob;

//     console.log(fname,lname,dob);
// }

// display(person);



let person = {
    firstName : "Shahadat",
    lastName : "Hossain",
    dob : '3-10-2000',
}

// let fname = person.firstName,
// lname = person.lastName,
// dob = person.dob;

// let {firstName : fname, lastName : lname, dob} = person;

function display(person){
    let {firstName : fname, lastName : lname, dob} = person;
    console.log(fname,lname,dob);
}

display(person);

let str = "Shahadat",
newStr = [...str];

// console.log(newStr);

let fruit1 = ["Mango", "Banana", "Lichi"];
let fruit2 = ["Orange", "Grape"];
let fruit3 = ["Jackfruit"];

let allFruit = [...fruit1, ...fruit2, ...fruit3];

console.log(allFruit);
