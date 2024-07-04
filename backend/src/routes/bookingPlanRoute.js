const express = require("express");
const { addBookingPlan, getAllBookingPlan } = require("../controllers/bookingPlanController.js");
const { authAdmin, authorizeRoles } = require('../middlewares/authMiddleware.js');

const router = express.Router()

router.post('/createbookingplan', authAdmin, addBookingPlan)
router.get('/getallbookingplan', getAllBookingPlan)

module.exports = router;