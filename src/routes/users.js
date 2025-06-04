const router = require("express").Router();
const userContoller = require("../controller/users");

router.get("/", userContoller.getAllUsers);
router.post("/", userContoller.createNewUser);
router.put("/:id", userContoller.updateUser);
router.delete("/:id", userContoller.deleteUser);

module.exports = router;
