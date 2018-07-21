const Telegraf = require('telegraf');
const settings = require('./settings');

const bot = new Telegraf(settings.token, settings.options);

bot.start((ctx => ctx.reply('Welcome')));

bot.command('modern', ({reply}) => reply('Yo'));

bot.hears('hi', ctx => {
    return ctx.reply('Hey!');
});


bot.startPolling();