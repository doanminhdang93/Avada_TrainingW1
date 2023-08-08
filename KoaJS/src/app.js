const Koa = require('koa');
const {koaBody} = require('koa-body');
const {productRouter} = require('./routes/routes.js');

const app = new Koa();

app.use(koaBody());

// product
app.use(productRouter.routes());
app.use(productRouter.allowedMethods());

app.use(async ctx => {
    ctx.body = {
      success: false,
      message:"Page not found!"
    };
});

const server = app.listen(8000, () => {
    console.log(
      `Server is running on http://localhost:${8000}`
    );
  });