const messageModel = require("../models/message.model");
const userModle = require("../models/user.model");
require("../models/email.model");

async function create(data) {
  return await userModle.create(data);
}
async function read(filter) {
  return await userModle
    .find({ ...filter, isActive: true })
    .populate("emails.email");
}
async function readOne(filter, projection, populate={ path: "emails.email", populate: { path: "msg"}}) {
  return await userModle
    .findOne({ ...filter, isActive: true }, projection)
    .populate(populate);
}


async function update(id, data) {
  // כמו findOne מחזיר את האוביקט ולא רק כמה הוגדר
  //   return await userModle.findOneAndUpdate({ _id: id }, data, { new: true });
  return await userModle.findByIdAndUpdate({ _id: id }, data, { new: true });
}
async function del(id) {
  return await update(id, { isActive: false });
}

module.exports = { create, read, readOne, update, del };
