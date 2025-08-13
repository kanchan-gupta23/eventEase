const express = require("express")
const router = express.Router()
const controllers = require("../Controllers/JobController")
const CompAuth = require("../middleware/companyMiddleware")
const userAuth = require("../middleware/userMiddleware")

router.route("/createJob/:company").post(CompAuth,controllers.job)
router.route("/applyJob/:id").post(controllers.applyJob)
router.route("/UpdateJob/:id").put(CompAuth,controllers.UpdateJob)
router.route("/delJob/:id").delete(CompAuth,controllers.delJob)
router.route("/getById/:id").get(controllers.getById)
router.route("/AllJobs").get(controllers.AllJobs)
router.route("/getByQuery").get(controllers.getByQuery)

module.exports = router