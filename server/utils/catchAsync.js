import httpStatus from "http-status";
import _ from "lodash";

const VALIDATION_ERROR = "validation failed";
const DUPLICATE_KEY = "duplicate key error";
const INCORRECT_PASSWORD = "incorrect email or password";

const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    const errorStatus = getErrorStatus(err.message);
    res.status(errorStatus).send({
      message: err.message,
    });
  });
};

const getErrorStatus = (message) => {
  if (_.includes(message.toLowerCase(), VALIDATION_ERROR)) {
    return httpStatus.UNPROCESSABLE_ENTITY;
  }
  if (_.includes(message.toLowerCase(), DUPLICATE_KEY)) {
    return httpStatus.CONFLICT;
  }
  if (_.includes(message.toLowerCase(), INCORRECT_PASSWORD)) {
    return httpStatus.UNAUTHORIZED;
  }
  return httpStatus.BAD_REQUEST;
};

export { catchAsync };
