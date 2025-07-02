const router = require("express").Router();
const authContoller = require("../controller/auth");

// router.get("/", authContoller.getAllAuth);
router.post("/login", authContoller.loginAuth);
// router.put("/:id", authContoller.updateAuth);
// router.delete("/:id", authContoller.deleteAuth);

module.exports = router;
