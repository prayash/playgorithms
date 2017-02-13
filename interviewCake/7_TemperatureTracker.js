/**
 * 7 - Temperature Tracker - O(1) space / O(1) time
 * @param none
 * @return {Interface}
*/
class TempTracker {

  constructor() {

    // min & max
    this.minTemp = null;
    this.maxTemp = null;

    // mean
    this.totalTemps = 0;
    this.totalSum = 0;
    this.mean = null;

    // mode
    this.occurrences = [];
    this.maxOccurences = 0;
    for (var i = 0; i < 111; i++) {
      this.occurrences[i] = 0;
    }
  }

  insert(temp) {

    // mean
    this.totalTemps++;
    this.totalSum += temp;
    this.mean = this.totalSum / this.totalTemps;

    // mode
    this.occurrences[temp]++;
    if (this.occurrences[temp] > this.maxOccurences) {
      this.mode = temp;
      this.maxOccurences = this.occurrences[temp];
    }

    if (this.maxTemp == null || temp > this.maxTemp) {
      this.maxTemp = temp;
    }

    if (this.minTemp == null || temp < this.minTemp) {
      this.minTemp = temp;
    }
  }

  getMin() {
    return this.minTemp;
  }

  getMax() {
    return this.maxTemp;
  }

  getMean() {
    return this.mean;
  }

  getMode() {
    return this.mode;
  }
}

var A = [
  80,
  34,
  9,
  99,
  83,
  54,
  7,
  23,
  22,
  76,
  47,
  65,
  94,
  95,
  89,
  6,
  83,
  95,
  7,
  86,
  75,
  102,
  53,
  49,
  49,
  31,
  97,
  16,
  28,
  107,
  4,
  72,
  44,
  2,
  30,
  37,
  58,
  36,
  107,
  42,
  108,
  105,
  54,
  91,
  71,
  87,
  25,
  104,
  106,
  86,
  62,
  60,
  19,
  106,
  59,
  102,
  97,
  67,
  68,
  7,
  12,
  8,
  75,
  39,
  110,
  77,
  2,
  81,
  87,
  69,
  64,
  67,
  109,
  55,
  2,
  80,
  31,
  76,
  74,
  5,
  3,
  78,
  64,
  23,
  19,
  90,
  87,
  73,
  3,
  36,
  12,
  31,
  6,
  71,
  22,
  91,
  26,
  53,
  71,
  46
];

var tt = new TempTracker();
for (var i in A) {
  tt.insert(A[i]);
}

console.log("\t -> getMax:", tt.getMax());
console.log("\t -> getMin:", tt.getMin());
console.log("\t -> getMean:", tt.getMean());
console.log("\t -> getMode:", tt.getMode());
