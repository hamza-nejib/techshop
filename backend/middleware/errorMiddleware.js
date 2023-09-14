const notFound = (req, res, next) => {
    const error = new Error(`Non Trouvé - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res,next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if(err.name === 'CastError' && err.kind === 'ObjectId') {
        message = `Ressource non trouvé !`;
        statusCode = 404;
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? 'Pancake' : err.stack,
    });
};

export { notFound, errorHandler };