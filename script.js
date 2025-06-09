const sound1 = document.getElementById('sound1');
const sound2 = document.getElementById('sound2');
const sound3 = document.getElementById('sound3');
const sound4 = document.getElementById('sound4');
const sound5 = document.getElementById('sound5');
const sound6 = document.getElementById('sound6');
const sound7 = document.getElementById('sound7');
const sound8 = document.getElementById('sound8');
const sound9 = document.getElementById('sound9');
const sound10 = document.getElementById('sound10');
const sound11 = document.getElementById('sound11');
const sound12 = document.getElementById('sound12');
const sound13 = document.getElementById('sound13');
const sound14 = document.getElementById('sound14');
const sound15 = document.getElementById('sound15');
const sound16 = document.getElementById('sound16');
const sound17 = document.getElementById('sound17');
const sound18 = document.getElementById('sound18');
const sound19 = document.getElementById('sound19');
const sound20 = document.getElementById('sound20');
const sound21 = document.getElementById('sound21');
const sound22 = document.getElementById('sound22');
const sound23 = document.getElementById('sound23');
const sound24 = document.getElementById('sound24');
const sound25 = document.getElementById('sound25');
const sound26 = document.getElementById('sound26');
const sound27 = document.getElementById('sound27');
const sound28 = document.getElementById('sound28');
const sound29 = document.getElementById('sound29');
const sound30 = document.getElementById('sound30');
const sound31 = document.getElementById('sound31');
const sound32 = document.getElementById('sound32');
const sound33 = document.getElementById('sound33');
const sound34 = document.getElementById('sound34');
const sound35 = document.getElementById('sound35');
const sound36 = document.getElementById('sound36');
const sound37 = document.getElementById('sound37');
const sound38 = document.getElementById('sound38');
const sound39 = document.getElementById('sound39');
const sound40 = document.getElementById('sound40');
const sound41 = document.getElementById('sound41');
const sound42 = document.getElementById('sound42');
const sound43 = document.getElementById('sound43');
const sound44 = document.getElementById('sound44');
const sound45 = document.getElementById('sound45');
const sound46 = document.getElementById('sound46');
const sound47 = document.getElementById('sound47');
const sound48 = document.getElementById('sound48');
const sound49 = document.getElementById('sound49');
const sound50 = document.getElementById('sound50');
const sound51 = document.getElementById('sound51');
const sound52 = document.getElementById('sound52');
const sound53 = document.getElementById('sound53');
const sound54 = document.getElementById('sound54');
const sound55 = document.getElementById('sound55');
const sound56 = document.getElementById('sound56');
const sound57 = document.getElementById('sound57');
const sound58 = document.getElementById('sound58');
const sound59 = document.getElementById('sound59');
const sound60 = document.getElementById('sound60');
const sound61 = document.getElementById('sound61');
const sound62 = document.getElementById('sound62');
const sound63 = document.getElementById('sound63');
const sound64 = document.getElementById('sound64');
const sound65 = document.getElementById('sound65');
const sound66 = document.getElementById('sound66');
const sound67 = document.getElementById('sound67');
const sound68 = document.getElementById('sound68');
const sound69 = document.getElementById('sound69');
const sound70 = document.getElementById('sound70');
const sound71 = document.getElementById('sound71');
const sound72 = document.getElementById('sound72');
const sound73 = document.getElementById('sound73');
const sound74 = document.getElementById('sound74');
const sound75 = document.getElementById('sound75');
const sound76 = document.getElementById('sound76');
const sound77 = document.getElementById('sound77');
const sound78 = document.getElementById('sound78');
const sound79 = document.getElementById('sound79');
const sound80 = document.getElementById('sound80');
const sound81 = document.getElementById('sound81');
const sound82 = document.getElementById('sound82');
const sound83 = document.getElementById('sound83');
const sound84 = document.getElementById('sound84');
const sound85 = document.getElementById('sound85');
const sound86 = document.getElementById('sound86');
const sound87 = document.getElementById('sound87');
const sound88 = document.getElementById('sound88');
const sound89 = document.getElementById('sound89');
const sound90 = document.getElementById('sound90');
const sound91 = document.getElementById('sound91');
const sound92 = document.getElementById('sound92');
const sound93 = document.getElementById('sound93');
const sound94 = document.getElementById('sound94');
const sound95 = document.getElementById('sound95');

const sounds = [
  sound1,
  sound2,
  sound3,
  sound4,
  sound5,
  sound6,
  sound7,
  sound8,
  sound9,
  sound10,
  sound11,
  sound12,
  sound13,
  sound14,
  sound15,
  sound16,
  sound17,
  sound18,
  sound19,
  sound20,
  sound21,
  sound22,
  sound23,
  sound24,
  sound25,
  sound26,
  sound27,
  sound28,
  sound29,
  sound30,
  sound31,
  sound32,
  sound33,
  sound34,
  sound35,
  sound36,
  sound37,
  sound38,
  sound39,
  sound40,
  sound41,
  sound42,
  sound43,
  sound44,
  sound45,
  sound46,
  sound47,
  sound48,
  sound49,
  sound50,
  sound51,
  sound52,
  sound53,
  sound54,
  sound55,
  sound56,
  sound57,
  sound58,
  sound59,
  sound60,
  sound61,
  sound62,
  sound63,
  sound64,
  sound65,
  sound66,
  sound67,
  sound68,
  sound69,
  sound70,
  sound71,
  sound72,
  sound73,
  sound74,
  sound75,
  sound76,
  sound77,
  sound78,
  sound79,
  sound80,
  sound81,
  sound82,
  sound83,
  sound84,
  sound85,
  sound86,
  sound87,
  sound88,
  sound89,
  sound90,
  sound91,
  sound92,
  sound93,
  sound94,
  sound95,
];

let isPlaying = false;
let currentTimeout = null;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

// Функция перемешивания массива (Fisher-Yates)
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

// Функция воспроизведения одного звука ровно 10 секунд
function playSoundFor10Seconds(sound) {
  return new Promise((resolve) => {
    sound.currentTime = 0;
    sound.play().catch((e) => {
      console.error('Ошибка воспроизведения:', e);
      resolve(); // если ошибка, просто продолжаем
    });

    // Через 10 секунд останавливаем звук и резолвим промис
    currentTimeout = setTimeout(() => {
      sound.pause();
      sound.currentTime = 0;
      resolve();
    }, 10000);
  });
}

// Основная асинхронная функция для воспроизведения звуков в случайном порядке
async function playSoundsRandomly() {
  while (isPlaying) {
    const shuffledSounds = shuffle([...sounds]);

    for (const sound of shuffledSounds) {
      if (!isPlaying) break;
      await playSoundFor10Seconds(sound);
    }
  }

  // После остановки включаем кнопку старта
  startButton.disabled = false;
}

startButton.addEventListener('click', () => {
  if (isPlaying) return;

  isPlaying = true;
  startButton.disabled = true;

  playSoundsRandomly();
});

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
