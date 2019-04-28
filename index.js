
function theBeatlesPlay(musicians, instruments) {
  let playersArray = [];
  for (let i = 0; i < musicians.length; i++) {
    playersArray[i] = musicians[i] + ' plays ' + instruments[i]
  }
  return playersArray;
}
