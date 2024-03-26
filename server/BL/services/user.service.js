const {
  create,
  read,
  readOne,
  update,
  del,
} = require("../../../server/DL/controllers/user.conntroller");

const getEmailsUser = async (id, field) => {
  return await readOne({ _id: id}, field && { [field]: 1 }, {
    path: "emails.email",
    populate: { path: "msg", options: { sort: { _id: -1 }, limit: 1 } },
  });
};

module.exports = { getEmailsUser };
