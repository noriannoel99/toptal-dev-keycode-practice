// model

// view

// control

document.addEventListener("keydown", function (event) {
  let keyCode = event.keyCode;
  document.querySelector("#keycode").innerHTML = keyCode;
});

document.addEventListener("keydown", function (event) {
  let keyCode = event.key;
  document.querySelector("#eventkey").innerHTML = keyCode;
});

document.addEventListener("keydown", function (event) {
  let keyCode = event.location;
  if (keyCode === 0) {
    document.querySelector("#eventlocation").innerHTML = "keyCodeGeneral keys";
  } else if (keyCode === 1) {
    document.querySelector("#eventlocation").innerHTML =
      "Left-side modifier keys";
  } else {
    document.querySelector("#eventlocation").innerHTML =
      "Right-side modifier keys";
  }
});

document.addEventListener("keydown", function (event) {
  let keyCode = event.code;
  document.querySelector("#eventcode").innerHTML = keyCode;
});

document.addEventListener("keydown", function (event) {
  let keyCode = event.keyCode;
  document.querySelector("#eventwhich").innerHTML = keyCode;
});

document.addEventListener("keydown", function (event) {
  let keyCode = event.key;
  document.querySelector("#Description").innerHTML = keyCode;
});

document.addEventListener("keydown", function (event) {
  let Dump = document.querySelector("#EventDump");
  let subset = {
    key: event.key,
    KeyCode: event.code,
    Which: event.keyCode,
    Code: event.key,
    location: event.location,
  };
  Dump.innerHTML = JSON.stringify(subset, null, 2);
});

let historyarray = [];

function history() {
  let keyString = "";
  for (let i = 0; i < historyarray.length; i++) {
    keyString += historyarray[i] + ",";
  }
  document.querySelector("#History").innerHTML = keyString;
}

document.addEventListener("keydown", function (event) {
  historyarray.push(event.key);
  if (historyarray.length > 4) {
    historyarray.shift();
  }
  history();
});

document.addEventListener("keydown", function (event) {
  let keyCode = event.code;
  let eventCode = event.keyCode;
  document.querySelector("#SimilarValues").innerHTML =
    keyCode + "(" + eventCode + ")";
});

document.addEventListener("keydown", function (event) {
  let keyCode = event.metaKey;
  document.querySelector("#MetaKeys").innerHTML = keyCode;
});

document.addEventListener("keydown", function (event) {
  let keyCode = event.keyCode;
  if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)) {
    document.querySelector("#Unicode").innerHTML = keyCode;
  }
});
