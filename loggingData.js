// This section is used ti onsert data into the database 
// let parsedData =[];
//import fs, { readFileSync } from 'fs'
// fs.readFile('./restaurants.json',"utf8",(err,data)=>{
//     let dataArray  = data.split("\n")     // to split data line by line
//     dataArray.forEach((e)=>{
//         try{
//             parsedData.push(JSON.parse(e))    // as data are in json format parse it
//         }catch (err){
//             console.log("some error")
//         }
       
//     })
//     try{
//         parsedData.forEach((e)=>{
//             let rest = new Restaurant(e)    // creting new instance and saving it
//             rest.save()
//         })

//     }catch{
//         console.log("some error while dat entery")
//     }
    
    

// })