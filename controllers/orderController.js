const orders = [];
let nextOrderId = 1;


export const getOrders = async (req, res) => {
    res.status(200).json({
        success: true,
        data: orders,
    });
}

export const createOrder = (req, res) => {
  const { customerName, productId, quantity } = req.body;

  if (!customerName || !productId || !quantity) {
    return res.status(400).json({
      success: false,
      message: "customerName, productId and quantity are required",
    });
  }

  const newOrder = {
    id: nextOrderId++,
    customerName,
    productId,
    quantity,
  };

  orders.push(newOrder);

  res.status(201).json({
    success: true,
    data: newOrder,
  });
};