const express = require("express");
const mysql = require('mysql');
const cors = require ('cors');
// const {check, validationResult} = require('express-validator');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "automationteam"
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`email`,`password`,`fullName`,`position`,`phone`,`address`) VALUES (?)";
    const values = [
        req.body.email,
        req.body.password,
        req.body.fullName,
        req.body.position,
        req.body.phone,
        req.body.adress
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed")
        }
    })
})

app.listen(8081, ()=> {
    console.log("listening");
})

