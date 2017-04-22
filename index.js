const fetch = require('node-fetch');
const xml2js = require('xml2js');

const sorter = require('./sorter').sorter;

const parseString = new xml2js.Parser().parseString;

fetch('http://yourmomshousepodcast.libsyn.com/rss')
.then(res => res.text())
.then(rssXml => {
  return new Promise(resolve => {
    parseString(rssXml, (err, result) => {
       resolve(result);
    });
  });
})
.then(rssJson => {
  rssJson.rss.channel[0].item.sort(sorter);

  console.log(rssJson.rss.channel[0].item);
});
