var bongoA = new Audio();
bongoA.src = "sounds/bongoA.wav";

var bongoD = new Audio();
bongoD.src = "sounds/bongoD.wav";

var volume = document.getElementById("volume");

document.addEventListener("keydown", function(e) {
    console.log(e);
    var color;
    var clone;
    if (e.code === "KeyA") {
        clone = bongoA.cloneNode();
        clone.volume = volume.value / 100;
        clone.play();
        clone.addEventListener("playing", function() {
            console.log("Bongo 1 was played!");
        });
        color = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    }

    if (e.code === "KeyD") {
        clone = bongoD.cloneNode();
        clone.volume = volume.value / 100;
        clone.play();
        clone.addEventListener("playing", function() {
            console.log("Bongo 2 was played!");
        });
        color = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";

    }

    if (color) {
        document.body.style.backgroundColor = color;
    }
});

volume.addEventListener("input", function() {
    var audios = [bongoA, bongoD];
    audios.forEach(function(audio) {
        audio.volume = volume.value / 100;
    });
    console.log(volume.value);
});