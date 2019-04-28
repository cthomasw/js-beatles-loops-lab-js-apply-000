
function theBeatlesPlay(musicians, instruments) {
let sillyArray = [];
for (let i = 0; i < musicians.length; i++) {
  sillyArray[i] = musicians[i] + ' plays ' + instruments[i]
}
return sillyArray;
}
