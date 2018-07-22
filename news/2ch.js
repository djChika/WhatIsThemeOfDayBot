const axios = require('axios');


function request_news() {
    url = 'https://2ch.hk/news/catalog.json';
    return axios.get(url);
}

function parse_news(data) {
    const base_url = 'https://2ch.hk';
    const post_base_url = 'https://2ch.hk/news/res/';

    let news = data.threads[Math.floor(Math.random() * 10) + 2];

    let subject = news['subject'];
    let comment = news['comment'];
    let picture = base_url + news['files'][0]['path'];
    let post_url = post_base_url + news['num'] + '.html';
    return {
        subject: subject,
        picture: picture,
        comment: comment,
        link: post_url
    }
    //console.log(subject);
}


module.exports = {
    request_news, parse_news
};

