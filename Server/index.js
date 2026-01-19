import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/RoomRoute.js";
const app = express();
const port = 9923;
const mongoDb_url = "mongodb://localhost:27017/AddRoomDB";
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());
app.use("/room", router);
const connectuion = mongoose.connect(mongoDb_url).
    then(() => {
        app.listen(port, () => {
            console.log(`we are on port ${port}`)
        })
    })
    .catch((e) => {
        console.log(e);
    })