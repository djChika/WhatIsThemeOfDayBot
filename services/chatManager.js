function set_title(ctx, newTitle) {
    //TODO
    ctx.getChat().then(chat => {
        ctx.telegram.setChatTitle(chat.id, newTitle);
    });
}

module.exports = {set_title};