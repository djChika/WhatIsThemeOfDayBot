const Telegraf = require('telegraf');
const settings = require('./config/settings');
const messages = require('./services/messages');
const chatManager = require('./services/chatManager');

const Dvach = require('./news/2ch');

const bot = new Telegraf(settings.token, settings.options);

bot.telegram.getMe().then(botinfo => {
    bot.options.username = botinfo.username
});

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


bot.command('news', ctx => {
    Dvach.request_news().then(function (response) {
        let news = Dvach.parse_news(response.data);
        messages.send_news(ctx, news.subject, news.picture, news.link);
        chatManager.set_title(ctx, news.subject);
    });
});

bot.startPolling();