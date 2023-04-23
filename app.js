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
for( let i=0;i<15;i++){
    console.log()
}
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
// ex 20 -restaurants which achieved a score which is not more than 10.
    //  async function ex20(){
    //     let r = await Restaurant.find({"grades.score":{$not:{$gt:10}}},{_id:0,"grades.score":1})
    //     console.log(r.length)
    //  }
    //  ex20()

//ex 21 restaurants which prepared dish except 'American' and 
// 'Chinees' or restaurant's name begins with letter 'Wil'
    //  async function ex21(){
    //     let r = await Restaurant.find({$or:[
    //         {cuisine:{$nin:["American ","Chinese"]}},
    //         {name:/^wil/i}
    //     ]},{_id:0,cuisine:1,name:1})
    //     console.log(r.length)
    //  }

    //  // or 
    //  let d = await Restaurant.find(
    //     {$or: [
    //       {name: /^Wil/}, 
    //       {"$and": [
    //            {"cuisine" : {$ne :"American "}}, 
    //            {"cuisine" : {$ne :"Chinese"}}
    //        ]}
    //     ]}
    //     ,{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1}
    //     );
    //  console.log(d.length)
    //  ex21()
    
//ex 22-which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z"

// ###################################################not done
    // async function ex22(){
    //     const isoDate = new Date("2014-08-11T00:00:00Z");
    //     let r = await Restaurant.find(
    //         { 
    //             grades: { 
    //                 $elemMatch: { 
    //                     date: isoDate, 
    //                     grade: "A", 
    //                     score: 11 
    //                 } 
    //             } 
    //         },
    //         { _id: 0, restaurant_id: 1, name: 1, grades: 1 }
    //     );
    //     console.log(r)
    // }
    // ex22()

//ex 23 restaurants where 2nd element of coord array contains a 
// value which is more than 42 and upto 52
    // async function ex23(){
    //     let r= await Restaurant.find({"address.coord.1":{$gt:42,$lte:52}},{_id:0,})
    //     console.log(r.length)
    // }
    // ex23()


// ex 25 arrange the name of the restaurants in ascending order along with all the columns
    // async function ex25(){
    //     let r= await Restaurant.find({}).sort({name:1})
    //     let d = await Restaurant.find().sort({"name":-1})
    //     console.log(r.length)
    // }
    // ex25()

//ex 27 -arranged the name of the cuisine in ascending order and for that same 
// cuisine borough should be in descending order
    // async function ex27(){
    //     let r= await Restaurant.find({},{_id:0,cuisine:1,borough:1}).sort({cuisine:1,borough:-1}).limit(100)
       
    //     console.log(r)
    // }
    // ex27()


//ex 28  whether all the addresses contains the street or not.
    // async function ex28(){
    //     let r = await Restaurant.find({"address.street" : {$exists:true}})
    //     console.log(r.length)
    // }
    // ex28()

//ex 29 where the coord field value is Double
    // async function ex29(){
    //     let r = await Restaurant.find({"address.coord":{$size:2}})
    //     console.log(r.length)
    // }
    // ex29()

//ex 30 Restaurants which returns 0 as a remainder after dividing the score by 7
    // async function ex30(){
    //     let r = await Restaurant.find({})
    //     console.log(r.length)
    // }
    // ex30()

//ex 31 restaurants which contains 'mon' as three letters somewhere in its name.
    // async function ex31(){
    //     let r = await Restaurant.find({name:/.*mon.*/i},{name:1,_id:0})
    //     console.log(r)
    // }
    // ex31()

// ex 32 restaurants which contain 'Mad' as first three letters of its name
    // async function ex32(){
    //     let r = await Restaurant.find({name:/^MaD/i},{name:1,_id:0})
    //     console.log(r)
    // }
    // ex32()

//ex 33 restaurants that have at least one grade with a score of less than 5
    // async function ex33(){
    //     let r = await Restaurant.find({"grades.score":{$lt:5}},{_id:0,"grades.score":1})
    //     console.log(r.toString())
    // }
    // ex33()
