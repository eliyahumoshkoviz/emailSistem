const chatModel = require('../models/chat.model')
require('../models/chat.model')

// CRUD
async function create(data) {
    return await chatModel.create(data)
}


async function read(filter) {
    return await chatModel.find(filter)
        .populate({ path: 'to', select: 'fullName' })
        .populate('msg.from')
}

async function readOne(filter) {
    return await chatModel.findOne(filter)
        .populate({ path: 'to', select: 'fullName' })
        .populate('msg.from');
}


async function update(id, data) {
    return await chatModel.findByIdAndUpdate({ _id: id }, data, { new: true })
}

async function del(id) {
    return await chatModel.deleteOne({ _id: id });
}

module.exports = { create, read, readOne, update, del }