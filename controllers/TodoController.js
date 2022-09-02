const { Router } = require('express')
const todo = require('../modules/todo.modules')
const response = require('../helpers/response')
const TodoController = Router()


/**
 * List todo
 */

TodoController.get('/', async(req, res, next) => {
    const list = await todo.list_Todo()
    response.sendResponse(res, list)

})

module.exports = TodoController