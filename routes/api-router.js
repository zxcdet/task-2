import {fileURLToPath} from "url";
import path from "path";

import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

router.get('/second-route', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'static', 'pages', 'second.html'));
});

router.get('/open-file1', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'static', 'text', 'main.txt'));
});

router.get('/open-file2', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'static', 'json', 'data.json'));
});

router.get('/data', (req, res) => {
    res.status(200).json({name: 'data'});
});

const apiRouter = router;

export { apiRouter };