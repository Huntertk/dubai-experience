const express = require("express");
const { addBookingPlan, getAllBookingPlan, getBookingPlan, addQr, getQr } = require("../controllers/bookingPlanController.js");
const { authAdmin, authorizeRoles } = require('../middlewares/authMiddleware.js');
const multer  = require('multer');
// File upload configuration
const upload = multer({ dest: './backend/src/uploads/' })
const router = express.Router()

router.post('/createbookingplan', authAdmin, authorizeRoles('admin'), addBookingPlan)
router.get('/getallbookingplan', getAllBookingPlan);
router.get('/getbookingplan', getBookingPlan);
router.patch('/add-qr', authAdmin, authorizeRoles('admin'), upload.single('qrFile'), addQr);
router.get('/get-qr', authAdmin, authorizeRoles('admin'), getQr);


module.exports = router;