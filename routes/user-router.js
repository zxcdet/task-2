import express from "express";

const router = express.Router();
const userRouter = router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`${userId}`);
});

export { userRouter };