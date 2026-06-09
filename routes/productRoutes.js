import express from 'express'
import { createProduct, getProducts } from '../controllers/productController.js'

export const router = express.Router()

router.get('/', getProducts)
router.post('/', createProduct)