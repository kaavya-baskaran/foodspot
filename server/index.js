const mysql = require("mysql");
const cors = require("cors");
const express = require("express");

var app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "brindha@1979",
  database: "foodspot",
});

db.connect((error) => {
  if (error) {
    console.log("Error");
  }
  app.post("/signUp", (req, res) => {
    console.log(req.body.username);
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    db.query(
      "INSERT INTO users (username,password,email) VALUES (?,?,?)",
      [username, password, email],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("username", username);
          res.send("values inserted");
        }
      }
    );
  });

  app.post("/fetching", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log("USERNAME :", username);
    db.query(
      "SELECT password FROM users WHERE username=" + '"' + username + '"',
      (err, results, fields) => {
        if (err) {
          console.log("error at fetching db");
          throw err;
        }
        res.send(results[0].password);
      }
    );
  });

  app.listen(3000, () => {
    console.log("backend is runing");
  });
});
