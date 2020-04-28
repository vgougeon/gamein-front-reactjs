const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api/',
    createProxyMiddleware({
      target: 'http://54.37.228.12/api',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // remove base path
      },
    })
  );
};