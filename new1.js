var canvas, ctx, center_x, center_y, radius, bars, 
    x_end, y_end, bar_height, bar_width,
    frequency_array;
 
bars = 180;
bar_width = 5;
 
function initPage(){
    
    audio = new Audio();
    context = new (window.AudioContext || window.webkitAudioContext)();//The AudioContext interface represents an audio-processing graph built from audio modules linked together
    analyser = context.createAnalyser();//The AnalyserNode interface represents a node able to provide real-time frequency and time-domain analysis information.
    
    audio.src = "Madeon - All My Friends (Official Audio).mp3"; // the source path
    source = context.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(context.destination);
 
    
    frequency_array = new Uint8Array(analyser.frequencyBinCount);
    
    audio.play();
    animationLooper();
}
 
function animationLooper(){
    
    // set to the size of device
    canvas = document.getElementById("renderer");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    
    // find the center of the window
    center_x = canvas.width / 2;
    center_y = canvas.height / 2- 130;
    radius = 150;
    
    
    //draw a circle
    // ctx.beginPath();
    // ctx.arc(center_x,center_y,radius,0,2*Math.PI);
    // ctx.stroke();
    
    analyser.getByteFrequencyData(frequency_array);
    for(var i = bars/4; i < 3*(bars/4); i++){
        
        //divide a circle into equal parts
        rads = Math.PI * 2 / bars;
       
        bar_height = frequency_array[i]*0.55;
        
        console.log(frequency_array[i]);  
        if(190<frequency_array[i] && frequency_array[i]<250){
            bar_height = frequency_array[i]*0.8;
        }
        
        // set coordinates
        x = center_x + Math.cos(rads * i) *Math.cos(rads * i) *Math.cos(rads * i) * (radius);
	    y = center_y + Math.sin(rads * i) *Math.sin(rads * i) *Math.sin(rads * i) * (radius);
        x_end = center_x + Math.cos(rads * i)*Math.cos(rads * i) *Math.cos(rads * i) *(radius + bar_height);
        y_end = center_y + Math.sin(rads * i)*Math.sin(rads * i) *Math.sin(rads * i) *(radius + bar_height);
        
        //draw a bar
        drawBar(x, y, x_end, y_end, bar_width,frequency_array[i]);                                                                   //ASTROID CURVE
        
        x = center_x + Math.cos(rads * (-i+(bars/2))) *Math.cos(rads * (-i+(bars/2))) *Math.cos(rads * (-i+(bars/2))) * (radius);
	    y = center_y + Math.sin(rads * (-i+(bars/2))) *Math.sin(rads * (-i+(bars/2))) *Math.sin(rads * (-i+(bars/2))) * (radius);
        x_end = center_x + Math.cos(rads * (-i+(bars/2)))*Math.cos(rads * (-i+(bars/2))) *Math.cos(rads * (-i+(bars/2))) *(radius + bar_height);
        y_end = center_y + Math.sin(rads * (-i+(bars/2)))*Math.sin(rads * (-i+(bars/2))) *Math.sin(rads * (-i+(bars/2))) *(radius + bar_height);
        
        

        //draw a bar
        drawBar(x, y, x_end, y_end, bar_width,frequency_array[(-i+(bars/2))]);
    }
    drawBar(x, y, x_end, y_end, bar_width,frequency_array[bars/2]);
    
    window.requestAnimationFrame(animationLooper);
}
 
// for drawing a bar
function drawBar(x1, y1, x2, y2, width,frequency){
    
    var lineColor = "rgb(255,255,255)";
    
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    
}//"rgb(" + frequency + ", " + frequency + ", " + 205 + ")"
//"rgb(" + frequency + 49 + ", " + frequency + ", " + 205 + ")"