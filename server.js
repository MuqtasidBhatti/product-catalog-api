import express from 'express'
import { router as productRouter } from './routes/productRoutes.js';
import { router as orderRouter } from './routes/orderRoutes.js';

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.listen(PORT,() => {
    console.log(`Server is running on localhost:${PORT}`)
})