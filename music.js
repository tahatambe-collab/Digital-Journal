let audio;

function playSelectedSong(songPath) {
  localStorage.setItem("diarySong", songPath);

  audio = new Audio(songPath);
  audio.loop = true;
  audio.volume = 0.4;
  audio.play();

  setTimeout(() => {
    window.location.href = "page4.html";
  }, 1000);
}

function resumeSong() {
  const song = localStorage.getItem("diarySong");
  if (song) {
    audio = new Audio(song);
    audio.loop = true;
    audio.volume = 0.4;
    audio.play();
  }
}
