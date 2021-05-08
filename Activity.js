window.onload=function() {
    const start = document.getElementById("start");
    start.addEventListener("click", startActivity);
}

function startActivity(e) {
    e.preventDefault();
    const category = "Meditate"; //document.getElementById("")
    const accomplishment = document.getElementById("accomplishment");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    const ActivityDiv = document.getElementById("Activity");
    var Activity1 = new Activity(category, accomplishment, minutes, seconds);
    Activity1.startTimer;
    ActivityDiv.innerHTML = "${accomplishment}<br/>";
    ActivityDiv.innerHTML = "<div id='timer'>${minutes}:${seconds}</div><br/>";
    ActivityDiv.innerHTML = "<input type='submit' id='startBtn' value='START'>";
}

class Activity {
    constructor: function(_category, _description, _minutes, _seconds) {
        this.completed = false;
        this.category = _category;
        this.description = _description;
        this.minutes = _minutes;
        this.seconds = _seconds;
        static this.id;
        this.id = this.id + 1;    
    }

    startTimer: function() {
        this.saveToStorage();
        var now = new Date().getTime();
        var countDownDate = new.Date().getTime();
        var x = setInterval(function() {
            var distance = countDownDate - now;
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));4
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("timer").innerHTML = minutes + ":" + seconds;

            if(distance < 0) {
                clearInterval(x);
                this.markComplete();
                document.getElementById("timer").innerHTML = "EXPIRED";
            }
        }, 1000);
    }
    markComplete:  function() {
        this.completed = true;
    }
    saveToStorage: function() {
        var objectToStore = {category: '${this.category}', description: '${this.description}', minutes: '${this.minutes}', seconds: '${this.seconds}'};
        var stringifiedObject = JSON.stringify(objectToStore);
        localStorage.setItem('Activity', stringifiedObject);
        var retrievedObject = localStorage.getItem('Activity');
        var parsedObject = JSON.parse(retrievedObject);
        console.log(parsedObject.category + parsedObject.description + parsedObject.minutes + parsedObject.seconds);
    }
}