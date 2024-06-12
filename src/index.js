require("dotenv").config({path:"src/.env"});
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const authRoutes=require("../src/Routes/authRoute");
const projects=require("../src/Routes/projectRoutes")

const PORT=process.env.PORT || 5000;
const app=express();

app.use(express.json());
app.use(cors());

app.use("/api/auth",authRoutes);
app.use("/api/projects",projects);

mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("Connected to Mongo DB"))
.catch((err)=>console.log("Could not connect to MongoDB",err));

app.get("/",(req,res)=>{
    res.send("Backend is server is running");
});

app.listen(PORT,()=>{console.log(`Listening to ${PORT}`)});
