const HARD = 6;
const EASY = 3;

var dificulty = HARD;
var colors;
var pickedColor;
var message = document.getElementById('message');
var squares = document.querySelectorAll('.square');
var title = document.querySelector('header');
var newColorsBtn = document.getElementById('reset');
var colorDisplay = document.getElementById('colorDisplay');
var easyBtn = document.getElementById('btn-easy');
var hardBtn = document.getElementById('btn-hard');

generateRandomColors();
pickColor();
setUpSquares();
setUpBtn();


function setUpBtn(){
  newColorsBtn.addEventListener('click', () => {
    message.textContent = '';
    generateRandomColors();
    pickColor();
    setUpSquares();
  });

  easyBtn.addEventListener('click',() =>{
    easyBtn.classList.toggle('selected',true);
    hardBtn.classList.toggle('selected',false);
    dificulty = EASY;
    setUpSquares();
  });
  
  hardBtn.addEventListener('click',() =>{
    hardBtn.classList.toggle('selected',true);
    easyBtn.classList.toggle('selected',false);
    dificulty = HARD;
    setUpSquares();
  });
}

function setUpSquares(){
  
  for (let i = 0; i < dificulty; i++) {
    squares[i].addEventListener('click', function(){
      let clickedColor = this.style.backgroundColor;

      if(clickedColor == pickedColor){
        message.textContent = 'Correct!';
        title.style.backgroundColor = pickedColor;
      }else{
        message.textContent = 'Try again',
        this.style.backgroundColor = '#232323';
      }
    })
    squares[i].style.backgroundColor = colors[i];
  }
}

function pickColor(){
  let random = Math.floor(Math.random() * 6);
  pickedColor = colors[random];
  colorDisplay.textContent = pickedColor;
}

function randomColor(){
  let r = Math.floor(Math.random() * 256),
      g = Math.floor(Math.random() * 256),
      b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomColors(){
  let arr = [];
  for (let i = 0; i < dificulty; i++){
    arr.push(randomColor());
  }

  colors = arr;
}

