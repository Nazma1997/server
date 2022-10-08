const express = require('express');


const connectDb = require('./db');
const dotenv = require('dotenv');
const authRoute = require('./routers/auth');
const useRoute = require('./routers/user');
const productRoute = require('./routers/product');
const cartRoute = require('./routers/cart');
const orderRoute = require('./routers/order');
const cors = require('cors');
const app = express()
const port = 5000;
dotenv.config()
app.use(express.json())

app.use(cors());
/**
 * Routers
 */
  app.use('/api/auth', authRoute);
  app.use('/api/users',useRoute);
  app.use('/api/products',productRoute);
  app.use('/api/carts',cartRoute);
  app.use('/api/orders',orderRoute);



  


/**
 * Connect With MongoDb
 * process.env.MONGO_URL
 */

connectDb('mongodb://localhost:27017/shop')
// connectDb('mongodb+srv://nazma:nazmaist@cluster0.50ussji.mongodb.net/shop?retryWrites=true&w=majority')
   .then(() => {
    console.log('Database is connected')
    app.listen( port, () => {
      console.log('Server is listing on port 5000');
    })
   })
  .catch(error => {
    console.log(error);
  })

