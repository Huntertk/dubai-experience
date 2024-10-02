import { Router } from "express";
import { authAdmin, authorizeRoles } from "../middlewares/authMiddleware";
import multer from "multer";
import { addQr, addSingleQr, deleteSingleQr, getAllTicketQr } from "../controllers/qrController";

// File upload configuration
const upload = multer({ dest: './uploads' })

const router = Router();


router.post('/add', authAdmin, authorizeRoles('admin'), upload.single('qrFile'), addQr);
router.post('/create', authAdmin, authorizeRoles('admin'), addSingleQr);
router.post('/delete', authAdmin, authorizeRoles('admin'), deleteSingleQr);
router.get('/ticket-qr', authAdmin, authorizeRoles('admin'), getAllTicketQr);

export default router;