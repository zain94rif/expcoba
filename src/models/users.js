require("dotenv").config();
const schema = process.env.SCHEMA;
const table = `${schema}.users`;
const bcrypt = require("bcrypt");

const getAllUsers = () => {
  const sql = `SELECT * FROM ${table}`;
  return sql;
};

const createNewUser = (body) => {
  const salt = bcrypt.genSaltSync(10);
  const pswd = bcrypt.hashSync(body.password, salt);

  const sql = `INSERT INTO ${table} ( user_name, email, password, user_role)
                  VALUES ('${body.user_name}', '${body.email}', '${pswd}', '${body.user_role}')`;
  return sql;
};

const updateUser = (body, id) => {
  const salt = bcrypt.genSaltSync(10);
  const pswd = bcrypt.hashSync(body.password, salt);

  const sql = `UPDATE ${table} SET user_name='${body.user_name}', email='${body.email}', password='${pswd}', user_role='${body.user_role}'
                  WHERE id=${id}`;
  return sql;
};

const deleteUser = (id) => {
  const sql = `DELETE FROM ${table} WHERE id=${id}`;
  return sql;
};

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };
