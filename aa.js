var canvasWidth = 500;
var audioEl = document.getElementById("audio");
var canvas = document.getElementById("progress").getContext('2d');
var crtl = document.getElementById('audioControl');

audioEl.addEventListener('loadedmetadata',function(){
    var duration = audioEl.duration;
    var currentTime = audioEl.currentTime;
    document.getElementById("duration").innerHTML = convertElapsedTime(duration);
    document.getElementById("current-time").innerHTML = convertElapsedTime(current-time);
    canvas.fillRect(0,0,canvasWidth,50);

});

function convertElapsedTime(inputSeconds){
    var seconds = Math.floor(inputSeconds % 60);
    if(seconds<10){
        seconds = "0" + seconds;
    }
    var minutes = Math.floor(inputSeconds / 60);
    return minutes + ":" + seconds;
}

function togglePlaying(){
    var play = ctrl.innerHTML === 'Play';
    var method;

    if(play){
        ctrl.innerHTML='Pause';
        method = 'play'
    }else{
        ctrl.innerHTML='Play';
        method = 'pause';
    }

    audioEl[method]();
}

function updateBar(){
    canvas.clearRect(0,0,canvasWidth,50);
    canvas.fillStyle = "#2af8eb";
    canvas.fillRect(0,0,canvasWidth,50);
    
    var currentTime = audioEl.currentTime;
    var duration = audioEl.duration;

    if(currentTime===duration){
        ctrl.innerHTML = 'Play';
    }

    document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime);

    var percentage = currentTime/duration;
    var progress = (canvasWidth*percentage);
    canvas.fillStyle = "#2af8eb";
    canvas.fillRect(0,0,progress,50);
}