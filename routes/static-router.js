import { fileURLToPath } from "url";
import path from "path";

import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();
const staticRoute = router.get('/',  (req, res) => {
       res.sendFile(path.join(__dirname,  '..', 'static', 'pages', 'index.html'));
});

export  { staticRoute };