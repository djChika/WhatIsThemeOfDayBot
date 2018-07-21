const socksAgent = require('./agent');
const token = require('./token');


options = {
    telegram: {
        agent: socksAgent,
    },
    username: '',
    channelMode: false,
};

module.exports = {token, options};