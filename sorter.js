const aGreaterThanB = 1;
const aLessThanB = -1;

function getNum(episode) {
  if (episode.title[0].match(/\d+/g).length > 1) {
    console.error(episode.title[0] + ' Has more than 1 number');
  }

  return Number(episode.title[0].match(/\d+/g)[0]);
}

module.exports = {
  sorter(a, b) {
    if (a.pubDate[0] === 'Mon, 17 Oct 2016 00:00:00 +0000' && b.pubDate[0] !== 'Mon, 17 Oct 2016 00:00:00 +0000') {
      return aLessThanB;
    }

    if (a.pubDate[0] !== 'Mon, 17 Oct 2016 00:00:00 +0000' && b.pubDate[0] === 'Mon, 17 Oct 2016 00:00:00 +0000') {
      return aGreaterThanB;
    }

    if (a.pubDate[0] === 'Mon, 17 Oct 2016 00:00:00 +0000' && b.pubDate[0] === 'Mon, 17 Oct 2016 00:00:00 +0000') {
      return getNum(a) > getNum(b) ? aGreaterThanB : aLessThanB;
    }

    if (a.pubDate[0] !== 'Mon, 17 Oct 2016 00:00:00 +0000' && b.pubDate[0] !== 'Mon, 17 Oct 2016 00:00:00 +0000') {
      return getNum(a) > getNum(b) ? aGreaterThanB : aLessThanB;
    }
  }
}
