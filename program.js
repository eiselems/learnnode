var fs = require('fs');
//read file synchronously
//var fileContent = fs.readFileSync(process.argv[2]).toString();

//read file asynchronously
//var fileContent = fs.readFile(process.argv[2], "utf8", function(err, data){
//    var size = data.split("\n").length - 1;
//    console.log(size);    
//})


//read dir
//var mymodule = require("./moduletest.js");
//mymodule(process.argv[2], process.argv[3], function(err, data){
//    for(var i=0; i<data.length; i++){
//        console.log(data[i]);
//    }
//});

//simple asnyc http
// http = require("http");

// http.get(process.argv[2], function(response){
//     response.setEncoding("utf8");
//     response.on("data", function(data){
//         console.log(data);
//     })
// });

//collect all data at once using bl
// var bl = require('bl')  
// http = require("http");

// http.get(process.argv[2], function(response){
//     response.setEncoding("utf8");
//     response.pipe(bl(function (err, data) {
//         console.log(data.length);
//         console.log(data.toString("utf8"));
//     }))  

// });


 var http = require('http');
 var bl = require('bl');
 var results = [];
 var count = 0;

 function printResults() {
     for (var i = 0; i < 3; i++)
         console.log(results[i]);
 }

 function httpGet(index) {
     http.get(process.argv[2 + index], function(response) {
         response.pipe(bl(function(err, data) {
             if (err)
                 return console.error(err);

             results[index] = data.toString();
             count++;

             if (count == 3)
                 printResults();
         }));
     });
 }

 for (var i = 0; i < 3; i++)
     httpGet(i);
 