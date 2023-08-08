const orderProductsByDate = (products, sort) =>{
    let productsSortedByDate = products;
    if (sort === "asc") {
      return productsSortedByDate.sort(
        (prevProduct, currentProduct) =>
          new Date(prevProduct.createdAt) - new Date(currentProduct.createdAt)
      );
    }
    return productsSortedByDate.sort(
      (prevProduct, currentProduct) =>
        new Date(currentProduct.createdAt) - new Date(prevProduct.createdAt)
    );
  }

module.exports = orderProductsByDate;