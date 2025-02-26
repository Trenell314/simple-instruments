document.addEventListener("DOMContentLoaded", () => {
    var audioC = new Audio();
    audioC.src = "sounds/C.wav";

    var audioCSharp = new Audio();
    audioCSharp.src = "sounds/CSharp.wav";

    var audioD = new Audio();
    audioD.src = "sounds/D.wav";

    var audioEb = new Audio();
    audioEb.src = "sounds/DSharp.wav";

    var audioE = new Audio();
    audioE.src = "sounds/E.wav";

    var audioF = new Audio();
    audioF.src = "sounds/F.wav";

    var audioFSharp = new Audio();
    audioFSharp.src = "sounds/FSharp.wav";

    var audioG = new Audio();
    audioG.src = "sounds/G.wav";

    var audioGSharp = new Audio();
    audioGSharp.src = "sounds/GSharp.wav";

    var audioA = new Audio();
    audioA.src = "sounds/A.wav";

    var audioBb = new Audio();
    audioBb.src = "sounds/ASharp.wav";

    var audioB = new Audio();
    audioB.src = "sounds/B.wav";

    var audioC5 = new Audio();
    audioC5.src = "sounds/C5.wav";

    var volume = document.getElementById("volume");

    document.addEventListener("keydown", function (e) {
        console.log(e);
        var color;
        var clone;
        if (e.code === "Digit1") {
            clone = audioC.cloneNode();
            clone.volume = volume.value / 100; 
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("C was played!");
            }); 
            color = "rgb(80, 138, 140)";
        }

        if (e.code === "Digit2") {
            clone = audioCSharp.cloneNode();
            clone.volume = volume.value / 100; 
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("C Sharp was played!");
            }); 
            color = "rgb(38, 108, 98)"; 
        }

        if (e.code === "Digit3") {
            clone = audioD.cloneNode();
            clone.volume = volume.value / 100; 
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("D was played!");
            }); 
            color = "rgb(203, 183, 92)"; 
        }

        if (e.code === "Digit4") {
            clone = audioEb.cloneNode();
            clone.volume = volume.value / 100; 
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("E flat was played!");
            }); 
            color = "rgb(205, 101, 72)"; 
        }

        if (e.code === "Digit5") {
            clone = audioE.cloneNode();
            clone.volume = volume.value / 100; 
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("E was played!");
            }); 
            color = "rgb(135, 40, 27)"; 
        }

        if (e.code === "Digit6") {
            clone = audioF.cloneNode();
            clone.volume = volume.value / 100; 
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("F was played!");
            }); 
            color = "rgb(157, 107, 226)"; 
        }

        if (e.code === "Digit7") {
            clone = audioFSharp.cloneNode();
            clone.volume = volume.value / 100; 
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("F sharp was played!");
            }); 
            color = "rgb(20, 93, 145)"; 
        }

        if (e.code === "Digit8") {
            clone = audioG.cloneNode();
            clone.volume = volume.value / 100; 
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("G was played!");
            }); 
            color = "rgb(146, 103, 70)"; 
        }

        if (e.code === "Digit9") {
            clone = audioGSharp.cloneNode();
            clone.volume = volume.value / 100; 
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("G sharp was played!");
            }); 
            color = "rgb(109, 152, 117)";
        }

        if (e.code === "Digit0") {
            clone = audioA.cloneNode();
            clone.volume = volume.value / 100; 
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("A was played!");
            }); 
            color = "rgb(0, 0, 0)"; 
        }

        if (e.code === "Minus") {
            clone = audioBb.cloneNode();
            clone.volume = volume.value / 100; 
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("B flat was played!");
            }); 
            color = "rgb(226, 179, 76)"; 
        }

        if (e.code === "Equal") {
            clone = audioB.cloneNode();
            clone.volume = volume.value / 100; 
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("B was played!");
            }); 
            color = "rgb(234, 157, 11744)";
        }

        if (e.code === "Backspace") {
            clone = audioC5.cloneNode();
            clone.volume = volume.value / 100; 
            clone.play();
            clone.addEventListener("playing", function() {
                console.log("C was played!");
            }); 
            color = "rgb(149, 53, 149)"; 
        }

        if (color) {
            document.body.style.backgroundColor = color;
        }
    });

    volume.addEventListener("input", function() {
        var audios = [audioC, audioCSharp, audioD, audioEb, audioE, audioF, audioFSharp, audioG, audioGSharp, audioA, audioBb, audioB, audioC5];
        audios.forEach(function(audio) {
            audio.volume = volume.value / 100;
        });
        console.log("Volume: " + volume.value);
    });
});
