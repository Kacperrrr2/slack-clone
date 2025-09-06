import express from 'express';
import { ENV } from './config/env.js';




const app = express();
app.get('/', (req, res) => res.send('Hello World!'));

console.log(ENV.MONGO_URI);
app.listen(ENV.PORT, () => console.log(`Listening on po ${ENV.PORT}`));
