const db = require("../config/db");
const sql = require("../models/roles");
const response = require("./response");

const getAllRoles = (req, res) => {
  db.query(sql.getAllRoles(), (err, result) => {
    result.rows != 0
      ? response(200, result.rows, "Success get all roles's datas", res)
      : response(500, err, "error", res);
  });
};

const createNewRole = (req, res) => {
  const { body } = req;
  if (!body.name) response(400, body, "error", res);

  db.query(sql.createNewRole(req.body), (err, result) => {
    const data = {
      name: req.body.name,
    };
    !err
      ? response(201, data, "Success created a new role", res)
      : response(400, err, "error", res);
  });
};

const updateRole = (req, res) => {
  // res.send(req.params);
  db.query(sql.updateRole(req.body, req.params.id), (err, result) => {
    !err
      ? response(201, req.params, "Success update role", res)
      : response(400, err, "error", res);
  });
};

const deleteRole = (req, res) => {
  // res.send(req.params);
  db.query(sql.deleteRole(req.params.id), (err, result) => {
    !err
      ? response(200, req.params, "Success delete role", res)
      : response(400, err, "error", res);
  });
};

module.exports = { getAllRoles, createNewRole, updateRole, deleteRole };
