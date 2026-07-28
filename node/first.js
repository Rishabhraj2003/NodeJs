console.log("My name is Rishabh Raj ");
const fs=require('fs');
fs.writeFile('output.txt',"writing file",(err)=>{ 
    if(err) throw err;
    console.log('Data written to file successfully');
} 
);