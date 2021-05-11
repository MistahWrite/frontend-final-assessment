var timer;
var min = 0;
var sec = 0;
var stoptime = true;

window.onload=function() {
    const start = document.getElementById("start");
    start.addEventListener("click", startActivity);
    console.log("end window.onload function");
    var timer = document.getElementById('timer');
}

function startActivity(e) {
    console.log("startActivitiy(" + e + ")");
    e.preventDefault();
    const category = "Meditate"; //document.getElementById("")
    const accomplishment = document.getElementById("accomplishment").value;
    const minutes = document.getElementById("minutes").value;
    const seconds = document.getElementById("seconds").value;
    const ActivityDiv = document.getElementById("Activity");

    ActivityDiv.innerHTML = "${accomplishment}<br/>";
    ActivityDiv.innerHTML = "<div id='timer'>" + minutes + ":" + seconds + "</div><br/>";
    ActivityDiv.innerHTML = "<input type='submit' id='startBtn' value='START'>";

    console.log("Creating new Activitiy");
    var Activity1 = new Activity(category, accomplishment, minutes, seconds);

    min = Activity1.minutes;
    sec = Activity1.seconds;

    const startBtn = document.getElementById("startBtn");
    console.log("Adding Event Listener for Activity1.startTimer()");
    startBtn.addEventListener("click", Activity1.startTimer);
    console.log("Returning from adding Event Listener");
    Activity1.saveToStorage();
}

class Activity {
    constructor(_category, _description, _minutes, _seconds) {
        this.completed = false;
        this.category = _category;
        this.description = _description;
        this.minutes = Number(_minutes);
        if (Number.isNaN(this.minutes)) {
            this.minutes = 5;
        }
        console.log("Activity constructor this.minutes = " + this.minutes);
        this.seconds = Number(_seconds);
        if (Number.isNaN(this.seconds)) {
            this.seconds = 0;
        }
        console.log("Activity constructor this.seconds = " + this.seconds);
        //static this.id;
        this.id = this.id + 1;    
    }

    startTimer() {
        console.log("Minutes and Seconds: " + this.minutes + ":" + this.seconds);
        beginTimer();
    }
    markComplete() {
        this.completed = true;
    }
    saveToStorage() {
        var objectToStore = {category: '${this.category}', description: '${this.description}', minutes: '${this.minutes}', seconds: '${this.seconds}'};
        var stringifiedObject = JSON.stringify(objectToStore);
        localStorage.setItem('Activity', stringifiedObject);
        var retrievedObject = localStorage.getItem('Activity');
        var parsedObject = JSON.parse(retrievedObject);
        console.log(parsedObject.category + parsedObject.description + parsedObject.minutes + parsedObject.seconds);
    }
}

function countdownTimer(countDownDate, now) {
    var distance = countDownDate - now;
    var distance_minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var distance_seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log("Putting Timer On " + this.minutes + ":" + this.seconds);
    document.getElementById("timer").innerHTML = distance_minutes + ":" + distance_seconds;

    if(distance < 0) {
        clearInterval(x);
        Activity.markComplete();
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}

function beginTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}
function timerCycle() {
    console.log("timerCycle()");
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);

    sec = sec - 1;

    if (min == 0 && sec == 0) {
        clearTimeout(x);
        stopTimer();
    }
    if (sec == 0) {
      min = min - 1;
      sec = 59;
    }

    if (sec == '0-1') {
        sec = 59;
        min = parseInt(min) - 1;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    
    timer = document.getElementById('timer');
    timer.innerHTML = min + ':' + sec;
    console.log("setTimeout(timerCycle, 1000)");
    var x = setTimeout(timerCycle, 1000);
    }
}
function resetTimer() {
    timer.innerHTML = '00:00';
}