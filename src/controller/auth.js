require("dotenv").config();
const db = require("../config/db");
const sql = require("../models/auth");
const response = require("./response");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllAuth = (req, res) => {
  db.query(sql.getAllAuth(), (err, result) => {
    result.rows != 0
      ? response(200, result.rows, "Success get all auths's datas", res)
      : response(500, err, "error", res);
  });
};

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXP_IN,
  });
};

const loginAuth = (req, res) => {
  if (!req.body.email && !req.body.password) {
    response(
      500,
      "Error",
      "Please Input (user_name or email) and password",
      res
    );
  } else {
    db.query(sql.loginAuth(req.body), (err, result) => {
      const pass = result.rows[0].password;
      const isMatch = bcrypt.compareSync(req.body.password, pass);
      const token = isMatch ? signToken(req.body.email) : "";
      !err
        ? response(201, token, "Success update auth", res)
        : response(400, err, "error", res);
    });
  }
};

const updateAuth = (req, res) => {
  db.query(role.getRole(req.body.auth_role), (err, result) => {
    req.body.auth_role = result.rows[0].role_id;

    db.query(sql.updateAuth(req.body, req.params.id), (err, result) => {
      !err
        ? response(201, req.params, "Success update auth", res)
        : response(400, err, "error", res);
    });
  });
};

const deleteAuth = (req, res) => {
  db.query(sql.deleteAuth(req.params.id), (err, result) => {
    !err
      ? response(200, req.params, "Success delete auth", res)
      : response(400, err, "error", res);
  });
};

module.exports = { getAllAuth, loginAuth, updateAuth, deleteAuth };
