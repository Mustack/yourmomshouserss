const moment = require('moment');

function getMoment(episode) {
  const timestamp = episode.pubDate[0].substring(0, episode.pubDate[0].length - 5);
  return moment(timestamp);
}

module.exports = function sorter(a, b) {
    return getMoment(a) > getMoment(b) ? -1 : 1;
}
