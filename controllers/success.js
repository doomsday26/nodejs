exports.success= (req,res)=>{
    console.log(req.body);
    res.send(`${req.body.name} your data has been submitted successfully with email id of ${req.body.emailid} `   )
} 