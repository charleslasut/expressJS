const { query } = require('express')
const mariadb = require('mariadb')
const config = require("../config/app.config.json")
const pool = mariadb.createPool(config.db)

class _database {
    query = async (sql, params, inserIdAsNumber = true, stripMate = true, dataString = true) => {
        let com
        try {
            com = await pool.getConnection()
            const result = await com.execute({sql, insertIdAsNumber}, params)

            if (stripMate) {
                delete res.mate
            }


            return res
        } finally {
            if (com) com.release()
        }
    }
}
