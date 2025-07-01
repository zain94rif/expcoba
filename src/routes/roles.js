const router = require("express").Router();
const roleContoller = require("../controller/roles");

router.get("/", roleContoller.getAllRoles);
router.post("/", roleContoller.createNewRole);
router.put("/:id", roleContoller.updateRole);
router.delete("/:id", roleContoller.deleteRole);

module.exports = router;
