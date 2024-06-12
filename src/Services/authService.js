const User=require("../Models/userModel");
const bcrypt=require("bcryptjs");
const jwt =require("jsonwebtoken");

const registerUser=async(userData)=>{
    try{
       // console.log("inside Service",userData);
        const existingUser=await User.findOne({email:userData.email});
        if(existingUser){
            throw new Error("User already exists");
        } 
        const user=new User(userData);
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(userData.password,salt);
        user.password=hashedPassword;
          await user.save();
        return user;
    }
    catch(err){
        throw err;
    }
}

const loginUser=async(userData)=>{
    try{
        const {email,password}=userData;
        //console.log(email,password)
        const user=await User.findOne({email});
        //console.log(user)
        if(!user){
            throw new Error("User is not found");
        }
        const isMatch=await user.comparePassword(password);

        if(!isMatch){
            console.log("is match")
            throw new Error("Invalid Credentials");
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
        console.log(token)
        return {token,user};
    }
    catch(err){
        throw err;
    }
};

module.exports={ registerUser,loginUser};