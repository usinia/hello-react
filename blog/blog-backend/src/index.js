// const hello = "hello";
// 문제(오류): 'hello' is assigned a value but never used./

// koa 서버 여는 법
const Koa = require("koa");

const app = new Koa();

// app.use(() => console.log(1));
// // next()를 호출하지 않았기 때문에 이후 미들웨어는 무시된다. (처리되지 않는다.)
// app.use(() => console.log(2));

app.use((ctx, next) => {
  console.log(1);
  next().then(() => console.log("bye"));
});

app.use(async (ctx, next) => {
  console.log(2);
  await next();
  console.log("bye2");
});

app.use(ctx => {
  ctx.body = "hello world";
});

app.listen(4000, () => {
  console.log("listening to port 4000");
});
