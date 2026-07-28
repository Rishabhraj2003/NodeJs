const fs=require('fs');

let a=10;
let b=20;

let sum=a+b;
let product=a*b;

let data=`The sum of ${a} and ${b} is ${sum} and the product of ${a} and ${b} is ${product}`;

fs.writeFile('output.txt',data,(err)=>{ 
    if(err) throw err;
    console.log('Data written to file successfully');
});