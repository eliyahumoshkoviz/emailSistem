const { create, readOne, update, del, } = require("../../../server/DL/controllers/user.conntroller");

const getChatsUser = async (id, select = "", flag = "", populate = {}, getLastMsg = true) => {

  const query = await readOne({ _id: id }, select, populate);

  flag && (query.chats = query?.chats.filter(chat => {
    return flag === "notRead" ? chat.isRead === false : chat[flag] === true;
  }));
  

  if (getLastMsg && populate.chats && query) {
    query.chats = await Promise.all(
      query.chats?.map(async (obj) => {
        const chatLastMsg = {
          chat: {
            ...obj.chat,
            msg: [obj.chat.msg[obj.chat.msg.length - 1]],
          },
          isRead: obj.isRead
        };
        chatLastMsg.chat.sendersDetails = await chackDetails(chatLastMsg);
        delete chatLastMsg.chat.msg
        delete chatLastMsg.chat.to
        return chatLastMsg;
      })
    );
  }
  return query;
};

const chackDetails = async (chatLastMsg) => {
  const flag = chatLastMsg.chat.to[0].toString() === chatLastMsg.chat.msg[0].from.toString();

  const nameFirst = await readOne({ _id: chatLastMsg.chat.to[0] }, "fullName");
  const nameLast = !flag && (await readOne({ _id: chatLastMsg.chat.msg[0].from }, "fullName"));
  const lengthTo = flag ? chatLastMsg.chat.to.length - 1 : chatLastMsg.chat.to.length - 2;

  const sendersDetails = `${nameFirst.fullName}${!flag ? ', ' + nameLast?.fullName : ""}${lengthTo > 0 ? ' + ' + lengthTo : ""}`;
  return sendersDetails;
};

module.exports = { getChatsUser };
