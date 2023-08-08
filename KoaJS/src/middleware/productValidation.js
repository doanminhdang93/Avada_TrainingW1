const { object, string, number, date } =  require('yup');

async function productValidation(ctx, next) {
  try {
    const data = ctx.request.body;
    let schema = object({
      name: string().required(),
      price: number().positive().required(),
      description: string().required(),
      product: string().required(),
      createdAt: date().required(),
      image: string().required(),
    });
    await schema.validate(data);
    next();
  } catch (error) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      errors: error.message
    };
  }
}

module.exports = {
    productValidation,
}