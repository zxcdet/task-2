import status from "http-status";

class MyError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = status[`${statusCode}_MESSAGE`];
    }
}

const middlewareErrorHandler = (app) => {
    app.use((error, req, res, next) => {

        if (error instanceof MyError) {
            return res.status(error.statusCode).send(error.message);
        }
        console.log('assa')

        return res.status(500).send("Server error");
    })
};

export { middlewareErrorHandler, MyError };
