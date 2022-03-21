const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/signup',(req, resp)=>{
    let user = req.body;
    let query = "select email, password, role, status from user where email=?";
    connection.query(query,[user.email],(err,results)=>{
        console.log(query);
        console.log(user);
        if(!err) {
            if (results.length <=0){
                query = "insert into user(name, contact_number, email, password, status, role) values (?,?,?,?,0,'user')";
                connection.query(query, [user.name,user.contact_number, user.email, user.password],(err,results)=>{
                    if(!err)
                    {                        
                        return resp.status(200).json({message: "Successfully registered"});
                    }
                    else
                        return resp.status(500).json({message: err});
                });
            }
            else
            return resp.status(400).json({message : "Email address already exists"})
        }
        else
            return resp.status(500).json(err);
    })
});

module.exports = router;