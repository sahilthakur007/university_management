exports.Studentlogin = async(req,res)=>{
    
    const {PRN ,password} = req.body; 
    // console.log(prn);
    res.status(200).json({
        messege:"success"
    })

}

exports.facultylogin = async(req,res)=>{
    
    const {id,password} = req.body; 
    console.log(password);
    res.status(200).json({
        messege:"success"
    })
}
