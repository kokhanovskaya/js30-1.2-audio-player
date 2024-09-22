const player = document.querySelector('.player'),
    playBtn = document.querySelector('.play'),
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next'),
    audio = document.querySelector('.audio'),
    progressContaineer = document.querySelector('.progress_containeer'),
    progress = document.querySelector('.progress'),
    imgPlayeer = document.querySelector('.img_player'),
    title = document.querySelector('.song')
    body = document.body;

const songs = ['Rihanna ft Jay Z- Umbrella', 'Linkin Park - My December', 'Tyga - Ice Cream Man'];
const backgrounds = ['img/bkr1.jpg', 'img/bkr2.jpg', 'img/bkr3.jpg'];


let songIndex = 0

function loadSong(song) {
    title.innerHTML = song;
    audio.src = `audio/${song}.mp3`;
    imgPlayeer.src = `img/cover${songIndex + 1}.jpg`;
    body.style.backgroundImage = `url(${backgrounds[songIndex]})`;

}
loadSong(songs[songIndex]);

function playSong() {
    player.classList.add('playing');
    audio.play();
}
function pauseSong() {
    player.classList.remove('playing');
    audio.pause();
}

playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('playing');
    if (isPlaying) {
        pauseSong();
    }
    else  {
        playSong();
    }
});

function nextSong () {
    songIndex++;

    if (songIndex > songs.length - 1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

nextBtn.addEventListener('click', nextSong)

function prevSong () {
    songIndex --;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
    
}

prevBtn.addEventListener('click', prevSong)

//progress bar

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent  = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}
audio.addEventListener('timeupdate', updateProgress);

//перемотка

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}
progressContaineer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)