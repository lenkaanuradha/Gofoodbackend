const express = require('express')
const router = express.Router()
const Order = require('../models/Orders')
router.post('/myorder', async (req,res) =>{
 
    
    try {
       
        let mydata = await Order.findOne({'email': req.body.email})
        console.log(mydata)
        res.json({orderData:mydata})
    } catch (error) {
       console.log(error.message)
        res.status(500).send(error.message)
    }


})
module.exports = router