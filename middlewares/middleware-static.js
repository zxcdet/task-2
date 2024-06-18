import path from "path";
import {fileURLToPath} from "url";

import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export  function middlewareStatic(app) {
    app.use(express.static(path.join(__dirname, '..', 'static')));
}