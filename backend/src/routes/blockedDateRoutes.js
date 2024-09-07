const { Router } = require("express");
const { authAdmin, authorizeRoles } = require("../middlewares/authMiddleware.js");
const { addBlockDates, deleteBlockedDate, getAllBlockDates } = require("../controllers/blockedDateController.js");
const { addBlockTimeSlot, getBlockedTimeSlot } = require("../controllers/blockedTimeSlotController.js");

const router = Router()

router.route('/').post(authAdmin, authorizeRoles('admin'), addBlockDates).get(getAllBlockDates)
router.delete('/:id', authAdmin, authorizeRoles('admin'), deleteBlockedDate)

//blocking time slot
router.post('/block-time-slot',authAdmin, authorizeRoles('admin'), addBlockTimeSlot)
router.get('/get-blocked-date-time-slot', getBlockedTimeSlot)
module.exports = router;