window.onload=function() {
    const start = document.getElementById("start");
    start.addEventListener("click", startActivity);
    console.log("end window.onload function");
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
    ActivityDiv.innerHTML = "<div id='timer'>${minutes}:${seconds}</div><br/>";
    ActivityDiv.innerHTML = "<input type='submit' id='startBtn' value='START'>";

    console.log("Creating new Activitiy");
    var Activity1 = new Activity(category, accomplishment, minutes, seconds);
    const startBtn = document.getElementById("startBtn");
    console.log("Adding Event Listener for Activity1.startTimer()");
    startBtn.addEventListener("click", Activity1.startTimer);
    console.log("Returning from adding Event Listener");
}

class Activity {
    constructor(_category, _description, _minutes, _seconds) {
        this.completed = false;
        this.category = _category;
        this.description = _description;
        this.minutes = _minutes;
        if (Number.isNaN(this.minutes)) {
            this.minutes = 5;
        }
        this.minutes = 5;
        console.log("this.minutes = " + this.minutes);
        this.seconds = _seconds;
        if (Number.isNaN(this.seconds)) {
            this.seconds = 0;
        }
        console.log("this.seconds = " + this.seconds);
        //static this.id;
        this.id = this.id + 1;    
    }

    startTimer() {
        //saveToStorage();
        console.log("Minutes and Seconds" + this.minutes + ":" + this.seconds);
        var now = new Date().getTime();
        var countDownDate = new Date().getTime() + 1000 * this.seconds + this.minutes * 60 * 1000;
        var x = setInterval(function() {
            var distance = countDownDate - now;
            var distance_minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var distance_seconds = Math.floor((distance % (1000 * 60)) / 1000);

            console.log("Putting Timer On " + this.minutes + ":" + this.seconds);
            document.getElementById("timer").innerHTML = distance_minutes + ":" + distance_seconds;

            if(distance < 0) {
                clearInterval(x);
                this.markComplete();
                document.getElementById("timer").innerHTML = "EXPIRED";
            }
        }, 1000);
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