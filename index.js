
function theBeatlesPlay(musicians, instruments) {
  let playersArray = [];
  for (let i = 0; i < musicians.length; i++) {
    playersArray[i] = musicians[i] + ' plays ' + instruments[i]
  }
  return playersArray;
}

function johnLennonFacts(facts) {
  let lennonArray = [];
  let i = 0;
  while (i < facts.length) {
    lennonArray[i] = facts[i] + '!!!'
    i++;
  }
}
