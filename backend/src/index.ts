import 'dotenv/config';
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'
import path from "path";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";
import adminRouter from './routes/adminRoute';
import ticketRouter from './routes/ticketRoutes';
import qrRouter from './routes/qrRoutes';
import bookingRouter from './routes/bookingRoutes';
import dateManageRouter from './routes/dateManageRoute';

//Initializing Express App
const app = express();
const PORT = process.env.PORT || 4000;


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/ticket", ticketRouter);
app.use("/api/v1/qr", qrRouter);
app.use('/api/v1/booking', bookingRouter)
app.use("/api/v1/dates-manage", dateManageRouter);


//Serving Frontend Statically
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")))


//Sending Frontend
app.get('*', (req:Request, res:Response) => {
    res.sendFile(path.join(__dirname, "..", "..", "frontend", "dist", "index.html"))
})


//Global Err Handler
app.use(errorHandlerMiddleware)

//Server Start

const dbConn = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string)
        app.listen(PORT, () => {
            console.log("Server is Runnning on PORT : ", PORT);
        })
    } catch (error) {
        console.log(error);
    }
}

dbConn()