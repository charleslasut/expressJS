const mariadb = require('mariadb')
const config = require("../config/app.config.json")
const pool = mariadb.createPool(config.db)

class _database {
    escapeUndefined = (args) => {
        if(!(args instanceof Object)){
            return args === undefined ? null : args
        }
        for (const key in args) {
            if(args[key] === undefined){
                args[key] = null
            }
        }
        return args
    }

    query = async (sql, params, insertIdAsNumber = true, stripMeta = true, dataString = true) => {
        let conn
        try {
            conn = await pool.getConnection()
            const res = await conn.execute({sql, insertIdAsNumber, dataString}, this.escapeUndefined(params))

            if (stripMeta) {
                delete res.meta
            }


            return res
        } finally {
            if (conn) conn.release()
        }
    }
}
module.exports = new _database()
