import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors'
import AuthRouters from './routes/AuthRoutes.js';
import dbcon from './db/db.js';

const PORT = process.env.PORT || 7000;

const app = express()
dbcon()

//use middleware
app.use(express.json())
app.use(cors())
app.use('/api/auth', AuthRouters)

app.listen(PORT, () => {
    //check port running
    console.log(`Server running on ${PORT}`);
})