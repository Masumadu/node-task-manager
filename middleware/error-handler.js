const { CustomError } = require('../errors/custom-errors');

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomError) {
        return res.status(err.statusCode).json(
            {
                error: 'BadRequest',
                msg: err.message
            }
        )
    }
    return res.status(500).json({msg: err})
}

module.exports = errorHandlerMiddleware;