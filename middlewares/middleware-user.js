import { userRouter } from "../routes/user-router.js";

export function middlewareUser(app) {
    app.use('/user', userRouter);
}