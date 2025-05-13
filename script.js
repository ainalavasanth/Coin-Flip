const coinIcon = document.getElementById('coin');
const tossBtn = document.getElementById('toss-button');
const result = document.querySelector('.result');

const selectHeadBtn = document.getElementById('select-head');
const selectTailBtn = document.getElementById('select-tail');
const chosenSideText = document.getElementById('chosen-side');

const totalEl = document.getElementById('total');
const headsEl = document.getElementById('heads');
const tailsEl = document.getElementById('tails');

let totalFlips = 0;
let headCount = 0;
let tailCount = 0;
let selectedSide = '';

selectHeadBtn.addEventListener('click', () => {
  selectedSide = 'Heads';
  chosenSideText.textContent = 'You selected: Heads';
});

selectTailBtn.addEventListener('click', () => {
  selectedSide = 'Tails';
  chosenSideText.textContent = 'You selected: Tails';
});

tossBtn.addEventListener('click', () => {
  tossBtn.disabled = true;
  result.style.opacity = 0;
  coinIcon.classList.add('flip');

  const isHeads = Math.random() < 0.5;
  const face = isHeads ? 'Heads' : 'Tails';
  const imageUrl = isHeads
    ? 'heads.png'
    : 'tails.png';

  setTimeout(() => {
    coinIcon.innerHTML = `<img src="${imageUrl}" alt="${face}">`;
    coinIcon.classList.remove('flip');

    setTimeout(() => {
      result.textContent = `${face}!`;
      result.style.opacity = 1;
      tossBtn.disabled = false;

      // Update stats
      totalFlips++;
      if (face === 'Heads') headCount++;
      else tailCount++;

      totalEl.textContent = totalFlips;
      headsEl.textContent = headCount;
      tailsEl.textContent = tailCount;

    }, 500);
  }, 1000);
});
