const express = require("express")
const router = express.Router()
const userAuth = require("../middleware/userMiddleware")
const controllers = require("../Controllers/UserController")

const upload = require("../middleware/multer")
router.route("/Registration").post(upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'pdf', maxCount: 1 }
  ]),controllers.Registration)

router.route("/Login").post(controllers.Login)
router.route("/getUserById/:id").get(controllers.getUserById)
router.route("/getAllUsers").get(controllers.getAllUsers)
router.route("/getUser").get(userAuth,controllers.getUser)
router.route("/updateProfile/:id").put(userAuth,upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'pdf', maxCount: 1 }
]),controllers.updateProfile)
router.route("/getUserBySkillAndName").get(controllers.getUserBySkillAndName)
router.route("/applyJob/:id").post(userAuth,controllers.applyJob)
router.route("/getAplliedAllJobs/:id").get(userAuth,controllers.getAplliedAllJobs)
router.route("/DelApplied/:id").delete(userAuth,controllers.DelApplied)

module.exports = router