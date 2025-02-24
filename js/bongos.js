var bongoA = new Audio();
bongoA.src = "sounds/bongoA.wav";

var bongoD = new Audio();
bongoD.src = "sounds/bongoD.wav";


document.addEventListener("keydown", function(e) {
    console.log(e);
    var color;
    var clone;
    if (e.code === "KeyA") {
        clone = bongoA.cloneNode();
        clone.play();
        clone.addEventListener("playing", function() {
            console.log("Bongo 1 was played!");
        });
        color = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    }

    if (e.code === "KeyD") {
        clone = bongoD.cloneNode();
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