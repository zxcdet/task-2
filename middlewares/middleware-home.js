import {staticRoute} from "../routes/static-router.js";

export function middlewareHome(app) {
    app.use('/', staticRoute);
}