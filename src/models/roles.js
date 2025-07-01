require("dotenv").config();
const schema = process.env.SCHEMA;
const table = `${schema}.roles`;
const bcrypt = require("bcrypt");

const getAllRoles = () => {
  const sql = `SELECT * FROM ${table}`;
  return sql;
};

const createNewRole = (body) => {
  const sql = `INSERT INTO ${table} (role_id, name)
                VALUES ('${crypto.randomUUID()}', '${body.name}')`;
  return sql;
};

const updateRole = (body, id) => {
  const sql = `UPDATE ${table} SET name='${body.name}' WHERE role_id=${id}`;
  return sql;
};

const deleteRole = (id) => {
  const sql = `DELETE FROM ${table} WHERE role_id=${id}`;
  return sql;
};

const getRole = (name) => {
  const sql = `SELECT role_id FROM ${table} WHERE name='${name}'`;
  return sql;
};

module.exports = {
  getAllRoles,
  createNewRole,
  updateRole,
  deleteRole,
  getRole,
};
