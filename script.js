const sounds = [];
for (let i = 1; i <= 95; i++) {
  const sound = document.getElementById(`sound${i}`);
  if (sound) sounds.push(sound);
}

let isPlaying = false;
let currentTimeout = null;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

// Перемешивание массива (Fisher-Yates)
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

// Воспроизведение одного звука на 10 секунд
function playSoundFor10Seconds(sound) {
  return new Promise((resolve) => {
    sound.currentTime = 0;
    sound.play().catch((e) => {
      console.error('Ошибка воспроизведения:', e);
      resolve(); // продолжаем, если ошибка
    });

    currentTimeout = setTimeout(() => {
      sound.pause();
      sound.currentTime = 0;
      resolve();
    }, 10000);
  });
}

// Основная логика
async function playSoundsRandomly() {
  while (isPlaying) {
    const shuffledSounds = shuffle([...sounds]);
    for (const sound of shuffledSounds) {
      if (!isPlaying) break;
      await playSoundFor10Seconds(sound);
    }
  }
  startButton.disabled = false;
}

// Старт
startButton.addEventListener('click', async () => {
  if (isPlaying) return;

  // Инициализация звуков (разрешение воспроизведения)
  for (const sound of sounds) {
    try {
      sound.muted = true;
      await sound.play();
      sound.pause();
      sound.currentTime = 0;
      sound.muted = false;
    } catch (e) {
      console.warn(`Ошибка при инициализации звука: ${e.message}`);
    }
  }

  isPlaying = true;
  startButton.disabled = true;
  playSoundsRandomly();
});

// Стоп
stopButton.addEventListener('click', () => {
  isPlaying = false;

  if (currentTimeout) {
    clearTimeout(currentTimeout);
  }

  sounds.forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
  });

  startButton.disabled = false;
});

// Разблокировка аудио на мобильных
document.body.addEventListener('touchstart', () => {}, { passive: true });
