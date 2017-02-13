/**
 * 4 - Merging Meeting Times - O(n) time / O(1) space
 * @param {Array of Objects} A - the input array of meeting times as objects
 * @return {Array of Objects} - meeting times merged
 */
function mergeMeetingTimes(A) {
  var res = [];

  var sortedMeetings = A.sort(function(a, b) {
    return a.startTime > b.startTime;
  });

  res[0] = sortedMeetings[0];

  for (var i = 1; i < sortedMeetings.length; i++) {
    var current = sortedMeetings[i];
    var last = res[res.length - 1];

    if (last.endTime >= current.startTime) {
      last.endTime = Math.max(last.endTime, current.startTime);
    } else {
      res.push(current);
    }
  }

  console.log("\t -> mergeMeetingTimes:", res);
  return res;
}

var A = [
  {startTime: 1, endTime: 10},
  {startTime: 2, endTime: 6},
  {startTime: 3, endTime: 5},
  {startTime: 7, endTime: 9}
];
mergeMeetingTimes(A);
