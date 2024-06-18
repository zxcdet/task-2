import {MyError} from "./middleware-error-handler.js";

import status from "http-status";

export function middlewareEmptyRoute(app) {
    app.use((req, res, next) => {
        const err = new MyError( status.NOT_FOUND, `Error 404: ${status['404_MESSAGE']}`);
        next(err);
    });
}