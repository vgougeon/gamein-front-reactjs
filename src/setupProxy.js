const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  console.log("PROXY")
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // remove base path
      },
    })
  );
};