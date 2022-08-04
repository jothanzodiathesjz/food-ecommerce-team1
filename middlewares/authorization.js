const adminAuthorization=(req,res,next)=>{
    const admin = true
    if(admin){
        next()
    }else{
        res.status(401).json({message:'You are Unauthorized'})
    }
}



module.exports = {
    adminAuthorization
}