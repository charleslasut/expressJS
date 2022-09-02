const { Router } = require('express')
const modul_todo = require('../moduls/todo.modules')

const TodoController = Router()


/**
 * List todo
 */

TodoController.get('/', async(req, res, next) => {
    const list = await modul_todo()

    response.sendResponse(res, list)

})

module.exports = TodoController