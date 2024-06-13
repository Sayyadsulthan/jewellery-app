import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { configDotenv } from 'dotenv';
import { connectToDb } from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import companyRoutes from './routes/companyRoutes.js';

import path from 'path';
import { fileURLToPath } from 'url';

// configure the env variables
configDotenv();
const port = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// creating express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// using middlewares
app.use(morgan('short'));
app.use(helmet({ crossOriginResourcePolicy: true }));

// handling routes requests
app.get('/', (req, res) => res.status(200).send('<h1>Hello from server</h1>'));

app.use('/api/auth', authRoutes);
app.use('/api/companies', companyRoutes);

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// db connection
connectToDb()
    .then(() => console.log('db connection successfull:::'))
    .catch((err) => console.log(err.message));

// listening to port
app.listen(port, (err) => console.log(err ? err : `server running on port: ${port}`));
