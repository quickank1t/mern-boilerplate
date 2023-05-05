import _ from "lodash";

const VALIDATION_ERROR = "validation failed";
const DUPLICATE_KEY = "duplicate key error";

const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    const errorStatus = getErrorStatus(err.message);
    res.status(errorStatus).send({
      errorMessage: err.message,
    });
  });
};

const getErrorStatus = (message) => {
  if (_.includes(message.toLowerCase(), VALIDATION_ERROR)) {
    return 422;
  }
  if (_.includes(message.toLowerCase(), DUPLICATE_KEY)) {
    return 409;
  }
  return 400;
};

export { catchAsync };
