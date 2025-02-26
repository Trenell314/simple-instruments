document.addEventListener("DOMContentLoaded", () => {
    var guitarC4 = new Audio();
    guitarC4.src = "sounds/guitarC4.wav";

    var guitarCSharp4 = new Audio();
    guitarCSharp4.src = "sounds/guitarCs4.wav";

    var guitarD4 = new Audio();
    guitarD4.src = "sounds/guitarD4.wav";

    var guitarEb4 = new Audio();
    guitarEb4.src = "sounds/guitarDs4.wav";

    var guitarE4 = new Audio();
    guitarE4.src = "sounds/guitarE4.wav";

    var guitarF4 = new Audio();
    guitarF4.src = "sounds/guitarF4.wav";

    var guitarFSharp4 = new Audio();
    guitarFSharp4.src = "sounds/guitarFs4.wav";

    var guitarG4 = new Audio();
    guitarG4.src = "sounds/guitarG4.wav";

    var guitarGSharp4 = new Audio();
    guitarGSharp4.src = "sounds/guitarGs4.wav";

    var guitarA4 = new Audio();
    guitarA4.src = "sounds/guitarA4.wav";

    var guitarBb4 = new Audio();
    guitarBb4.src = "sounds/guitarAs4.wav";

    var guitarB4 = new Audio();
    guitarB4.src = "sounds/guitarB4.wav";

    var guitarC5 = new Audio();
    guitarC5.src = "sounds/guitarC5.wav";

    var volume = document.getElementById("volume");

    document.addEventListener("keydown", function (e) {
        console.log(e);
        var color;
        var clone;
        if (e.code === "Digit1") {
            clone = guitarC4.cloneNode();
            clone.volume = volume.value / 100;
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("C4 was played!");
            });
            color = "rgb(69, 21, 27)";
        }

        if (e.code === "Digit2") {
            clone = guitarCSharp4.cloneNode();
            clone.volume = volume.value / 100;
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("C#4 was played!");
            });
            color = "rgb(234, 157, 174)"; 
        }

        if (e.code === "Digit3") {
            clone = guitarD4.cloneNode();
            clone.volume = volume.value / 100;
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("D4 was played!");
            });
            color = "rgb(251, 222, 156)"; 
        }

        if (e.code === "Digit4") {
            clone = guitarEb4.cloneNode();
            clone.volume = volume.value / 100;
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("Eb4 was played!");
            });
            color = "rgb(249, 146, 86)"; 
        }

        if (e.code === "Digit5") {
            clone = guitarE4.cloneNode();
            clone.volume = volume.value / 100;
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("E4 was played!");
            });
            color = "rgb(199, 78, 81)"; 
        }

        if (e.code === "Digit6") {
            clone = guitarF4.cloneNode();
            clone.volume = volume.value / 100;
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("F4 was played!");
            });
            color = "rgb(157, 107, 226)"; 
        }

        if (e.code === "Digit7") {
            clone = guitarFSharp4.cloneNode();
            clone.volume = volume.value / 100;
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("F#4 was played!");
            });
            color = "rgb(196, 199, 242)"; 
        }

        if (e.code === "Digit8") {
            clone = guitarG4.cloneNode();
            clone.volume = volume.value / 100;
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("G4 was played!");
            });
            color = "rgb(29, 151, 241)"; 
        }

        if (e.code === "Digit9") {
            clone = guitarGSharp4.cloneNode();
            clone.volume = volume.value / 100;
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("G#4 was played!");
            });
            color = "rgb(109, 152, 117)";
        }

        if (e.code === "Digit0") {
            clone = guitarA4.cloneNode();
            clone.volume = volume.value / 100;
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("A4 was played!");
            });
            color = "rgb(195, 200, 140)"; 
        }

        if (e.code === "Minus") {
            clone = guitarBb4.cloneNode();
            clone.volume = volume.value / 100;
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("Bb4 was played!");
            });
            color = "rgb(163, 123, 71)"; 
        }

        if (e.code === "Equal") {
            clone = guitarB4.cloneNode();
            clone.volume = volume.value / 100;
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("B4 was played!");
            });
            color = "rgb(99, 32, 36)";
        }

        if (e.code === "Backspace") {
            clone = guitarC5.cloneNode();
            clone.volume = volume.value / 100;
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("C5 was played!");
            });
            color = "rgb(193, 53, 71)"; 
        }

        if (color) {
            document.body.style.backgroundColor = color;
        }
    });

    volume.addEventListener("input", function() {
        var audios = [guitarC4, guitarCSharp4, guitarD4, guitarEb4, guitarE4, guitarF4, guitarFSharp4, guitarG4, guitarGSharp4, guitarA4, guitarBb4, guitarB4, guitarC5];
        audios.forEach(function(audio) {
            audio.volume = volume.value / 100;
        });
        console.log("Volume: " + volume.value);
    });

});