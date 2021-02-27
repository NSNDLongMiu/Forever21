let {User} = require("./userModels")
let bcrypt = require('bcrypt')
let {Room} = require("../rooms/roomModels")

let findUser = async (body) => {
  return await User.findOne({
    where: {
      email: body.email,
    },
  });
}

let register = async (body) => {
  let user = await findUser(body);
  if(user == null){ 
    bcrypt.hash(body.password, 10, async (err, hash) => {
      if (err) {return next(err);}
      await User.create({
        username: body.username,
        email: body.email,
        role: "customer",
        password: hash,
      });
    })
    return true;
  }else{
    return false;
  }
}

let registeradmin = async (body) => {
    if (err) {return next(err);}
    await Room.create({
      nameRoom: body.nameRoom ,
      content: body.content ,
      blog: body.blog ,
      imageRoom: body.imageRoom ,
      nameCustomer: body.nameCustomer ,
      PhoneCustomer: body.PhoneCustomer ,
      role: "customer",
      
    });
  return true;
}


let signIn = async (req) => {
  let user = await findUser(req.body);
  if (user === null) {
    return false;
  } else {
    let comparePass = await bcrypt.compare(req.body.password, user.password);
    if (comparePass === false) {
      return false;
    } else {
      req.session.user = user;
      return true;
    }
  }
};

let isLogging = async (req) => {
  if (req.session && req.session.user) {
    return true;
  } else {
    return false;
  }
}


module.exports = {
  registeradmin,
  register,
  signIn,
  isLogging,
};