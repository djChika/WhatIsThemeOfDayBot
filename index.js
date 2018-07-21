const Telegraf = require('telegraf');
const settings = require('./settings');
const axios = require('axios');

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


bot.command('news', ctx => {
    url = 'https://2ch.hk/news/catalog.json';
    axios.get(url).then(response => {
        base_url = 'https://2ch.hk';
        post_base_url = 'https://2ch.hk/news/res/';

        let news = response.data.threads[Math.floor(Math.random() * 5) + 2];

        let subject = news['subject'];
        let comment = news['comment'];
        let picture = base_url + news['files'][0]['path'];
        let post_url = post_base_url + news['num'] + '.html';

        ctx.reply(subject);
        ctx.replyWithPhoto(picture);
        ctx.reply('Подробнее: ' + post_url)
    }).catch(error => {
        console.log(error);
    });
});

bot.startPolling();