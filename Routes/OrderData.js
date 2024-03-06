const express = require('express')
const router = express.Router();
const Order = require('../models/Orders');


router.post("/orderData", async(req,res)=>{
    let data = req.body.order_data
    let eId = await Order.findOne({'email':req.body.email})
   
    if(eId === null){
    try {
       
        await Order.create({
            email: req.body.email,
            order_data:[data],
            order_date: new Date()
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
}
else{
  try {
    await Order.findOneAndUpdate({ email:req.body.email },
        { $push:{order_data: data } }).then(() => {
            res.json({ success:true })
        })
      
       
    
  } catch (error) {
   
    
    res.status(500).send(error.message)
    
  }
}
})
module.exports = router