// add solution here
function theBeatlesPlay(musicians, instruments) {
let whoPlays = [];

for (let i = 0; i < musicians.length; i++;) {
  for (let j = 0; j <instruments.length; j++) {
    whoPlays.push(`${musicians[i]} plays ${instruments[j]}`);
  }

}
