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

/**
 * add Todo
 * @param {string} title
 * @param {string} description
 */

TodoController.post('/', async(req, res, next) => {
    const add_todo = await todo.add_todo(req.body)

    response.sendResponse(res, add_todo)
})

/**
 * Update Todo
 * @param {number} id
 * @param {string} title
 * @param {string} description
 */

TodoController.put('/', async(req, res, next) => {
    const update_todo = await todo.update_todo(req.body)

    response.sendResponse(res, update_todo)
})

/**
 * Delete Todo
 * @param {number} id
 */

TodoController.delete('/:id', async(req, res, next) => {
    const delete_todo = await todo.delete_todo(req.params.id);

    response.sendResponse(res, delete_todo)
})

/**
 * detail Todo 
 */
TodoController.get('/detail', async(req, res, next) => {

    const detail = await todo.details_todo(req.query.id)

    response.sendResponse(res, detail)

})


module.exports = TodoController