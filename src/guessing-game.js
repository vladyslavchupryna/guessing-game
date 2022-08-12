class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min + 1;
    this.max = max - 1;
  }

  guess() {
    this.mid = this.min + Math.ceil((this.max - this.min) / 2);
    return this.mid;
  }

  lower() {
    this.max = this.mid - 1;
  }

  greater() {
    this.min = this.mid + 1;
  }
}

module.exports = GuessingGame;
