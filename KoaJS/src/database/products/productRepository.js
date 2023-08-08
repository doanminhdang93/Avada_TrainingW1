const fs = require("fs");
const products = require("../../database/products/products.json");
const path = require("path");
const orderProductsByDate  = require("../../presenter/products/orderProductsByDate");
const productWithFieldsParam  = require("../../presenter/products/productsWithFieldsParam");


const getAllProducts = (queryParam) =>{
  const {limit, sort} = queryParam;
  let productsData = products;
  if(sort){
    productsData = orderProductsByDate(products, sort);
  }
  if(limit){
    productsData = productsData.slice(0, parseInt(limit));
  }

  return productsData;
}

const getProduct = (id, queryParam) =>{
  const productFound = products.find((product) => parseInt(product.id) === parseInt(id));
  const {fields} = queryParam;
  if(fields){
    return productWithFieldsParam(fields, productFound);
  }
  return productFound;
}

const addProduct = (data) =>{
  const newProduct = {id: Date.now(),...data};
  const productData = [newProduct, ...products];
  fs.writeFileSync(
    path.join(__dirname, 'products.json'),
    JSON.stringify(productData)
  );
  return newProduct
}

const updateProduct = (id, data) =>{
  const index = products.findIndex(
    (product) => parseInt(product.id) === parseInt(id)
  );
  products[index] = { ...data, id};
  fs.writeFileSync(
    path.join(__dirname, 'products.json'),
    JSON.stringify(products)
  );
  return products[index];
}

const deleteProduct = (id) =>{
  const index = products.findIndex(
    (product) => parseInt(product.id) === parseInt(id)
  );
  products.splice(index, 1);
  return fs.writeFileSync(
    path.join(__dirname, 'products.json'),
    JSON.stringify(products)
  );
}

module.exports = {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}


