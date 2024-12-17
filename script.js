window.onload = () => {
  let pointerId = document.getElementById("points-container");

  new PointsCounter(pointerId);
};

class PointsCounter {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }

  subtract() {
    let currentCounterValue = document.getElementById("team-points").innerHTML;
    if (currentCounterValue > 0) {
      document.getElementById("team-points").innerHTML = --currentCounterValue;
    }
  }

  add() {
    let currentCounterValue = document.getElementById("team-points").innerHTML;
    document.getElementById("team-points").innerHTML = ++currentCounterValue;
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  }
}
