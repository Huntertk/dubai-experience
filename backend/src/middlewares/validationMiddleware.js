const { body, param, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const AppError = require('../error/customError');


const withValidationErrors = (validateValues) => {
    return [
        validateValues,
        (req, res, next) => {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                const errorMessages = errors.array().map((error) => error.msg);
                throw new AppError(errorMessages[0],400)
            }
            next()
        }
    ] 
}



const validateIdParam = withValidationErrors([
    param('id')
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage('invalid MongoDB id'),
])

const validateBookingDataInput = withValidationErrors([
  body('adultCount')
    .notEmpty()
    .isNumeric()
    .withMessage('adult is required')
    .isFloat({ min: 0, max: 10 })
    .withMessage('Only 10 adult ticket book once or atleast 1'),
  body('childCount')
    .notEmpty()
    .isNumeric()
    .withMessage('adult is required')
    .isFloat({ min: 0, max: 10 })
    .withMessage('Only 10 child ticket book once or atleast 1'),
  body('bookingDate')
    .notEmpty()
    .withMessage('Booking Date is required'),
  body('prefrence')
    .notEmpty()
    .withMessage('preference is required'),
  body('name')
    .notEmpty()
    .withMessage('Name is required'),
  body('mobileNumber')
    .notEmpty()
    .withMessage('mobile Number is required'),
    body('tourId')
    .notEmpty()
    .withMessage('Tour Id is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),
]);

const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),
  body('password')
    .notEmpty()
    .withMessage('password is required'),
]);


// const validateOwner = async (req, res, next) => {
//   try {
//     const job = await Job.findById(req.params.id)
//     if(!job){
//       return next(new BadRequestError(`No Job Found with this id ${req.params.id}`))
//     }
//     const isAdmin = req.user.role === 'admin';
//     const isOwner = req.user.userId === job.createdBy.toString();
//     if (!isAdmin && !isOwner){
//       return next(new BadRequestError(`You are not authorize to access this job`))
//     }
//     next()
//   } catch (error) {
//     next(error)
//   }
// }


module.exports = {
    validateIdParam,
    validateLoginInput,
    validateBookingDataInput
}