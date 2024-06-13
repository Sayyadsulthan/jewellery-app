import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const connectToDb = async () => {
    return await mongoose.connect(process.env.DB_URL);
};

export { connectToDb };
