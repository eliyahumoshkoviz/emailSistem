const chatModel = require('../models/chat.model')
require('../models/chat.model')

// CRUD
async function create(data) {
    return await chatModel.create(data)
}


async function read(filter) {
    return await chatModel.find(filter)
    .populate({path:'to', select: 'fullName'})
    .populate('msg.from')
}

async function readOne(filter) {
    return await chatModel.findOne(filter)
    .populate({path:'to', select: 'fullName'})
    .populate('msg.from');

}

async function update(id, data) {
    return await chatModel.findByIdAndUpdate(id, data, { new: true })
}


module.exports = { create, read, readOne, update }