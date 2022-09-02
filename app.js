const express = require('express')
const { route } = require('./controllers/TodoController')
const routes = require('./routes')
const app = express()

// This is the route the API will call
const port = process.env.PORT || 8000

// Serialize dan Deserlialize input
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Welcome API
app.get('/', async(req, res, next)=>{
    res.status(200).send({
        message: 'Welcome to API Todo List'
    })
})

// Routes
routes(app)


app.listen(port, ()=>{
    console.log(`Server is listening on http://localhost:${port}`)
})