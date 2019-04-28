
function theBeatlesPlay(b, instruments) {
  let playersArray = [];
  for (let i = 0; i < b.length; i++) {
    playersArray[i] = b[i] + ' plays ' + instruments[i]
  }
  return playersArray;
}
