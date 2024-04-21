let song = document.querySelector(".song");
let progress = document.querySelector("#progress");
let controlicon = document.querySelector("#controlicon")

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime
}

function playsong(){
    if(controlicon.classList.contains("fa-pause")){
        song.pause()
        controlicon.classList.remove("fa-pause");
        controlicon.classList.add("fa-play");
    }
    else{
        song.play();
        controlicon.classList.remove("fa-play");
        controlicon.classList.add("fa-pause");
    }
}
progress.onchange = function(){
    song.play();
    controlicon.classList.add("fa-pause");
    controlicon.classList.remove("fa-play");
    song.currentTime = progress.value
}
setInterval(()=>{
    progress.value = song.currentTime;
},500);
