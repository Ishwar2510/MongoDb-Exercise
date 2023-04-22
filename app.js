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
    async function ex2(){
        let r = await Restaurant.find({},{restaurant_id:1,cuisine:1,borough:1})
        console.log(r);
    }
    ex2()





app.listen(3000)