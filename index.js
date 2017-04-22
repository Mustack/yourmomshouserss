const fetch = require('node-fetch');
const xml2js = require('xml2js');
const _ = require('lodash');
const moment = require('moment');

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

  rssJson.rss.channel[0].item.forEach(item => {
    if (item.pubDate[0] === 'Mon, 17 Oct 2016 00:00:00 +0000') {
      const epNum = Number(item.title[0].match(/\d+/g)[0]);
      const newTime = moment('Mon, 17 Oct 2016 00:00:00').add(epNum, 'minutes');

      item.pubDate[0] = newTime.format('ddd, DD MMM YYYY HH:mm:ss') + ' +0000';
    }

    console.log(item);
  });
});
