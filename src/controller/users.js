const db = require("../config/db");
const sql = require("../models/users");
const role = require("../models/roles");
const response = require("./response");

const getAllUsers = (req, res) => {
  db.query(sql.getAllUsers(), (err, result) => {
    result.rows != 0
      ? response(200, result.rows, "Success get all users's datas", res)
      : response(500, err, "error", res);
  });
};

const createNewUser = (req, res) => {
  const { body } = req;
  if (!body.user_name || !body.email || !body.password)
    response(400, body, "error", res);

  db.query(role.getRole("user"), (err, result) => {
    body.user_role = result.rows[0].role_id;
    db.query(sql.createNewUser(req.body), (err, result) => {
      const data = {
        user_name: req.body.user_name,
        email: req.body.email,
        user_role: req.body.user_role,
      };
      !err
        ? response(201, data, "Success created a new user", res)
        : response(400, err, "error", res);
    });
  });
};

const updateUser = (req, res) => {
  console.log(req);

  db.query(role.getRole(req.body.user_role), (err, result) => {
    req.body.user_role = result.rows[0].role_id;
    db.query(sql.updateUser(req.body, req.params.id), (err, result) => {
      !err
        ? response(201, req.params, "Success update user", res)
        : response(400, err, "error", res);
    });
  });
};

const deleteUser = (req, res) => {
  db.query(sql.deleteUser(req.params.id), (err, result) => {
    !err
      ? response(200, req.params, "Success delete user", res)
      : response(400, err, "error", res);
  });
};

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };
