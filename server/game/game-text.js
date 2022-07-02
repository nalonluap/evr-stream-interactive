const Registration = require('../models/Registration');
const log = require('../modules/logger');
const socket = require('../modules/socket');

//in this func we heva all chat message
exports.OnMessageInTwitchChat = async (user, message, channel) => {
    try {
        let chat_message = message.trim().slice(6, message.length);
        const reg_users = await GetRegisteredUser(channel);

        console.log(reg_users);

        if (reg_users.includes(user)) {
            socket.MessageFromTwitch(user, message, channel);
            console.log(`${channel} ${user}: ${chat_message}`)
        }
    }
    catch (error) {
        log.error(`Error game module game-text func OnMessageInTwitchChat ${error.message}`);
    }
}

exports.OnMessageRegistered = async (user, channel) => {
    try {
        let check_user = await Registration.findAll({
            where: {
                channel: channel,
                username: user
            }
        });

        if (check_user != []) {

            await Registration.create({
                channel: channel,
                username: user
            });

            console.log(`${channel}: ${user}`)
        }
    }
    catch (error) {
        log.error(`Error game module game-text func OnMessageRegistered ${error.message}`);
    }


}

exports.OnMessageNewGame = async (channel) => {
    try {
        await Registration.destroy({
            where: {
                channel: channel
            }
        });
    } catch (error) {
        log.error(`Error game module game-text func OnMessageNewGame ${error.message}`);
    }
}



async function GetRegisteredUser(channel) {
    try {
        const reg_users = await Registration.findAll({
            attributes: ["username"],
            where: {
                channel: channel
            },
        }).then(users => users.map(u => u.get("username")));

        return reg_users;
    } catch (err) {
        log.error(`Error in game module game-text func GetRegisteredUser ${err.message}`);
    }
}