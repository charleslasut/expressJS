const TodoController = require('./controllers/TodoController')

// Define url API in Here

const _routes = [
    ['/todos', TodoController]
]


const routes = (app) => {
    _routes.forEach((route) => {
        const [url, controller] = route 
        app.use (`/api${url}`, controller)
    })
}

module.exports = routes