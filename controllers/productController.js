export const products = [];
let nextProductId = 1;

export const getProducts = async (req, res) => {
    res.status(200).json({
        success: true,
        data: products,
    })
}

export const createProduct = async (req, res) => {
    const { name, price, category, stock } = req.body

    if (!name || !price || !category || !stock) {
        return res.status(400).json({
            success: false,
            message: "name, price, category and stock are required"
        })
    }
    
    const newProduct = {
        id: nextProductId++,
        name,
        price,
        category,
        stock
    }

    products.push(newProduct)

    res.status(201).json({
        success: true,
        data: newProduct
    })
}


