const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const colors = require('colors');
const productRoutes = require('./routes/prouductRoutes.js');
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js');
const userRoutes = require('./routes/userRoutes.js');
const orderRoutes = require('./routes/orderRoutes.js');
dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('API is running!!!');
});

app.use('/api/products', productRoutes);

app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  );
});
