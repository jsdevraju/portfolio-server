import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import errorHandler from './middleware/error.js';
import morgan from 'morgan'
import { config } from 'dotenv'

config();

const app =  express();

//Middleware
app.use(cors());
app.use(morgan("dev"))
app.use(express.json());
app.use(cookieParser());

// Import ALl Route
import authRoute from './routes/authRoute.js';
import projectRoute from './routes/projectRoute.js';
import experienceRoute from './routes/exprienceRoute.js';
import portfolioRoute from './routes/portfolioRoute.js';
import contactRoute from './routes/contactRoute.js';

// test api
app.get("/", (req, res) => {
    res.send("Hello test")
})

app.use("/api/v1", authRoute);
app.use("/api/v1", projectRoute);
app.use("/api/v1", experienceRoute);
app.use("/api/v1", portfolioRoute);
app.use("/api/v1", contactRoute);

// ErrorMiddleware
app.use(errorHandler);

export default app;