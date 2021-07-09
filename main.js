var SpeechRecognition = window.webkitSpeechRecognition;
var ggod = new SpeechRecognition();

function submit() {
    document.getElementById("textBox").innerHTML = "";
    ggod.start();
}
ggod.onresult = function (event) {
    console.log(event);
    s = event.results[0][0].transcript;
    document.getElementById("textBox").innerHTML = s;
    console.log(s)
    if (s == "Take my selfie.") {
        speak();
    }
}

function speak() {
    var sp = window.speechSynthesis;
    data = "Taking your selfie in 5 seconds";
    sada = new SpeechSynthesisUtterance(data);
    sp.speak(sada);
    Webcam.attach("#cam");
    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000);
}
Webcam.set({
    height: 250,
    width: 300,
    image_format: "png",
    png_quality: 90
});
var camero = document.getElementById("cam");

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("img").innerHTML = "<img id='imga' src='"+data_uri+"'>";
    });
}
function save() {
    dji = document.getElementById("a");
    imga = document.getElementById("imga").src;
    dji.href = imga;
    dji.click();
}