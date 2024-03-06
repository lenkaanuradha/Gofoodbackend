const mongoose = require('mongoose');
const mongoURI='mongodb+srv://foody:123@merncluster.hrloelm.mongodb.net/gofoodmern?retryWrites=true&w=majority';
const mongoDB = async() =>{
  mongoose.set('strictQuery', false);
    await mongoose.connect(mongoURI,{ useNewUrlParser: true},async(err,result)=>{
        if(err)
            console.log("___",err);
        
        else{
          console.log("connection has been made between backend server and mongodb database");
          const fetched_data= await mongoose.connection.db.collection("food_items");
          fetched_data.find({}).toArray(async function(err,data){
            const foodCategory= await mongoose.connection.db.collection("food_category")
            foodCategory.find({}).toArray(async function(err,catData){
              if(err)
                console.log(err);
                else
                {
                  global.food_items = data;
                  global.foodCategory=catData;
                  
                }
            })
            
            

          })

          

        }
    });
}
module.exports = mongoDB;