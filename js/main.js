var modeValue = 6;
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');
var modeBtns = document.querySelectorAll('.mode');

for (var i = 0; i < modeBtns.length; i++) {
  modeBtns[i].addEventListener('click', function () {
    var mode = this.textContent;
    
    modeValue = assignMode(mode);
    assignSelected(this);
    

    reset();

  });

}



var colors = generateColors(modeValue);

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var gameOver = false;
var bgColor = window.getComputedStyle(document.body, null).backgroundColor;


resetButton.addEventListener('click', function () {

  reset();
});



initSquares();


function initSquares() {
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < colors.length; i++) {

    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function () {
      if (gameOver === false) {

        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
          messageDisplay.textContent = "Correct";
          resetButton.textContent = "Play again";
          changeColors(clickedColor);
          h1.style.backgroundColor = clickedColor;
          gameOver = true;
        } else {

          this.style.backgroundColor = bgColor;
          messageDisplay.textContent = "Try again!";

        }
      }
    });

  }

}

function changeColors(color) {
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }

}

function pickColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateColors(num) {
  var colors = [];

  for (var i = 0; i < num; i++) {
    var color = "rgb(" + pickRandomColor() + ", " + pickRandomColor() + ", " + pickRandomColor() + ")";
    if (color.indexOf(colors)) {
      color = "rgb(" + pickRandomColor() + ", " + pickRandomColor() + ", " + pickRandomColor() + ")";
    }
    colors.push(color);
  }

  return colors;
}

function pickRandomColor() {
  return Math.floor(Math.random() * 255 + 1);
}

function fillSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
}

function reset() {
  messageDisplay.textContent = "";
  resetButton.textContent = "new colors";
  h1.style.backgroundColor = "steelblue";
  gameOver = false;
  clearSquares();
  colors = generateColors(modeValue);
  initSquares();
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
}

function clearSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = bgColor;
  }
}


function assignMode(mode) {

  if (mode == "Easy") {
    return 3;
  } else if (mode == "Hard") {
    return 6;
  }

  return 0;
}


function assignSelected(value) {
  for (var i = 0; i < modeBtns.length; i++) {
    modeBtns[i].classList.remove("selected");
  }
  value.classList.add("selected");

}
