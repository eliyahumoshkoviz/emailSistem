const {
  create,
  read,
  readOne,
  update,
  del,
} = require("../../../server/DL/controllers/user.conntroller");


const getChatsUser = async (id, field = "", sort = "", populate = {}, getLastMsg = true) => {

  const query = await readOne({ _id: id }, field, populate);
  sort && (query.chats = query.chats?.filter(obj => obj[sort] === sort === "notRead" ? false : true));
  if (getLastMsg && populate.chats && query){
    query.chats = query.chats?.map(obj => ({
      chat: {
        ...obj.chat,
        msg: [obj.chat.msg[obj.chat.msg.length - 1]],
        newField: 'newValue' 
      }
    }))
  }
  return query;
};




module.exports = { getChatsUser };
