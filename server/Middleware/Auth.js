const jwt = require('jsonwebtoken')
const config = require('../config/config')

const verifyToken = async (req, res, next) => {

    const token = req.body.token || req.query.token || req.headers["x-access-token"]

    if (!token) {
        return res.status(403).send({ "status": false, "msg": "A token is required for authentication" })
    }
    try {
        const decoded = jwt.verify(token, config.secret_jwt)
        req.user = decoded
    } catch (err) {
        return res.status(401).send({ "status": false, "msg": "Invalid Token Access" })
    }
    return next()
}

module.exports = verifyToken