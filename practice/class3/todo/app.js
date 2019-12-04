const Koa = require('koa')
const app = new Koa()
const Router = require('@koa/router')
const router = new Router()

const hostname = '127.0.0.1'
const port = 3000

// app.use(async (ctx) => {
//   ctx.body = 'Hello World'
// })

router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World!'
  })
  .post('/users', (ctx, next) => {
    // ...
  })
  .put('/users/:id', (ctx, next) => {
    // ...
  })
  .del('/users/:id', (ctx, next) => {
    // ...
  })
  .all('/users/:id', (ctx, next) => {
    ctx.body = { id: 1, name: 'alin' }
  })

app.use(router.routes()).use(router.allowedMethods())

app.listen(port, hostname, () => console.log(`Example app listening on port ${port}!`))
