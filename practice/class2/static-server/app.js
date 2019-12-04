const Koa = require('koa')
const app = new Koa()

const path = require('path')
const serve = require('koa-static')

const staticMiddleware = serve(path.join(__dirname))

app.use(staticMiddleware)
app.listen(3000)
