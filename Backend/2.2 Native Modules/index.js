const fs=require("fs")

// fs.writeFile("myfile","hello Node.js",function(err){
//     if(err) throw err;
//     console.log("File Saved Successfully.");
// })



fs.readFile("message.txt","utf8",function(err,data){
    if(err) throw err;
    console.log(data);
})