import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongo.js";
import messageRoutes from "./routes/message.route.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
const app=express();

dotenv.config();
const PORT=process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("hello  3world")
})

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoute)
app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server running on port ${PORT}`)
});