// ex 34 restaurants that have all grade with a score of less than 5
    // async function ex34(){
    //     let r = await Restaurant.find({"grades.score":{$not :{$gte:5}}},{_id:0,"grades.score":1})
    //     let d = await Restaurant.find({ grades: { $not: { $elemMatch: { score: { $gte: 5 } } } } }, { name: 1, _id: 0 });
    //     console.log(r.length,d.length)
    // }
    // ex34()

// ex 35  restaurants that have all grades with a score greater than 5. 
    // async function ex35(){
    //    //  d and e are same they does the query for nay one condition
    //     let d = await Restaurant.find({"grades.score":{$gt:5}},{_id:0,"grades.score":1})
    //     let e = await Restaurant.find({"grades":{$elemMatch:{score:{$gt:5}}}})
    //     console.log(d.length)
    //     console.log(e.length)

    //     // solution for this question is this one 
    //     // always rememebr elemMatch taken in an object
    //     let f = await Restaurant.find({"grades":{$not:{$elemMatch:{score:{$gt:5}}}}})
    //     console.log(f.length)
        
       
    // }
    // ex35()

//ex 36 find the average score for each restaurant

    //    async function ex36(){
    //     let  r = await Restaurant.aggregate([
    //         {$unwind:"$grades"},
    //         {$group: {
    //           _id:"$name",
    //           avgScore:{$avg:"$grades.score"}
    //         }}
    //     ])
    //     console.log(r);
    //    }
    //    ex36()

//ex 37 find the highest score for each restaurant.

    // async function ex37(){
    //     let r = await Restaurant.aggregate([
    //         {$unwind:"$grades"},
    //         {$group:{
    //             _id:"$name",
    //             highestScore:{
    //                 $max:"$grades.score"
    //             }
    //         }}
    //     ])
    //     console.log(r);
    // }
    // ex37()

//ex 38 -find the lowest score for each restaurant
    //  async function ex38(){
    //     let r = await Restaurant.aggregate([
    //         {$unwind:"$grades"},
    //         {$group:{
    //             _id:"$name",
    //             minScore:{
    //                 $min:"$grades.score"
    //             }
    //         }}
    //     ])
    //     console.log(r)
    //  }
    //  ex38()

// ex 39  find the count of restaurants in each borough
    // async function ex39(){
    //     let r = await Restaurant.aggregate([
    //         {$group:{
    //             _id:"$borough",
    //             count:{
    //                 $sum:1
    //             }
    //         }}
    //     ])
    //     console.log(r)
    // }
    // ex39()

// ex 40 find the count of restaurants for each cuisine

    // async function ex40(){
    //     let r = await Restaurant.aggregate([
    //         {$group:{
    //             _id:"$cuisine",
    //             resttoThatmakesit:{
    //                 $sum:1
    //             }

    //         }}
    //     ])
    //     console.log(r)
    // }

    // ex40()

//ex 41 find the count of restaurants for each cuisine and borough
    //  async function ex41(){
    //     let r = await Restaurant.aggregate([
    //         {$group:{
    //             _id:{
    //                 cuisine:"$cuisine",
    //                 borough:"$borough"
    //             },
    //             count:{
    //                 $sum :1
    //             }
    //         }}
    //     ])
    //     console.log(r)
    //  }
    //  ex41()

//ex 42 Count of restaurants that received a grade of 'A' for each cuisine
    // async function ex42(){
    //     let r = await Restaurant.aggregate([
    //         {$unwind:"$grades"},
    //         {$match:{
    //             "grades.grade":"A"
    //         }},
    //         {$group:{
    //             _id:"$cuisine",
    //             count:{
    //                 $sum:1
    //             }
    //         }}
    //     ])
    //     console.log(r)
    // }
    // ex42()

//ex 43 count of restaurants that received a grade of 'A' for each borough
    // async function ex43(){
    //     let r = await Restaurant.aggregate([
    //         {$unwind:"$grades"},
    //         {$match:{"grades.grade":"A"}},
    //         {$group:{
    //             _id:"$borough",
    //             count:{
    //                 $sum:1
    //             }
    //         }}
    //     ])
    //     console.log(r)
    // }
    // ex43()

