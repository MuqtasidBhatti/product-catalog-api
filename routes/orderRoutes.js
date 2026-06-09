import express from 'express'
import { createOrder, getOrders } from '../controllers/orderController.js';
import { validateOrder } from '../middleware/validate.js';

export const router = express.Router()

router.get('/', getOrders)
router.post('/', validateOrder, createOrder);

