import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import cookieParser from "cookie-parser";
import router from "./routes/RoomRoute.js";

dotenv.config();

const app = express();

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://your-frontend.vercel.app"
        ],
        credentials: true
    })
);

app.use(express.json());
app.use(cookieParser());


app.use("/room", router);

app.get("/", (req, res) => {
    res.send("Backend running successfully 🚀");
});

/* ---------- DB CONNECTION ---------- */
let isConnected = false;

async function connectDB() {
    if (isConnected) return;

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
}

connectDB();

/* ---------- EXPORT (NO listen) ---------- */
export default app;
