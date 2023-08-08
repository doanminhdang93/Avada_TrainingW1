const {
    getProduct,
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
  } = require("../../database/products/productRepository");
  
  async function handleGetProduct(ctx) {
    try {
      const { id } = ctx.params;
      const queryParam = ctx.query;
      const currentProduct = getProduct(id, queryParam);
      if (currentProduct) {
        return (ctx.body = {
          success: true,
          data: currentProduct,
        });
      }
      ctx.status = 404;
      return (ctx.body = {
        success: false,
        message: `Product Not Found with id: ${id}`,
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error.message,
      });
    }
  }
  
  async function handleGetProducts(ctx) {
    try {
      const queryParam = ctx.query;
      const allProducts = getProducts(queryParam);
      return (ctx.body = {
        success: true,
        data: allProducts,
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        data: [],
        error: error.message,
      });
    }
  }
  
  async function handleAddProduct(ctx) {
    try {
      const data = ctx.request.body;
      const productAdded = addProduct(data);
      ctx.status = 201;
      return (ctx.body = {
        success: true,
        data : productAdded
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error.message,
      });
    }
  }
  
  async function handleUpdateProduct(ctx) {
    try {
      const data = ctx.request.body;
      const { id } = ctx.params;
      const productUpdated = updateProduct(id, data);
      ctx.status = 201;
      return (ctx.body = {
        success: true,
        data : productUpdated
      });
    } catch (error) {
      return (ctx.body = {
        success: false,
        error: error.message,
      });
    }
  }
  
  async function handleDeleteProduct(ctx) {
    try {
      const { id } = ctx.params;
      const queryParam = ctx.query;
      const currentProduct = getProduct(id, queryParam);
      if (currentProduct) {
        deleteProduct(id);
        ctx.status = 200;
        return (ctx.body = {
            success : true,
            message: `Product with id: ${id} was deleted successfully`
        })
      }
      ctx.status = 404;

      return (ctx.body = {
          success : false,
          message: `Product not found with id: ${id}`
      })
    } catch (error) {
      return (ctx.body = {
          success : false,
          error : error.message
      })
    }
  }

module.exports = {
    handleGetProduct,
    handleGetProducts,
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct
}
