var activity = "Study";

function selectStudy() {
    const study = document.getElementById("study");
    const meditate = document.getElementById("meditate");
    const exercise = document.getElementById("exercise");

    study.classList.add("selected");
    meditate.classList.remove("selected");
    exercise.classList.remove("selected");
    study.classList.remove("not_selected");
    meditate.classList.add("not_selected");
    exercise.classList.add("not_selected");

    var activity = "Study";
    console.log("selected Study");
}
function selectMeditate() {
    const study = document.getElementById("study");
    const meditate = document.getElementById("meditate");
    const exercise = document.getElementById("exercise");

    study.classList.remove("selected");
    meditate.classList.add("selected");
    exercise.classList.remove("selected");
    study.classList.add("not_selected");
    meditate.classList.remove("not_selected");
    exercise.classList.add("not_selected");

    var activity = "Meditate";
    console.log("selected Meditate");
}
function selectExercise() {
    const study = document.getElementById("study");
    const meditate = document.getElementById("meditate");
    const exercise = document.getElementById("exercise");

    study.classList.remove("selected");
    meditate.classList.remove("selected");
    exercise.classList.add("selected");
    study.classList.add("not_selected");
    meditate.classList.add("not_selected");
    exercise.classList.remove("not_selected");
 
    var activity = "Exercise";
    console.log("selected Exercise");
}