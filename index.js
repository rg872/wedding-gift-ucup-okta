const song = new Audio("./assets/kimi_ni_todoke_op.mp3");
const equalizerEl = document.getElementById("equalizer");
let isPlay = false;

song.loop = true;

function playSong() {
  if (isPlay) {
    song.pause();
    equalizerEl.style.display = "none";
  } else {
    song.play();
    equalizerEl.style.display = "block";
  }

  isPlay = !isPlay;
}
