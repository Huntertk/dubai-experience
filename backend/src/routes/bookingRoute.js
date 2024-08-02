const { Router } =  require("express");
const { createBooking, getAllBooking, getCancelledBooking, getCompletedBooking, getConfirmedBooking, getPendingBooking, getTotalBookingCount, successBooking, updateBooking, getSuccessBookingDetails } =  require("../controllers/bookingController.js");
const { authAdmin } =  require("../middlewares/authMiddleware.js");


const router = Router();

router.post("/", createBooking)
router.get("/", authAdmin, getAllBooking),
router.get('/success', getSuccessBookingDetails)
router.get("/totalbooking", getTotalBookingCount)
router.get("/confirmed", authAdmin, getConfirmedBooking)
router.get("/pending", authAdmin, getPendingBooking)
router.get("/completed", authAdmin, getCompletedBooking)
router.get("/cancelled", authAdmin, getCancelledBooking)
router.patch("/:id", authAdmin, updateBooking)

module.exports = router