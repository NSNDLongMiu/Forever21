let {User} = require("../users/userModels")
let {Post} = require("./postsModels")

let findOneModel = async (model, id) => {
  return await model.findOne({
    attributes: {exclude: ["password", "role"]},
    where: {
      id: id,
    },
  });
}

let createPost = async (title,image , content, poster , name) => {
  let result = await Post.findOrCreate({
    where: {
      title: title,
      image : image ,
      content: content,
      poster: poster,
      name: name ,
    }
  });
  return result[0];
}

let getPost = async (postId) => {
  let getPost = await findOneModel(Post, postId);
  if (getPost === null) {
    return null
  }
  let getUser = null;
  if (getPost !== null) {
    getUser = await findOneModel(User, getPost.poster);
  }
  return {
    post: getPost,
    poster: getUser
  };
}

let updatePost = async (postId, titlePost, contentPost, posterPost) => {
  let getPost = await findOneModel(Post, postId);
  if (getPost === null) {
    return null
  }
  await Post.update({
    title: titlePost,
    content: contentPost,
    poster: posterPost,
  }, {
    where: {
      id: postId
    }
  })
  let result = await findOneModel(Post, postId);
  return result
}

let deletePost = async (poster) => {
  let getPost = await findOneModel(Post, poster);
  if (getPost === null) {
    return null
  }
  await Post.destroy({
    where: {
      poster: poster
    }
  })
  return {}
}

module.exports = {
  createPost,
  getPost,
  updatePost,
  deletePost,
};