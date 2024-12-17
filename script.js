window.onload = () => {
  let pointerElem = document.getElementById("points-container");
  let teamId = document.getElementById("team-points").getAttribute("id");
  let pointerElem2 = document.getElementById("points-container-2");
  let teamId2 = document.getElementById("team-points-2").getAttribute("id");

  new PointsCounter(pointerElem, teamId);
  new PointsCounter(pointerElem2, teamId2);
};

class PointsCounter {
  constructor(elem, id) {
    this._elem = elem;
    this._id = id;
    elem.onclick = this.onClick.bind(this);
  }

  subtract(id) {
    let currentCounterValue = document.getElementById(id).innerHTML;
    if (currentCounterValue > 0) {
      document.getElementById(id).innerHTML = --currentCounterValue;
    }
  }

  add(id) {
    let currentCounterValue = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML = ++currentCounterValue;
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action](this._id);
    }
  }
}
