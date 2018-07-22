function send_news(ctx, subject, picture, link) {
    ctx.reply(subject);
    ctx.replyWithPhoto(picture);
    ctx.reply('Подробнее: ' + link);
}

module.exports = {
    send_news
};