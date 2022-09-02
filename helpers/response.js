class _response {
    sendRequest = (res, data) => {
        try {
            if (data.code) {
                res.status(data.code)

                delete data.code

                res.send(data)
                return true
            }

            res.status(data && data.status ? 200 : 500)
            res.send(data)
            return true
        } catch (error) {
            console.log('sendResponse response helper Error', error)

            res.status(400).send({
                status: false,
                error
            })
            return true
        }
    }
}

module.exports = new _response()