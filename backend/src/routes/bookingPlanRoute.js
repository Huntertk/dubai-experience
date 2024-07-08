const express = require("express");
const { addBookingPlan, getAllBookingPlan, getBookingPlan } = require("../controllers/bookingPlanController.js");
const { authAdmin, authorizeRoles } = require('../middlewares/authMiddleware.js');

const router = express.Router()

router.post('/createbookingplan', authAdmin, addBookingPlan)
router.get('/getallbookingplan', getAllBookingPlan)
router.get('/getbookingplan', getBookingPlan)

module.exports = router;