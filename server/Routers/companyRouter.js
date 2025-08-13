const express = require("express")
const router = express.Router()
const CompAuth = require("../middleware/companyMiddleware")
const controllers = require("../Controllers/CompanyController")

router.route("/Registration").post(controllers.Registration)
router.route("/Login").post(controllers.Login)
router.route("/getCompBYQuery").get(controllers.getCompBYQuery)
router.route("/getCompById/:id").get(controllers.getCompById)
router.route("/getComp").get(CompAuth,controllers.getComp)
router.route("/updateProfile/:id").put(CompAuth,controllers.updateProfile)
router.route("/getAllComp").get(controllers.getAllComp)
router.route("/getCompAllJobs/:id").get(controllers.getCompAllJobs)
router.route("/companyAppliedJobs/:id").get(CompAuth,controllers.companyAppliedJobs)
router.route("/acceptUser/:id").put(CompAuth,controllers.acceptUser)
router.route("/rejectUser/:id").put(CompAuth,controllers.rejectUser)

module.exports = router