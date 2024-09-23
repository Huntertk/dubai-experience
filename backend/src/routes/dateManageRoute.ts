import express from 'express';
import { authAdmin, authorizeRoles } from '../middlewares/authMiddleware';
import { addBlockDates, deleteBlockedDate, getAllBlockDates } from '../controllers/dateManageController';
import { addBlockTimeSlot, deleteBlockTimeSlot, getBlockedTimeSlot } from '../controllers/timeSlotController';

const router = express.Router();

router.route('/block-date').post(authAdmin, authorizeRoles('admin'), addBlockDates).get(getAllBlockDates)
router.delete('/block-date', authAdmin, authorizeRoles('admin'), deleteBlockedDate)

//blocking time slot
router.post('/block-time-slot',authAdmin, authorizeRoles('admin'), addBlockTimeSlot)
router.get('/get-blocked-date-time-slot', getBlockedTimeSlot)
router.post('/delete-blocked-date-time-slot', authAdmin, authorizeRoles('admin'), deleteBlockTimeSlot)

export default router;
