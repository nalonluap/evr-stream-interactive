const axios = require('axios').default;
const Users = require('../models/Users');

const socket_host = "http://localhost:3001";



exports.MessageFromTwitch = (user, message, channel) => {

    const socketID = await getChannelID(channel);

    axios.post(socket_host + '/message', {
        username: user,
        message: message,
        socketID: socketID 
    })

}



async function getChannelID(channel) {
    return await Users.findAll({
        attributes: ["socketID"],
        where: {
            channel: channel,
        },
        plain: true,
    });
}