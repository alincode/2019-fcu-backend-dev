const Koa = require('koa')
const app = new Koa()

const path = require('path')
const static = require('koa-static')

const Router = require('@koa/router')
const router = new Router()

const hostname = '127.0.0.1'
const port = 3000

const staticMiddleware = static(path.join(__dirname) + '/public')

router.get('/posts/:id', (ctx, next) => {
  const { id } = ctx.params
  ctx.body = {
    userId: 1,
    id: 1,
    title: 'demo title',
    body: 'demo body',
  }
})

app.use(staticMiddleware)
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(port, hostname, () => console.log(`Example app listening on port ${port}!`))

// http://localhost:3000
// http://localhost:3000/hi.txt
// http://localhost:3000/posts/1
