const card = document.getElementById('card');
const factText = document.getElementById('fact');
const keyMessage = document.getElementById('key-message');
const windowSize = document.getElementById('window-size');

const facts = [
  'I love lasagna.',
  'I love going to concerts.',
  'I love watching shows.'
];

const colors = [
  '#fdf1b8', '#d9c9f0', '#bfe0f2', '#fbd5e5', '#d4f1d4',
  '#ffd9b3', '#c7f0ee', '#f5c6c6', '#e6d5f7', '#d0e8ff',
  '#fff3a8', '#ffc9de', '#c9f7c0', '#ffe0cc', '#b8e6f5',
  '#e8c4f0', '#f7e1a0', '#a8e6cf', '#ffb3ba', '#cfd8ff',
  '#f9d5a7', '#b5ead7', '#e2f0cb', '#ffdac1', '#c6b7f2'
];

// 1. MOUSE CLICK: flip the card and show a random fact
card.addEventListener('click', function() {
  card.classList.toggle('flipped');

  if (card.classList.contains('flipped')) {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factText.textContent = facts[randomIndex];
  }
});

// 2. KEYBOARD: press any key to change the background color
document.addEventListener('keydown', function(event) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  keyMessage.textContent = 'Last key pressed: ' + event.key;
});

// 3. WINDOW RESIZE: show the window size and update it live
function showWindowSize() {
  windowSize.textContent = 'Window size: ' + window.innerWidth + ' x ' + window.innerHeight;
}

window.addEventListener('resize', showWindowSize);
showWindowSize(); // run once when the page loads

// 4. MOUSE HOVER: handled in style.css (the card lifts up when you hover)