const Telegraf = require('telegraf');
const settings = require('./settings');

const bot = new Telegraf(settings.token, settings.options);

bot.start((ctx => ctx.reply('Welcome')));

bot.command('title', ctx => {
    ctx.getChat().then(
        chat => {
            ctx.telegram.setChatTitle(chat.id, "NewTitleOfChat")
        }
    )
});

bot.command('chatid', ctx => {
    ctx.getChat().then(chat => console.log(chat.id));
});

bot.startPolling();