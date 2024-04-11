const chatModel = require('../models/chat.model')
require('../models/chat.model')

// CRUD
async function create(data) {
    return await chatModel.create(data)
}


async function read(filter, select = '', toPopulate = 'to', fromPopulate = 'msg.from') {
    return await chatModel.find(filter, select)
        .populate(toPopulate)
        .populate(fromPopulate);
};

async function readOne(filter, select = '', toPopulate = 'to', fromPopulate = 'msg.from') {
    return await chatModel.findOne(filter, select)
        .populate(toPopulate)
        .populate(fromPopulate);
};



async function update(id, data) {
    return await chatModel.findByIdAndUpdate({ _id: id }, data, { new: true })
}

// async function del(id) {
//     return await chatModel.deleteOne({ _id: id });
// }

module.exports = { create, read, readOne, update }