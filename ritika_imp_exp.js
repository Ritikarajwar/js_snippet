

// If you have an array of numbers and you want to square each number, map() allows you to do this concisely:
export function do_square(array) {
    let x = array.map(num => num * num)
    // or we acan use from()
    // let y = Array.from(array,num =>num*num)
    return x
}
// let arr =  [1,2,3,4,5]
// console.log(do_square([1,2,3,4,5]))

// Imagine you have a list of user objects, and you need to extract only the email addresses to display them on a website:
export default function show_email(arr) {
    let x = arr.map(obj => obj.email)
    return x
}

// Write a program to Extract Specific Properties from Objects in Arrays
export function show_property(arr, property) {
    let x = arr.map(obj => obj[property])
    return x
}
// const users = [
//     { name: "Aditya", email: "aditya@example.com" },
//     { name: "Ritika", email: "ritika@example.com" },
//     { name: "Amit", email: "amit@example.com" },
//     { name: "Neha", email: "neha@example.in" },
//     { name: "Raj", email: "raj@example.com" }
//   ];
// console.log(show_email(users,'name'))

