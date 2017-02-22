/**
 * 13 - Find Rotation Point
 * @param {Array of Strings} A - input array of words
 * @return {Int} - index of rotation point in the array
 */
function findRotationPoint(A) {
  var floor = 0;
  var ceiling = A.length - 1;

  while (floor < ceiling) {

    var guess = Math.floor(floor + ((ceiling - floor) / 2));
    if (A[guess] >= A[0]) {
      floor = guess;
    } else {
      ceiling = guess;
    }

    if (floor + 1 === ceiling) {
      break;
    }
  }

  console.log("\t -> findRotationPoint:", ceiling);
  return ceiling;
}

var A = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

findRotationPoint(A);
