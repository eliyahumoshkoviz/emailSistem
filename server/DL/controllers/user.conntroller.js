const userModle = require("../models/user.model");

async function create(data) {
  return await userModle.create(data);
}
async function read(filter) {
  return await userModle.find({ ...filter, isActive: true });
}
async function readOne(filter) {
  return await userModle.findOne({ ...filter, isActive: true });
}
async function update(id, data) {
  // כמו findOne מחזיר את האוביקט ולא רק כמה הוגדר
  //   return await userModle.findOneAndUpdate({ _id: id }, data, { new: true });
  return await userModle.findByIdAndUpdate(id, data, { new: true });
}
async function del(id) {
  return await update(id, { isActive: false });
}

module.exports = { create, read, readOne, update, del };
