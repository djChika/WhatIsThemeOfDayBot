const socksAgent = require('./agent');

token = 'token';

options = {
    telegram: {
        agent: socksAgent,
    },
    username: '',
    channelMode: false,
};

module.exports = {token, options};