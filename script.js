const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

const totalSounds = 95;
const sounds = [];

for (let i = 1; i <= totalSounds; i++) {
  const sound = document.getElementById(`sound${i}`);
  if (sound) sounds.push(sound);
}

let isPlaying = false;
let currentTimeout = null;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function playSoundFor10Seconds(sound) {
  return new Promise((resolve) => {
    sound.currentTime = 0;
    sound.play().catch((e) => {
      console.error('Ошибка воспроизведения:', e);
      resolve();
    });

    currentTimeout = setTimeout(() => {
      sound.pause();
      sound.currentTime = 0;
      resolve();
    }, 10000);
  });
}

async function playAllSoundsOnce() {
  isPlaying = true;
  startButton.disabled = true;

  const shuffled = shuffle([...sounds]);

  for (const sound of shuffled) {
    if (!isPlaying) break;
    await playSoundFor10Seconds(sound);
  }

  isPlaying = false;
  startButton.disabled = false;
}

startButton.addEventListener('click', () => {
  if (!isPlaying) {
    playAllSoundsOnce();
  }
});

stopButton.addEventListener('click', () => {
  isPlaying = false;

  if (currentTimeout) clearTimeout(currentTimeout);

  sounds.forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
  });

  startButton.disabled = false;
});
