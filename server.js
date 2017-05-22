const fetch = require('node-fetch');
const Hapi = require('hapi');

const processRss = require('./processRss');

function getProcesedRss(request, reply) {
  const processedRss = fetch('http://yourmomshousepodcast.libsyn.com/rss')
    .then(res => res.text())
    .then(processRss);

  reply(processedRss);
}

const server = new Hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: process.env.PORT || 3000
});

server.route({
    method: 'GET',
    path: '/',
    config: {
        handler: getProcesedRss,
    }
});

server.start(function () {
    console.log('Server started at [' + server.info.uri + ']');
});
