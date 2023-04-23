import express from 'express'

import mongoose from 'mongoose';
const app = express()



mongoose.connect("mongodb://localhost:27017")
const restaurantSchema = new mongoose.Schema({
    address: {
      building: String,
      coord: [Number],
      street: String,
      zipcode: String
    },
    borough: String,
    cuisine: String,
    grades: [{
      date: Object,
      grade: String,
      score: Number
    }],
    name: String,
    restaurant_id: String
  });
  
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
console.clear()

// Mongo Db exercise
// ex 1 - query to display all doc in restaurant
    //     async function ex1(){
    //     let r = await Restaurant.find({})
    //     console.log(r.length)
    //     }
    // ex1()

// ex 2 - query to display field restaurnt_id,name and cusine only
    // async function ex2(){
    //     let r = await Restaurant.find({},{restaurant_id:1,cuisine:1,borough:1})
    //     console.log(r);
    // }
    // ex2()

// ex 3 - query as above but exculde _id filed  display paramter addres.zipcode 
    // async function ex3(){
    //     let r = await Restaurant.find({},{restaurant_id:1,cuisine:1,"address.zipcode":1,borough:1,_id:0})
    //     console.log(r[0]);
    // }
    // ex3()


//ex 5 -query to display all the restro in borough bronx and make it case sensetive 
    // async function ex5(){
    //     let r = await Restaurant.find({borough:"Bronx"})
    //     console.log(r)
    //     // making it case insenstive
    //     let d = await Restaurant.find({borough:new RegExp("bronx","i")})
    //     console.log(d)
    // }
    // ex5()

// ex 6 - query to display 5 restro in borough bronx
    // async function ex6(){
    //         let r = await Restaurant.find({borough:"Bronx"}).limit(5)
    //         console.log(r.length)
            
    //     }
    //     ex6()

// ex 7 - query to display next 5 restro in brouhh bronx i.e after sking first 5
    // async function ex6(){
    //        let r = await Restaurant.find({borough:new RegExp("bronx","i")}).skip(5).limit(5)
    //         console.log(r)

    //     }
    //     ex6()

// ex 8 - Restro who achieved score more than 90
        // async function ex8(){
        //     let r = await Restaurant.find({grades:{$elemMatch:{"score":{$gt:90}}}})
        //     console.log(r)
        // }
        // ex8()
                // explannation
                // $elemMatch is a mongoose method used to query the array based on certain condition 
                // it take a qury object an search the array and will retun doc if any on eobjcet in array
                // satisfies the given condition

                
// ex 9 restro who achieve score more than 80 but less than 100
        // async function ex9(){
        //     let r = await Restaurant.find({grades:{$elemMatch:{score:{$gt:80,$lt:90}}}})
        //     console.log(r[0]);
        // }
        // ex9()


//ex 10 find the restaurants which locate in latitude value less than -95.754168
    // async function ex10(){
    //     let r = await Restaurant.find({"address.coord.0":{$lt: -95.754168}})
    //     console.log(r.length);
    // }
    // ex10()

// ex 11 restaurants that do not prepare any cuisine of 'American' 
// and their grade score more than 70 and latitude less than -65.754168.
        // async function ex11(){
        // let r = await Restaurant.find(
        //     {$and:
        //          [
        //             {"cuisine" : {$not :/^americ/i }},
        //             {"grades.score" : {$gt : 70}},
        //             {"address.coord" : {$lt : -65.754168}}
        //          ]
        //      },{_id:0,cuisine:1,restaurant_id:1}
        //          );
        //          console.log(r)
        // console.log(r.length)

        // let d = await Restaurant.find({
        //     cuisine:{$ne:"American "},
        //     "grades.score":{$gt:70},
        //     "address.coord":{$lt:-65.754168}
        // },{_id:0,cuisine:1,restaurant_id:1})
        // console.log(d.length)
        // console.log(d)
        // }
        // ex11()

//ex12 -restaurants which do not prepare any cuisine of 'American' and 
//achieved a grade point 'A' not belongs to the borough Brooklyn
//     async function ex12(){
//         let r = await Restaurant.find({
//             cuisine:{$not:/^Americ/i},
//             "grades.grade":"A",
//             borough:{$not :/^Brook/i}
//         },{restaurant_id:1,_id:0,cuisine:1,borough:1,"grades.grade":1})
//         console.log(r.length)

//         let d = await Restaurant.find( {
//             "cuisine" : {$ne : "American "},
//             "grades.grade" :"A",
//             "borough": {$ne : "Brooklyn"}
//       } 
//    )  
//     console.log(d.length)
//     }
//     ex12()

// ex 13 find the restaurant Id, name, borough and cuisine for those restaurants 
//which contain 'Wil' as first three letters for its name.
    // async function ex13(){
    //     let r = await Restaurant.find({name:/^wil/i},{restaurant_id:1,_id:0,name:1,cuisine:1})
    //     console.log(r.length)
    //    let a = (JSON.stringify(r));
    //     let d = await Restaurant.find(
    //         {name: /^Wil/},
    //         {restaurant_id:1,_id:0,name:1,cuisine:1}
    //         );
    //     console.log(d.length)
    //     let b = (JSON.stringify(d));
    //     console.log(a===b)
    // }
    // ex13()

//ex15 which contain 'ces' as last three letters for its name.
    // async function ex15(){
    //     let r = await Restaurant.find({name:/ces$/i},{restaurant_id:1,_id:0,name:1,cuisine:1})
    //     console.log(r.length)
        
    //     let d = await Restaurant.find(
    //         {name: /ces$/},
    //         {
    //         "restaurant_id" : 1,
    //         "name":1,"borough":1,
    //         "cuisine" :1
    //         }
    //         );
    //         console.log(d.length)
    // }
    // ex15()
// ex 16 which contain 'Reg' as three letters somewhere in its name
    // async function ex16(){
    // let r = await Restaurant.find({name:/.*Reg.*/},{_id:0,name:1})
    //     console.log(r)
        
        
    // }
    // ex16()

//ex17 restaurants which belong to the borough Bronx and prepared either American or Chinese dish
//   async function ex17(){
//         let r = await Restaurant.find({borough:/bronx/i,cuisine:{$in:[/^Ameri/i,/^chine/i]}},{cuisine:1,_id:0})
//         console.log(r);

//         // these two query are differtn it will match exactly
//         let d = await Restaurant.find(
//             { 
//             "borough": "Bronx" , 
//             $or : [
//             { "cuisine" : "American " },
//             { "cuisine" : "Chinese" }
//             ] 
//             },{cuisine:1,_id:0} 
//             );

//         console.log(d)
//   }
//   ex17()

// ex18-estaurants which belong to the
//  borough Staten Island or Queens or Bronxor Brooklyn
    // async function ex18(){
    //     let r = await Restaurant.find({borough :{$in :["Staten Island","Queens","Bronx", "Brooklyn"]}},{borough:1,_id:0})
    //     console.log(r.length);
    // }
    // ex18()

//ex 19-Restaurants which are not belonging to the borough Staten Island or Queens or Bronxor Brooklyn

    // async function ex19(){
    //     let r = await Restaurant.find({borough :{$not : {$in :["Staten Island","Queens","Bronx", "Brooklyn"]}}},{borough:1,_id:0})
    //     console.log(r.length);
    //     let d = await Restaurant.find({borough :{$nin :["Staten Island","Queens","Bronx", "Brooklyn"]}})
    //     console.log(d.length)
    // }
    // ex19()



app.listen(3000)