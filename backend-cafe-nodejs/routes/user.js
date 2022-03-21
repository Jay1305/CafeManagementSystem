const e = require('express');
const express = require('express');
const connection = require('../connection');
const router = express.Router();


const jwt = require('jsonwebtoken');
require("dotenv").config();

router.post('/signup', (req, resp) => {
    let user = req.body;
    let query = "select email, password, role, status from user where email=?";
    connection.query(query, [user.email], (err, results) => {
        console.log(query);
        console.log(user);
        if (!err) {
            if (results.length <= 0) {
                query = "insert into user(name, contact_number, email, password, status, role) values (?,?,?,?,0,'user')";
                connection.query(query, [user.name, user.contact_number, user.email, user.password], (err, results) => {
                    if (!err) {
                        return resp.status(200).json({ message: "Successfully registered" });
                    }
                    else
                        return resp.status(500).json({ message: err });
                });
            }
            else
                return resp.status(400).json({ message: "Email address already exists" })
        }
        else
            return resp.status(500).json(err);
    })
});

router.post("/login", (req, resp) => {
    const user = req.body;
    query = "select email, password, role, status from user where email=?";
    connection.query(query, [user.email], (err, results) => {
        console.log(results);
        if (!err) {
            if (results.length <= 0 || results[0].password != user.password)
                return resp.status(401).json({ message: "Incorrect username or password" });
            else if (results[0].status === 0) {
                return resp.status(401).json({ message: "Wait for admin approval" });
            }
            else if (results[0].password === user.password) {
                const payload = { email: results[0].email, role: results[0].role };
                accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: '8h' });
                resp.status(200).json({ token: accessToken });
            }
            else return resp.status(400).json({ message: "Something went wrong. Please try again later." });
        }
        else
            return resp.status(500).json(err);
    });
});

router.post("/validate", (req, resp) => {
    const token = req.body.token;
    accessToken = jwt.verify(token,process.env.ACCESS_TOKEN,{complete:true});
    return resp.status(500).json(accessToken);
});

module.exports = router;