const jwt=require("jsonwebtoken");

const authToken=(req,res,next)=>{
    const authHeader=req.headers["authorization"];
    const token=authHeader && authHeader.split(" ")[1];
    console.log("token : ",token);
    if(token==null) return res.status(401);
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return res.status(403); //forbidden
        req.user=user;
        console.log("User is in middleware",user);
        next();
    });
}
module.exports=authToken;