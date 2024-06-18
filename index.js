import { middlewareStatic } from "./middlewares/middleware-static.js";
import { middlewareHome } from "./middlewares/middleware-home.js";
import { middlewareErrorHandler } from "./middlewares/middleware-error-handler.js";
import { middlewareEmptyErr } from "./middlewares/middleware-empty-err.js";
import { middlewareApi } from "./middlewares/middleware-api.js";
import { middlewareUser } from "./middlewares/middleware-user.js";
import {middlewareCors} from "./middlewares/middleware-cors.js";

import express  from "express";


const app = express();
middlewareCors(app);
middlewareStatic(app);
middlewareHome(app);
middlewareApi(app);
middlewareUser(app);
middlewareEmptyErr(app);
middlewareErrorHandler(app);


app.listen(3000, '127.0.0.1', () => {
    console.log('Listening on http://127.0.0.1:3000/');
});

