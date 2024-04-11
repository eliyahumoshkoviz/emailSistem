const userModel = require("../models/user.model");
require("../models/chat.model");

async function create(data) {
  return await userModel.create(data);
}
// async function read(filter, projection, populate) {
//   let query = await userModel
//     .find({ ...filter, isActive: true }, projection)
//     .populate(populate?.chats && "chats.chat")
//   return Promise.all(
//     query.map(async (c) => await c.populate(populate?.users && "chats.chat.to"))
//   );
// }

async function readOne(filter, select ='', populate = {}) {
  let query = await userModel.findOne(filter, select);
  if (populate && populate.chats && query) await query.populate("chats.chat");
  if (populate && populate.users && query) await query?.populate('chats.chat.to');
  return query?.toObject();
}

async function update(id, data) {
  // כמו findOne מחזיר את האוביקט ולא רק כמה הוגדר
  return await userModel.findByIdAndUpdate({ _id: id }, data, { new: true });
}
async function del(id) {
  return await update(id, { isActive: false });
}

module.exports = { create, readOne, update, del };
