let {User} = require("../users/userModels")
let {Room} = require("./roomModels")

let findOneModelUser = async (model, username) => {
    return await model.findOne({
      attributes: {exclude: ["password", "role"]},
      where: {
        username: username,
      },
    });
}
let findOneModelRoom = async (model, nameRoom) => {
    return await model.findOne({
      attributes: {exclude: ["role"]},
      where: {
        nameRoom: nameRoom,
      },
    });
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

let getRoom = async (nameRoom) => {
    let getRoom = await findOneModelRoom(Room, nameRoom);
    if (getRoom === null) {
      return null
    }
    let getUser = null;
    if (getRoom !== null) {
      getUser = await findOneModelUser(User, getRoom.nameCustomer);
    }
    return {
      room: getRoom,
      nameCustomer: getUser
    };
}

let updateRoom = async (nameROOM, content , blog , statesROOM, nameCUSTOMER, phoneCUSTOMER, timeRENTAL, totalMONEY) => {
    let getRoom = await findOneModelRoom(Room, nameROOM);
    if (getRoom === null) {
      return null
    }
    await Room.update({
      content : content ,
      blog : blog ,
      states: statesROOM,
      nameCustomer: nameCUSTOMER,
      phoneCustomer: phoneCUSTOMER,
      timeRental: timeRENTAL,
      totalMoney: totalMONEY,
    }, {
      where: {
        nameRoom: nameROOM
      }
    })
    let result = await findOneModelRoom(Room, nameROOM);
    return result
}

let resetRoom = async (nameROOM) => {
    let getRoom = await findOneModelRoom(Room, nameROOM);
    if (getRoom === null) {
      return null
    }
    await Room.update({
      blog : "" ,
      content : "",
      states: "unBooked",
      nameCustomer: "",
      phoneCustomer: 0,
      timeRental: 0,
      totalMoney: 0,
    }, {
      where: {
        nameRoom: nameROOM
      }
    })
    let result = await findOneModelRoom(Room, nameROOM);
    return result
}

module.exports = {
    getRoom,
    updateRoom,
    resetRoom,
    registeradmin ,
};