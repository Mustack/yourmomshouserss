const aGreaterThanB = 1;
const aLessThanB = -1;

function getNum(episode) {
  if (episode.title[0] === 'BONUS-Live From Irvine (Early Show) - Your Mom\'s House with Christina Pazsitzky and Tom Segura') {
    return 385.5;
  }

  if (episode.title[0].match(/\d+/g).length > 1) {
    console.error(episode.title[0] + ' Has more than 1 number');
  }

  return Number(episode.title[0].match(/\d+/g)[0]);
}

module.exports = {
  sorter(a, b) {
    return getNum(a) > getNum(b) ? aGreaterThanB : aLessThanB;
  }
}
