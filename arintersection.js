// code to print intersection of two arrays
let a=[1,2,3,4,5,6];
let b=[4,5,3,7,9];
let c= a.filter((val)=> b.includes(val));
console.log(c);