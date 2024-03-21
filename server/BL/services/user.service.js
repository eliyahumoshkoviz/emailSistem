const { read, create, readOne, update,del } = require("../../DL/controllers/user.conntroller");

async function createUser(data) {
  return await create(data);
}
const getAll = async (filter) => {
  return await read(filter);
};

const getOne = async (filter) => {
  return await readOne(filter);
};

const updateFilde = async (filter, data) => {
  return await update(filter, data);
};
const delUser = async (id) => {
  return await del(id);
};



module.exports = { getAll, createUser,getOne, updateFilde,delUser };
