import cors from 'cors';

export function middlewareCors(app) {
    app.use(cors());
}