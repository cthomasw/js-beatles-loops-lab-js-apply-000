const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  let allMembers = [];
  for (let musicians i = 0; i < musicians.length; i++) {
    for (let instruments j = 0; j < instruments.length; j++) {
  allMembers.push(musicians[i] + ' plays ' + instruments[i])
  }
}

}