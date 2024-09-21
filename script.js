const player = document.querySelector('.player'),
    playBtn = document.querySelector('.play'),
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next'),
    audio = document.querySelector('.audio'),
    progressContaineer = document.querySelector('.progress_containeer'),
    progress = document.querySelector('.progress'),
    imgPlayeer = document.querySelector('.img_player'),
    title = document.querySelector('.song')

const songs = ['Umbrella', 'MyDsmbr', 'Ice cream man']

let songIndex = 0

function loadSong(song) {
    title.innerHTML = song;
    audio.src = `audio/${song}.mp3`;
    imgPlayeer.src = `img/cover${songIndex + 1}.jpg`;
}
loadSong(songs[songIndex]);

function playSong() {
    player.classList.add('play');
    audio.play();
}
function pauseSong() {
    player.classList.remove('play');
    audio.pause();
}

playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play');
    if (isPlaying) {
        pauseSong();
    }
    else  {
        playSong();
    }
});