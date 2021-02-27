let raiseErr = async (req) => {
  let errors = await req.getValidationResult();
  if (!errors.isEmpty()) {
    let err = errors.array();
    let firstError = err.map(error => error.msg)[0];
    return firstError
  }
  return null;
}

let postValidator = async (req) => {
  req.check('title', 'Chưa nhập bài viết').not().isEmpty();
  req.check('image', 'Chưa nhập link ảnh').not().isEmpty();
  req.check('content', 'Chưa nhập tiêu đề').not().isEmpty();
  req.check('content', 'Tiêu đề phải nhỏ hơn 255 ký tự').isLength({max: 255});
  req.check('poster', 'Chưa nhập số post').not().isEmpty();
  req.check('poster', 'Post chỉ là số').isNumeric();

  //check for errors
  return await raiseErr(req);
}

module.exports = {
  postValidator,
};