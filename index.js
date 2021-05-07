const koa = require('koa')
const router = require('@koa/router')()
const serve = require('koa-static')
const bodyparser = require('koa-bodyparser')
const render = require('./lib/render')

// créer une application koa
const app = new koa()

// création des routes
router.get('/', home)

// renseigner l'application de quelle module elle a besoin
app.use(bodyparser())
app.use(render)
app.use(router.routes())

// fonction qui genere la pag home
async function home(ctx) {
    await ctx.render('home')
}


// Lancement du serveur NODE
app.listen(3000)
console.log(`server running on port 3000`)