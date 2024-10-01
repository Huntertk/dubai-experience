import { NextFunction, Request, Response, Router } from "express";
import { authAdmin, authorizeRoles } from "../middlewares/authMiddleware";
import { body, validationResult } from "express-validator";
import AppError from "../error/customError";
import { createTicket, deleteTicket, getAllTickets, getAllTicketTitleAndService, getTicket, getTicketsByService, updateTicket } from "../controllers/ticketController";

const router = Router();

router.post('/create', 
    authAdmin,
    authorizeRoles('admin'),
    [
        body('title')
        .notEmpty()
        .withMessage("Please provide ticket title"),
        body('description')
        .notEmpty()
        .withMessage("Please provide ticket description"),
        body('service')
        .notEmpty()
        .withMessage("Please provide ticket service"),
        body('images')
        .notEmpty()
        .withMessage("Please provide ticket images"),
        body('preference')
        .notEmpty()
        .withMessage("Please provide ticket preference"),
        body('pricing')
        .notEmpty()
        .withMessage("Please provide ticket pricing"),
        body('inclusionAndExclusion')
        .notEmpty()
        .withMessage("Please provide ticket inclusionAndExclusion"),
        body('rulesAndRestriction')
        .isArray()
        .notEmpty()
        .withMessage("Please provide ticket rulesAndRestriction"),
        
    ],
    (req:Request, res:Response, next:NextFunction) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const errorMessages = errors.array().map((error) => error.msg);
            throw new AppError(errorMessages[0],400)
        }
        next()
    },

    createTicket
)


router.get('/get-all-tickets',
    authAdmin,
    authorizeRoles("admin"),    
    getAllTickets
)

router.put('/update-ticket/:id',
    authAdmin,
    authorizeRoles("admin"),    
    updateTicket
)
router.delete('/delete-ticket/:id',
    authAdmin,
    authorizeRoles("admin"),    
    deleteTicket
)
router.get('/get-ticket-title-service',
    authAdmin,
    authorizeRoles("admin"),
    getAllTicketTitleAndService
)

router.get('/get-service-tickets', getTicketsByService)
router.get('/get-ticket', getTicket)

export default router;