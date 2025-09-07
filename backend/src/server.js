import express from 'express';
import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';
import {clerkMiddleware} from '.@clerk/express';



const app = express();
app.use(clerkMiddleware())
app.get('/', (req, res) => res.send('Hello World!'));

console.log(ENV.MONGO_URI);
app.listen(ENV.PORT, () => {
    console.log(`Listening on po ${ENV.PORT}`)
    connectDB();

});



