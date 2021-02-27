let raiseErr = async (req) => {
    let errors = await req.getValidationResult();
    if (!errors.isEmpty()) {
      let err = errors.array();
      let firstError = err.map(error => error.msg)[0];
      return firstError
    }
    return null;
  }
  let registeradminValidator = async (req) => {
    req.check('nameRoom', 'Yêu cầu nhập mã bài viết').not().isEmpty();
    req.check('nameCustomer', 'Yêu cầu nhập tên người đăng').not().isEmail();
    req.check('content', 'Yêu cầu nhập tiêu đề').not().isEmpty();
    req.check('blog', 'Yêu cầu nhập bài viết').not().isEmpty();
    req.check('imageRoom', 'Yêu cầu nhập link ảnh').not().isEmpty();
    req.check('PhoneCustomer', 'Yêu cầu nhập số điện thoại').not().isEmpty();
    //check for errors
    return await raiseErr(req);
  }

  let registerValidator = async (req) => {
    req.check('email', 'Yêu cầu nhập email').not().isEmpty();
    req.check('email', 'Email không hợp lệ').isEmail();
    req.check('username', 'Yêu cầu nhập tên người dùng').not().isEmpty();
    req.check('username', 'Tên người dùng phải lớn hơn 2 kí tự').isLength({min:3});
    req.check('password', 'Yêu cầu nhập password').not().isEmpty();
    req.check('password', 'Mật khẩu phải lớn hơn 6 kí tự').isLength({min:6});
    req.check('password_confirmation', 'Yêu cầu nhập lại mật khẩu').not().isEmpty();
    req.check('password_confirmation','Mật khẩu không giống nhau').equals(req.body.password);
    //check for errors
    return await raiseErr(req);
  }
  
  let loginValidator = async (req) => {
    req.check('email', 'Yêu cầu nhập email').not().isEmpty();
    req.check('email', 'Email không hợp lệ').isEmail();
    req.check('password', 'Yêu cầu nhập password').not().isEmpty();
    req.check('password', 'Mật khẩu phải nhiều hơn 6 kí tự').isLength({min:6});
  
    //check for errors
    return await raiseErr(req);
  }
  module.exports = {
    registeradminValidator,
    registerValidator,
    loginValidator,
  };