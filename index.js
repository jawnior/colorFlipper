let button = document.getElementById('button');

function changeColor() {
  let randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
  document.querySelector('body').style.backgroundColor = randomColor;
}

button.addEventListener('click', changeColor);