# Product Catalog API

A simple REST API built with Node.js and Express.js to manage products and orders.

## Tech Stack

- Node.js
- Express.js
- ES6 Modules

## Project Structure

├── controllers/
│   ├── productController.js
│   └── orderController.js
├── middleware/
│   └── validate.js
├── routes/
│   ├── productRoutes.js
│   └── orderRoutes.js
├── .env
└── server.js

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Get all products |
| POST | /api/products | Create a new product |
| GET | /api/orders | Get all orders |
| POST | /api/orders | Place a new order |

## Getting Started

1. Clone the repo

```bash
   git clone https://github.com/MuqtasidBhatti/product-catalog-api.git
```

2. Install dependencies
   
```bash
   npm install
```

3. Create a .env file in the root
   PORT=3000

4. Run the server

```bash
   npm run dev
```

## Sample Request

POST /api/products
{
  "name": "Water Bottle",
  "price": 399,
  "category": "Sports & Outdoors",
  "stock": 15
}

Response
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Water Bottle",
    "price": 399,
    "category": "Sports & Outdoors",
    "stock": 15
  }
}

POST /api/orders
{
  "customerName": "Ali Raza",
  "productId": 1,
  "quantity": 2
}

Response
{
  "success": true,
  "data": {
    "id": 1,
    "customerName": "Ali Raza",
    "productId": 1,
    "quantity": 2
  }
}