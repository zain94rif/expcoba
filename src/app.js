require("dotenv").config();
const express = require("express");
const usersRoutes = require("./routes/users");
const rolesRoutes = require("./routes/roles");
const authRoutes = require("./routes/auth");
const middlewareLog = require("./middleware/log");

const app = express();
const port = process.env.PORT || 3000;
app.use(middlewareLog);
app.use(express.json());

app.use("/user", usersRoutes);
app.use("/auth", authRoutes);
app.use("/role", rolesRoutes);

app.get("/", (req, res) => {
  // db.query("SELECT * FROM mydb.users", (error, result) => {
    // coba
  res.send("ini halaman awal");
  // });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
