const { create, read, readOne, update } = require("../../../server/DL/controllers/email.controller");

async function createEmail(data) {
    let res = await create(data)
    console.log("new Email created:", res);
}

async function readEmail(filter) {
    let res = await read(filter)
    console.log("recieve messages: ", res);
}

async function readFirst(filter) {
    let res = await readOne(filter)
    console.log("recieve message: ", res);
}

async function updateEmail(id, data) {
    let res = await update(filter)
    console.log("recieve message: ", res);
}



module.exports = { createEmail, readEmail, readFirst, updateEmail };













