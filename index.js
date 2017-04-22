const fetch = require('node-fetch');
const xml2js = require('xml2js');

const parseString = new xml2js.Parser().parseString;

fetch('http://yourmomshousepodcast.libsyn.com/rss')
.then(res => res.text())
.then(rssXml => parseString(rssXml))
.then(rssJson => console.log(rssJson));
