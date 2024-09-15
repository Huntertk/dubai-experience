import { NextFunction, Request, Response, Router } from "express";
import { getAdminData, loginAdmin, logoutAdmin, registerAdmin } from "../controllers/adminController";
import { authAdmin, authorizeRoles } from "../middlewares/authMiddleware";
import { body, validationResult } from "express-validator";
import AppError from "../error/customError";

const router = Router();

router.post('/register', 
    authAdmin,
    authorizeRoles('admin'),
    [
        body('email')
        .notEmpty()
        .withMessage("Please provide email")
        .isEmail()
        .withMessage('Invalid email format'),
        body('password')
        .notEmpty()
        .withMessage('password is required')
        .isLength({ min: 8 })
        .withMessage('password must be at least 8 characters long'),
    ],
    (req:Request, res:Response, next:NextFunction) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const errorMessages = errors.array().map((error) => error.msg);
            throw new AppError(errorMessages[0],400)
        }
        next()
    },
    registerAdmin
)
router.post('/login', 
    [
        body('email')
        .notEmpty()
        .withMessage("Please provide email")
        .isEmail()
        .withMessage('Invalid email format'),
        body('password')
        .notEmpty()
        .withMessage('password is required'),
    ],
    (req:Request, res:Response, next:NextFunction) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const errorMessages = errors.array().map((error) => error.msg);
            throw new AppError(errorMessages[0],400)
        }
        next()
    },
    loginAdmin
)

router.get('/logout', logoutAdmin)
router.get('/admin-data', authAdmin, authorizeRoles('admin'), getAdminData)

export default router;