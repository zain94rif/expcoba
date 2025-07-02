require("dotenv").config();
const schema = process.env.SCHEMA;
const table = `${schema}.users`;
const bcrypt = require("bcrypt");

const loginAuth = (body) => {
  // console.log(body);

  // const salt = bcrypt.genSaltSync(10);
  // const pswd = bcrypt.hashSync(body.password, salt);

  const sql = `SELECT password FROM ${table} WHERE email = '${body.email}'`;
  return sql;
};

module.exports = { loginAuth };
