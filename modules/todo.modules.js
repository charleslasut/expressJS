const mysql = require('../helpers/database')
const Joi = require('joi')

class _todo {
    //list Todo
    list_Todo = async () => {
        try { 
            const list = await mysql.query(
                'SELECT * FROM d_todo',
                []    
            )

            return {
                status: true,
                data: list
            }
        } catch (error) {
            console.error('ListTodo todo module Eroor', error)

            return {
                status: false,
                error
            }
        }
    }

    //Create todo
    add_todo = async (body) => {
        try {
            const schema = Joi.object({
                title: Joi.string().required(),
                description: Joi.string()
            })

            const validation = schema.validate(body)

            if (validation.error) {
                const errorDetails = validation.error.details.map(detail = detail.message)
                return {
                    status: false,
                    code: 422,
                    error: errorDetails.join(', ')
                }
            }
            
            const add = await mysql.query(
                'INSERT INTO d_todo (title, description) VALUES (?, ?)',
                [body.title, body.description]
            )
            return{
                status: true,
                data: add
            }
        } catch (error) {
            console.error('addTodo todo module Eroor', error)

            return {
                status: false,
                error
            }
        }        
    }

    //Update todo
    update_todo = async (body) => {
        try {
            const schema = Joi.object ({
                id: Joi.number().required(),
                title: Joi.string(),
                description: Joi.string()
            })

            const validation = schema.validate(body)

            if (validation.error) {
                const errorDetails = validation.error.details.map(detail = detail.message)
                return {
                    status: false,
                    code: 422,
                    error: errorDetails.join(',')
                }
            }
            
            const update = await mysql.query(
                'UPDATE d_todo SET title = ?, description = ? WHERE id = ?',
                [body.title, body.description, body.id]
            )
            return{
                status: true,
                data: update
            }
        } catch (error) {
            console.error('addTodo todo module Eroor', error)

            return {
                status: false,
                error
            }
        }        
    }

    //Delete Todo
    delete_todo = async (id) => {
        try {
            const body = {id}
            const schema = Joi.object({
                id: Joi.number().required()
            })

            const validation = schema.validate(body)

            if (validation.error) {
                const errorDetails = validation.error.details.map(detail = detail.message)
                return {
                    status: false,
                    code: 422,
                    error: errorDetails.join(',')
                }
            }

            const delete_todo = await mysql.query(
                'DELETE FROM d_todo WHERE id = ?',
                [id]
            )
            return{
                status: true,
                data: delete_todo
            }

        } catch (error) {
            console.error('addTodo todo module Eroor', error)

            return {
                status: false,
                error
            }
        }
    }

}

module.exports = new _todo()