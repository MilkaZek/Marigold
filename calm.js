// To-do list scripts: 
var myNodelist = document.getElementsByClassName("todoitem");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function addToList() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    li.className = "todoitem";
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Timer script:
var milli_seconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var h1 = document.getElementById('time');
var start = document.getElementById('button-start');
var stop = document.getElementById('button-stop');
var clear = document.getElementById('button-reset');
var interval = 1;

function count() {

  var timeString = "";
  interval = 1;
  milli_seconds += interval;

  if (milli_seconds >= 100) {
    milli_seconds = 0;
    seconds += interval;
  }

  if (seconds >= 60) {
    seconds = 0;
    minutes += interval;
  }

  if (minutes >= 60) {
    minutes = 0;
    hours += interval;
  }

  if (hours <= 9) {
    timeString = "0" + hours + ":";
  }
  else {
    timeString = hours + ":";
  }

  if (minutes <= 9) {
    timeString += "0" + minutes + ":";
  }
  else {
    timeString += minutes + ":";
  }

  if (seconds <= 9) {
    timeString += "0" + seconds;
  }
  else {
    timeString += seconds;
  }

  h1.textContent = timeString;
  timer();
}

function timer() {
  timeout = setTimeout(count, 10);
}

/* Start button */
start.onclick = count;

stop.onclick = function() {
  clearTimeout(timeout);
}

/* Clear button */
clear.onclick = function() {
  h1.textContent = "00:00:00";

  seconds = 0;
  minutes = 0;
  milli_seconds = 0;
  interval = 0;
}
