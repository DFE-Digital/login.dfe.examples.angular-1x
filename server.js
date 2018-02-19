const express = require('express');
const https = require('https');
const config = require('./config');

const app = express();
app.use(express.static('src'));

const options = {
  key: config.hostingEnvironment.sslKey,
  cert: config.hostingEnvironment.sslCert,
  requestCert: false,
  rejectUnauthorized: false
};
const server = https.createServer(options, app);

server.listen(config.hostingEnvironment.port, () => {
  console.info(`Dev server listening on https://localdev:${config.hostingEnvironment.port}`);
});