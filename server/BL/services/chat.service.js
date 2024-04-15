const { create, read, readOne, update } = require("../../../server/DL/controllers/chat.controller");

async function createChat(data) {
    let res = await create(data)
    console.log("new Email created:", res);
    return res;
}

async function readChats(filter) {
    let res = await read(filter)
    console.log("recieve messages: ", res);
    return res;

}

async function getChat(id, select = "", populate = {}) {
    return await readOne({ _id: id }, select, populate)
}

async function updateChat(id, data) {
    let res = await update(filter)
    console.log("recieve message: ", res);
}



module.exports = { createChat, getChat, readChats, updateChat };













