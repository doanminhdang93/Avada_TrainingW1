const productWithFieldsParam = (fields, currentProduct) =>{
    const arrFields = fields.split(',');
    const productWithFieldsParam = {};
    arrFields.forEach(field => {
      productWithFieldsParam[field] = currentProduct[field];
    });
    return productWithFieldsParam;
}
module.exports = productWithFieldsParam;