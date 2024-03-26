const emailModel = require('../models/email.model')
require('../models/email.model')

// CRUD
async function create(data) {
    return await emailModel.create(data)
}

async function read(filter) {
    return await emailModel.find(filter).populate("msg")
}

async function readOne(filter) {
    return await emailModel.findOne(filter).populate("msg")
}

async function update(id, data) {
    return await emailModel.findByIdAndUpdate(id, data, { new: true })
}


module.exports = { create, read, readOne, update }