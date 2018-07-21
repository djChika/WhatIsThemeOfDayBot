const socksAgent = require('./agent');

token = '456311595:AAGBHZsqAmmuaSNUr0fh37mqMRxt6pTKuq0';

options = {
    telegram: {
        agent: socksAgent,
    },
    username: '',
    channelMode: false,
};

module.exports = {token, options};