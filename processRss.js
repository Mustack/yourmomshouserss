const xml2js = require('xml2js');
const _ = require('lodash');
const moment = require('moment');

const sorter = require('./sorter');

const parseString = new xml2js.Parser().parseString;
const builder = new xml2js.Builder();

module.exports = function processRss(rssXml) {
  return new Promise(resolve => {
    parseString(rssXml, (err, result) => {
       resolve(result);
    });
  })
  .then(rssJson => {
    console.log(rssJson)
    rssJson.rss.channel[0].item.forEach(item => {
      if (item.pubDate[0] === 'Mon, 17 Oct 2016 00:00:00 +0000') {
        const epNum = Number(item.title[0].match(/\d+/g)[0]);
        const newTime = moment('Thu, 02 Jan 2014 07:04:14').add(epNum, 'minutes');

        item.pubDate[0] = newTime.format('ddd, DD MMM YYYY HH:mm:ss') + ' +0000';
      }
    });

    rssJson.rss.channel[0].item.sort(sorter);

    return builder.buildObject(rssJson);
  });
}
