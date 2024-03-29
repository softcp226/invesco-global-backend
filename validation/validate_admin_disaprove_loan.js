const Joi = require("joi");
const validate_admin_disaprove_loan = (req) => {
  const schema = Joi.object({
    admin: Joi.string().required().max(1000),
    loan_request: Joi.string().required().max(1000),
  });
  const result = schema.validate({
    admin: req.admin,
    loan_request: req.loan_request,
  });
  if (result.error) return result.error.message;
  return true;
};
module.exports = validate_admin_disaprove_loan;
