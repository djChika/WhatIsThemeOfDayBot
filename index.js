const Telegraf = require('telegraf');
const settings = require('./config/settings');
const Dvach = require('./news/2ch');

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


function send_news(ctx, subject, picture, link) {
    ctx.reply(subject);
    ctx.replyWithPhoto(picture);
    ctx.reply('Подробнее: ' + link);

    //console.log('Subject: ' + subject);
    //console.log('photo: ' + photo);
    //console.log('link: ' + link);
}

bot.command('news', ctx => {
    Dvach.request_news().then(function (response) {
        let news = Dvach.parse_news(response.data);
        send_news(ctx, news.subject, news.picture, news.link);

        //TODO
        ctx.getChat().then(chat => {
            ctx.telegram.setChatTitle(chat.id, news.subject);
        });
    });
});


bot.startPolling();