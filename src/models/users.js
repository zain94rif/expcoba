require("dotenv").config();
const schema = process.env.SCHEMA;
const table = `${schema}.users`;

const getAllUsers = () => {
  const sql = `SELECT * FROM ${table}`;
  return sql;
};

const createNewUser = (body) => {
  const sql = `INSERT INTO ${table} (id, user_name, email, password, user_role)
                  VALUES (nextval('${schema}.sq_user'), '${body.user_name}', '${body.email}', '${body.password}', '${body.user_role}')`;
  return sql;
};

const updateUser = (body, id) => {
  const sql = `UPDATE ${table} SET user_name='${body.user_name}', email='${body.email}', password='${body.password}', user_role='${body.user_role}'
                  WHERE id=${id}`;
  return sql;
};

const deleteUser = (id) => {
  const sql = `DELETE FROM ${table} WHERE id=${id}`;
  return sql;
};

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };
