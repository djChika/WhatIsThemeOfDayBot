function getProxy() {
    let list = [
        {
            ip: '94.130.211.41',
            port: 1080
        },
        {
            ip: '217.160.95.120',
            port: 48849
        },
        {
            ip: '192.169.218.61',
            port: 13660
        },
        {
            ip: '159.89.133.29',
            port: 2018
        },
        {
            ip: '122.118.50.210',
            port: 1080
        },
        {
            ip: '67.205.173.56',
            port: 2018
        },
    ];

    //let proxy = list[Math.floor(Math.random() * list.length)];
    let proxy = list[0];
    console.log("Using proxy: " + proxy.ip+":"+proxy.port);
    return proxy;
}

module.exports = getProxy();