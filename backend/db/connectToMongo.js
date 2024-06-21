import mongoose from "mongoose";

const connectToMongoDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to moongoose");
    } catch (error) {
        console.log("error coonecting to MONGOdB",error.message);
    }
}
export default connectToMongoDB