export const validateProduct = (req, res, next) => {
  const { name, price, category, stock } = req.body;

  if (!name || !price || !category || !stock) {
    return res.status(400).json({
      success: false,
      message: "All fields are required: name, price, category, stock",
    });
  }

  if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({
      success: false,
      message: "Price must be a positive number",
    });
  }

  if (typeof stock !== "number" || stock < 0) {
    return res.status(400).json({
      success: false,
      message: "Stock must be a non-negative number",
    });
  }

  next();
};

export const validateOrder = (req, res, next) => {
  const { customerName, productId, quantity } = req.body;

  if (!customerName || !productId || !quantity) {
    return res.status(400).json({
      success: false,
      message: "All fields are required: customerName, productId, quantity",
    });
  }

  if (typeof quantity !== "number" || quantity <= 0) {
    return res.status(400).json({
      success: false,
      message: "Quantity must be a positive number",
    });
  }

  next();
};