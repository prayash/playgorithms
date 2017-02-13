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
  }

  insert(temp) {

    this.totalTemps++;
    this.totalSum += temp;
    this.mean = this.totalSum / this.totalTemps;

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

  }
}
