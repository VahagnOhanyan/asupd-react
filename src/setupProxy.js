const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        ['/asupd', '/rest'],
        createProxyMiddleware({
            target: 'http://localhost:8888',
            changeOrigin: true,
            logLevel: 'debug',
        })
    );
};
