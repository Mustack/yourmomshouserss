const fetch = require('node-fetch');

fetch('http://yourmomshousepodcast.libsyn.com/rss')
.then(res => res.text())
.then(x=>console.log(x));
