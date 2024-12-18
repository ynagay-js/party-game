window.onload = () => {
  //team-1
  let pointerElem = document.getElementById("points-container");
  let teamId = document.getElementById("team-points").getAttribute("id");
  let teamElem = document.getElementById("team-1-name");
  let teamNameId = document.getElementById("team-1-name").getAttribute("id");
  //team-2
  let pointerElem2 = document.getElementById("points-container-2");
  let teamId2 = document.getElementById("team-points-2").getAttribute("id");
  let teamElem2 = document.getElementById("team-2-name");
  let teamNameId2 = document.getElementById("team-2-name").getAttribute("id");

  new ActionHandler(pointerElem, teamId);
  new ActionHandler(pointerElem2, teamId2);
  new ActionHandler(teamElem, teamNameId);
  new ActionHandler(teamElem2, teamNameId2);

  /*!!!refactor!!!*/
  /*универсальная функция с приемом массива значений*/

  if (fetchFromLocalStorage(teamNameId).length > 0) {
    document.getElementById(teamNameId).innerHTML = fetchFromLocalStorage(teamNameId);
  }

  if (fetchFromLocalStorage(teamNameId2).length > 0) {
    document.getElementById(teamNameId2).innerHTML = fetchFromLocalStorage(teamNameId2);
  }

  if (fetchFromLocalStorage(teamId).length > 0) {
    document.getElementById(teamId).innerHTML = fetchFromLocalStorage(teamId);
  }

  if (fetchFromLocalStorage(teamId2).length > 0) {
    document.getElementById(teamId2).innerHTML = fetchFromLocalStorage(teamId2);
  }

};

class ActionHandler {
  constructor(elem, id) {
    this._elem = elem;
    this._id = id;
    elem.onclick = this.onClick.bind(this);
    elem.oninput = this.onInput.bind(this);
  }

  subtract(id) {
    let currentCounterValue = document.getElementById(id).innerHTML;
    if (currentCounterValue > 0) {
      document.getElementById(id).innerHTML = --currentCounterValue;
      this.saveToLocalStorage(id)
    }
  }

  add(id) {
    let currentCounterValue = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML = ++currentCounterValue;
    this.saveToLocalStorage(id)
  }

  saveToLocalStorage(id) {
    let currentFieldValue = document.getElementById(id).innerHTML;
    localStorage.setItem(id, currentFieldValue);
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action](this._id);
    }
  }
  onInput(event) {
    this.saveToLocalStorage(this._id);
  }
}

function fetchFromLocalStorage(id) {
  let value = localStorage.getItem(id);
  return value;  
}