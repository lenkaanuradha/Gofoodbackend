const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());
const port = 5000
const mongoDB = require('./db');
mongoDB();
 
app.use(express.json());
app.use('/api',require('./Routes/DisplayData'))
app.use('/api',require('./Routes/CreatUser'))
app.use('/api',require('./Routes/OrderData'))
app.use('/api',require('./Routes/MyOrderData'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})