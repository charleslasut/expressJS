const mysql = require('../helpers/database')
const Joi = require('joi')

class _todo {
    // List all Todos
    listTodo = async () => {
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
}