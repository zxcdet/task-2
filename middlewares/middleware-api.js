import {apiRouter} from "../routes/api-router.js";

export function middlewareApi(app) {
    app.use('/api', apiRouter);
}