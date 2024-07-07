const { Router } =  require("express");
const { createPaymentSession, getAllBooking, getCancelledBooking, getCompletedBooking, getConfirmedBooking, getPendingBooking, getTotalBookingCount, successBooking, updateBooking, getSuccessBookingDetails } =  require("../controllers/bookingController.js");
const { authAdmin } =  require("../middlewares/authMiddleware.js");
const { validateBookingDataInput } = require("../middlewares/validationMiddleware.js");


const router = Router();

router.post("/", validateBookingDataInput, createPaymentSession)
router.get("/", authAdmin, getAllBooking),
router.get("/payment", successBooking)
router.get('/success', getSuccessBookingDetails)
router.get("/totalbooking", getTotalBookingCount)
router.get("/confirmed", authAdmin, getConfirmedBooking)
router.get("/pending", authAdmin, getPendingBooking)
router.get("/completed", authAdmin, getCompletedBooking)
router.get("/cancelled", authAdmin, getCancelledBooking)
router.patch("/:id", authAdmin, updateBooking)

module.exports = router