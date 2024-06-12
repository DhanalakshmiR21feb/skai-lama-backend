const authService=require("../Services/authService");

const register=async(req,res)=>{
    try {
        const userData=req.body;
        //console.log("inside ctrl",userData);
        const user=await authService.registerUser(userData);
        // console.log("after reg servicce",user);
        res.status(201).json({
            message:"User registered successfully",user});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}
const login=async(req,res)=>{
    console.log("in backend login")
    try{
        const userData=req.body;
       
        const {token,user}=await authService.loginUser(userData);
        console.log("21",token,user);
        const {_id}=user._id
        res.status(200).json({
            message:"User logged in Successfully",token,_id
        });
    }catch(err){
        res.status(500).json({message:err.message});
    }
}
module.exports={register,login};