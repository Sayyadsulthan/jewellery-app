import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const auth = async (req, res, next) => {
    // checking the valid user or logged in user is making request or not
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

            return next();
        } catch (err) {
            console.log(err.message);
            return res
                .status(401)
                .json({ message: 'Not Authorized,  token failed', success: false });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not Authorized, no token', success: false });
    }
};

export default auth;
