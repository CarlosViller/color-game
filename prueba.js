// Variables Globales
const HARD = 6;
const EASY = 3;

var title = document.querySelector('header');
var colorDisplay = document.getElementById('colorDisplay');
var message = document.getElementById('message');
var squares = document.querySelectorAll('.square');
var newColorsBtn = document.getElementById('reset');
var easyBtn = document.getElementById('btn-easy');
var hardBtn = document.getElementById('btn-hard');

var dificulty = HARD;
var colors;
var winnerColor;

(function init() {
  setupColors();
  setupSquares();
  setupBtn();
})()

function setupBtn(){
  newColorsBtn.addEventListener('click', function (){
    reset();
  })

  easyBtn.addEventListener('click', ()=>{
    dificulty = EASY;
    reset();
  })

  hardBtn.addEventListener('click', ()=>{
    dificulty = HARD;
    reset();
  })

}

function reset() {
  setupColors();
  message.textContent = '';
  
  for (let i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = 'block'
    }else{
      squares[i].style.display = 'none'
    }   
  }
}

function setupSquares(){
  for (let i = 0; i < HARD; i++) {
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener('click', function(){
      let squareColor = this.style.backgroundColor;

      if (squareColor == winnerColor) {
        message.textContent = 'Correct!';
      }else{
        message.textContent = 'Try Again';
        this.style.backgroundColor = '#232323'
      }
    })
  }
}

function setupColors(){
  let colorsArr = [];

  for (let i = 0; i < dificulty; i++) {
    colorsArr.push(randomColor());
  }

  colors = colorsArr;
  winnerColor = colors[Math.floor(Math.random() * dificulty)]
  colorDisplay.textContent = winnerColor;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256),
      g = Math.floor(Math.random() * 256),
      b = Math.floor(Math.random() * 256);
  
  return `rgb(${r}, ${g}, ${b})`
}
