const userModel = require("../models/user.model");
require("../models/chat.model");

async function create(data) {
  return await userModel.create(data);
}
async function read(filter, projection, populate) {
  let query = await userModel
    .find({ ...filter, isActive: true }, projection)
    .populate(populate?.chats && "chats.chat")
  return Promise.all(
    query.map(async (c) => await c.populate(populate?.users && "chats.chat.to"))
  );
}


async function readOne(filter, projection, populate) {
  let query = await userModel.findOne(filter, projection);
  if (populate && populate.chats) {
    populate.getLestMsg ? await query.populate( { path: "chats.chat.msg", options: { sort: { _id: -1 }, limit: 1 } })
      : await query.populate("chats.chat");
  }
  // if (populate && populate.chats) await query.populate("chats.chat");
  if (populate && populate.users) await query.populate("chats.chat.to");
  return query;
}


async function update(id, data) {
  // כמו findOne מחזיר את האוביקט ולא רק כמה הוגדר
  return await userModel.findByIdAndUpdate({ _id: id }, data, { new: true });
}
async function del(id) {
  return await update(id, { isActive: false });
}

module.exports = { create, read, readOne, update, del };
