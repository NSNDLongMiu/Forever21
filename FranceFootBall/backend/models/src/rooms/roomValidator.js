let raiseErr = async (req) => {
    let errors = await req.getValidationResult();
    if (!errors.isEmpty()) {
      let err = errors.array();
      let firstError = err.map(error => error.msg)[0];
      return firstError
    }
    return null;
  }
  
  let roomValidator = async (req) => {
    req.check('nameCustomer', 'Yêu cầu nhập tên!').not().isEmpty();
    req.check('phoneCustomer', 'Yêu cầu nhập số điện thoại!').not().isEmpty();
    req.check('timeRental', 'Yêu cầu nhập thời gian thuê!').not().isEmpty();
    req.check('timeRental', 'Thời gian thuê phải là sô!').isNumeric();
  
    //check for errors
    return await raiseErr(req);
  }
  
  module.exports = {
    roomValidator,
  };