// ex 44 count of restaurants that received a grade of 'A' for each cuisine and borough.
    //  async function ex44(){
    //     let  r= await Restaurant.aggregate([
    //         {$unwind:"$grades"},
    //         {$match:{
    //             "grades.grade":"A"
    //         }},
    //         {$group:{
    //             _id:{
    //                 cuisine:"$cuisine",
    //                 borough:"$borough"
    //             },
    //             count:{
    //                 $sum:1
    //             }
    //         }}
    //     ])
    //     console.log(r.length)

    //     let d= await Restaurant.aggregate([
    //         {
    //           $match: { "grades.grade": "A" }
    //         },
    //         {
    //           $group: {
    //             _id: { cuisine: "$cuisine", borough: "$borough" },
    //       count: { $sum: 1 }
    //           }
    //         },
            
    //       ]);
    //       console.log(d.length)
    //  }
    //  ex44()

// ex 45 find the average score for each cuisine.
    // async function ex45(){
    //     let r = await Restaurant.aggregate([
    //         {
    //             $unwind: "$grades"
    //           },
    //         {$group:{
    //             _id:"$cuisine",
    //             avgScore:{
    //                 $avg:"$grades.score"
    //             }
    //         }}
    //     ])
    //     console.log(r)

      
    // }
    // ex45()
 
//ex 46 find the restaurants achieved highest average score

    // async function ex46(){
    //     let r = await Restaurant.aggregate([
    //         {$unwind:"$grades"},
    //         {$group:{
    //             _id:"$restaurant_id",
    //             AvgScore:{
    //                 $avg:"$grades.score"
    //             }
    //         }},
    //         {$sort:{
    //             AvgScore:-1
    //         }},
    //         {$limit:1},
            
    //     ])
    //     console.log(r)
    // }
    // ex46()

// ex 47 find all the restaurants with the highest number of "A" grades.
    // async function ex47(){
    //     let r = await Restaurant.aggregate([
    //         {$unwind:"$grades"},
    //         {$match:{"grades.grade":"A"}},
    //         {$group:{
    //             _id:"$restaurant_id",
    //             count:{
    //                 $sum:1
    //             }
    //         }},
    //         {$sort:{
    //             count:-1
    //         }},
    //         {$group:{
    //             _id:"$count",
    //             totalRestro:{
    //                 $sum:1
    //             }
    //         }},
    //         {$sort:{
    //             _id:-1
    //         }}

    //     ])
    //     console.log(r)
    // }
    // ex47()


// ex 48 restaurant that has the highest average score for thecuisine "Turkish".
    // async function ex48(){
    //     let r = await Restaurant.aggregate([
    //         {$match:{
    //             "cuisine":"Turkish"
    //         }},
    //         {$unwind:"$grades"},
    //         {$group:{
    //             _id:"$name",
    //             AvgScore:{
    //                 $avg:"$grades.score"
    //             }
    //         }},
    //         {$sort:{
    //             AvgScore:-1
    //         }}
    //     ])
    //     console.log(r)
    // }
    // ex48()



// ex 49 restaurants that achieved the highest total score

    // async function ex49(){
    //     let r = await Restaurant.aggregate([
    //         {$unwind:"$grades"},
    //         {$group:{
    //             _id:"$name",
    //             TotalScore:{
    //                 $sum : "$grades.score"
    //             }
    //         }},
    //         {$sort:{
    //             TotalScore:-1
    //         }},
    //         {$group:{
    //             _id:"$TotalScore",
    //             // count:{
    //             //     $sum:1
    //             // }
    //             restro :{$push :"$_id"}
    //         }},
    //         {$sort:{
    //             _id:-1
    //         }},
    //         {$limit:1}
            
    //     ])
    //     console.log(r);
    // }
    // ex49()


// ex 50 find the top 5 restaurants with the highest average score 
// for each cuisine type, along with their average scores.

async function ex50(){
    
}
ex50()




app.listen(3000)