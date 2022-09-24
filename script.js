let colorOne = document.getElementById('color-a');
let colorTow = document.getElementById('color-b');
let currentDirection = 'to bottom';
let outputCode = document.getElementById('code');

function setDirection(value, _this) {
  let directions = document.querySelectorAll(".buttons button");

  for (let i of directions) {
    i.classList.remove('active');
  }

  _this.classList.add('active');
  currentDirection = value;
}

// ===== GENERATE CSS CODE FOR GRADIENT ===== //

function generateCode() {
  outputCode.value = `background-image: linear-gradient( ${currentDirection}, ${colorOne.value}, ${colorTow.value} );`

  document.getElementsByTagName("body")[0].style.background = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTow.value})`;
}

// ===== IMPLEMENT COPY TO CLIPBOARD FUNCTION ===== //

function copyText() {
  outputCode.select();
  document.execCommand('copy');
  alert('Gradient Copied!')
}

