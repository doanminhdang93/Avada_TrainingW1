const Router = require('koa-router');
const {
  handleAddProduct,
  handleDeleteProduct,
  handleGetProducts,
  handleGetProduct,
  handleUpdateProduct,
} = require("../handlers/product/productHandlers");
const { productValidation } = require("../middleware/productValidation");

// Prefix all routes with /products
const productRouter = new Router({
  prefix: "/api",
});

//Router will go here
productRouter.get("/product/:id", handleGetProduct);
productRouter.get("/products", handleGetProducts);
productRouter.post("/product", productValidation, handleAddProduct);
productRouter.put("/product/:id", productValidation, handleUpdateProduct);
productRouter.delete("/product/:id", handleDeleteProduct);

module.exports = productRouter;
