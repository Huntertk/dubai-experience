const { Router } = require("express");
const { authAdmin, authorizeRoles } = require("../middlewares/authMiddleware.js");
const { addBlockDates, deleteBlockedDate, getAllBlockDates } = require("../controllers/blockedDateController.js");

const router = Router()

router.route('/').post(authAdmin, authorizeRoles('admin'), addBlockDates).get(getAllBlockDates)
router.delete('/:id', authAdmin, authorizeRoles('admin'), deleteBlockedDate)

module.exports = router;