const userController = require('../DL/controllers/user.controller')

async function getInbox(userId) {

    let user = await userController.readOne({ _id: userId }, {
        chats: true, users: true
    })
    let chats = user.chats
        .filter(c => c.isRecieved)
        .map(cc => {
            return {
                ...cc,
                avatar: cc.chat.to[0].avatar,
                title: `${cc.chat.to[0].fullName}, ${cc.chat.to[1]?.fullName} +6`

            }
        })
    return chats

}

module.exports = { getInbox }