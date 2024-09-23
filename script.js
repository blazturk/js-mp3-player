var audio = document.getElementById('audio');
var playBtn = document.getElementById('playBtn');
var playBtnImg = playBtn.querySelector('i.fa-solid');
var progress = document.getElementById('progress');


audio.onloadedmetadata = function() {
    progress.max = audio.duration;
}

function loadSong() {
    audio.setAttribute('src', 'song.mp3');
} 

loadSong();

function playSong() {
    playBtnImg.classList.remove('fa-play');
    playBtnImg.classList.add('fa-pause');

    audio.play();
}


function pauseSong() {
    playBtnImg.classList.remove('fa-pause');
    playBtnImg.classList.add('fa-play');

    audio.pause();
}

playBtn.addEventListener('click', () => {

    const isPlaying = playBtnImg.classList.contains('fa-pause');

    if(!isPlaying) {
        playSong();
    } else {
        pauseSong();
    }
    
});

if(audio.play()) {
    setInterval(()=> {
        progress.value = audio.currentTime;
    }, 500);
}

progress.onchange = function() {
    audio.play;
    audio.currentTime = progress.value;
}