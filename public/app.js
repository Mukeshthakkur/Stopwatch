var min = 0;
var sec = 0;
var msec = 0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

var interval;

function Stopwatch(){
    msec++
    msecHeading.innerHTML = msec
    if (msec >= 100){
        sec++
        secHeading.innerHTML = sec
        msec=0
}else if (sec >=60){
        min++
        minHeading.innerHTML = min
        sec=0
    }
}

function start(){
    interval = setInterval(Stopwatch,10);
    var x = document.getElementById("str");
    x.disabled =true;
}

function pause(){
 interval=clearInterval(interval)
 var x = document.getElementById("str");
 x.disabled =false;
}

function reset(){
    var min= 0;
    var sec= 0;
    var msec= 0;
     minHeading.innerHTML= min
     secHeading.innerHTML= sec
     msecHeading.innerHTML= msec
     pause()
    var x = document.getElementById("str");
    x.disabled =false;
}
