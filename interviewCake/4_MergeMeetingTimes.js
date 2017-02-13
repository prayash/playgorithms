/**
 * 4 - Merging Meeting Times - O(n) time / O(1) space
 * @param {Array of Objects} A - the input array of meeting times as objects
 * @return {Array of Objects} - meeting times merged
 */
function mergeMeetingTimes(A) {
  var res = [];

  var sortedMeetings = A.sort((a, b) => { a.startTime > b.startTime });

  // Initialize mergedMeetings with the earliest meeting
  res = [sortedMeetings[0]];
  for (var i = 1; i < sortedMeetings.length; i++) {
    var current = sortedMeetings[i];
    var last = res[res.length - 1];

    // If the current and last meetings overlap, use the latest end time
    if (current.startTime <= last.endTime) {
      last.endTime = Math.max(last.endTime, current.endTime);
    } else {
      res.push(current);
    }
  }

  console.log("\t -> mergeMeetingTimes:", res);
  return res;
}

// var A = [
//   {startTime: 1, endTime: 10},
//   {startTime: 2, endTime: 6},
//   {startTime: 3, endTime: 5},
//   {startTime: 7, endTime: 9}
// ];

var A = [
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10}
];

mergeMeetingTimes(A);
