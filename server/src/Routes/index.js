const routeMensagem  = require('./routeMensagem')


module.exports = (app, express) =>{
    app.use(express.json())
    app.use(express.urlencode({ extended: true}))
    app.use(routeMensagem)
}