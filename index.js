const fetch = require('node-fetch');
const xml2js = require('xml2js');
const _ = require('lodash');

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
  // const filtered = _.filter(rssJson.rss.channel[0].item, item => item.pubDate[0] === 'Mon, 17 Oct 2016 00:00:00 +0000');
  //
  // filtered.sort(sorter);
  //
  // filtered.forEach(item => console.log(item.title[0]))

  rssJson.rss.channel[0].item.sort(sorter);

  console.log(rssJson.rss.channel[0].item);
});
