let express = require("express");
let router = new express.Router();

let {
  createPost,
  getPost,
  updatePost,
  deletePost,
} = require("./postsServices");
let {postValidator} = require("./postsValidator");

router.post("/", async (req, res, next) => {
  try {
    let titlePost = req.body.title;
    let imagePost = req.body.image;
    let contentPost = req.body.content;
    let posterPost = req.body.poster;
    let namePost = req.body.name

    let validator = await postValidator(req);
    if (validator !== null) {
      return res.send({success: "2", message: validator});
    }
    let result = await createPost(titlePost , imagePost , contentPost, posterPost , namePost);
    return res.send({
      success: "1",
      message: "Create successfully.",
      data: result
    });
  } catch (error) {
    return res.status(500).send({success: "3",error: "Server Error"});
  }
});

router.get("/:postId", async (req, res, next) => {
  try {
    let {postId} = req.params;
    let result = await getPost(postId);
    if (result === null) {
      return res.status(404).send({message: "Not found Post"});
    }
    return res.send({result});
  } catch (error) {
    return res.status(500).send({error: "Server Error"});
  }
});

router.put("/update/:postId", async (req, res, next) => {
  try {
    let {posterPost} = req.params;
    let titlePost = req.body.title;
    let contentPost = req.body.content;

    let validator = await postValidator(req);
    if (validator !== null) {
      return res.send({message: validator});
    }

    let result = await updatePost(postId, titlePost, contentPost, posterPost ,  imagePost , namePost);
    if (result === null) {
      return res.status(404).send({message: "Not found Post"});
    }
    return res.send({
      message: "Update successfully.",
      data: result
    });
  } catch (error) {
    return res.status(500).send({error: "Server Error"});
  }
});

router.delete("/delete/:poster", async (req, res, next) => {
  try {
    let {poster} = req.params;
    let result = await deletePost(poster);
    if (result === null) {
      return res.status(404).send({success: "2",message: "Poster không tồn tại"});
    }
    return res.send({
      success: "1",
      message: "Delete successfully.",
      data: result
    });
  } catch (error) {
    return res.status(500).send({error: "Server Error"});
  }
});

module.exports = router;