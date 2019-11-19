/* eslint-disable no-console */
/* eslint-disable no-undef */
const color = {
  previous: '',
  current: '',
};

function init() {
  document.getElementById('previous').value = localStorage.getItem(color.previous);
  document.getElementById('current').value = localStorage.getItem(color.current);
  const div = document.createElement('div');
  const canvas = document.createElement('canvas');
  div.id = 'canvas__element';
  canvas.id = 'canvas';
  document.getElementById('container').appendChild(div);
  document.getElementById('canvas__element').appendChild(canvas);
  div.appendChild(canvas);
  canvas.width = 512;
  canvas.height = 512;
  ctx = canvas.getContext('2d');

}


function eraser() {

  document.getElementById('eraser').style.background = '#aaa';
  document.getElementById('pencil').style.background = '';
  document.getElementById('bucket').style.background = '';
  document.getElementById('choose__color').style.background = '';

  canvas.onmousedown = function(event) {
    canvas.onmousemove = function(event) {
      const x = event.offsetX;
      const y = event.offsetY;
      ctx.clearRect(x, y, 32, 32);
    };
    canvas.onmouseup = function(event) {
      canvas.onmousemove = null;
    };
    color__save();
  };
}

function bucket() {

  document.getElementById('bucket').style.background = '#aaa';
  document.getElementById('eraser').style.background = '';
  document.getElementById('pencil').style.background = '';
  document.getElementById('choose__color').style.background = '';

  canvas.onmousedown = function(event) {
    // color.current = localStorage.getItem(color.curent);
    ctx.fillStyle = document.getElementById('current').value;
    ctx.fillRect(0, 0, 512, 512);
    ctx.fill();
    color__save();
  };
}

function pencil() {
  document.getElementById('pencil').style.background = '#aaa';
  document.getElementById('eraser').style.background = '';
  document.getElementById('bucket').style.background = '';
  document.getElementById('choose__color').style.background = '';
  // localStorage.setItem(color.current, document.getElementById('current').value);
  canvas.onmousedown = function(event) {
    color.current = document.getElementById('current').value;
    canvas.onmousemove = function(event) {
      const x = event.offsetX;
      const y = event.offsetY;
      ctx.fillStyle = color.current;
      ctx.fillRect(x, y, 32, 32);
      ctx.fill();
      color__save();
    };
    canvas.onmouseup = function(event) {
      canvas.onmousemove = null;
    };
  };
}
function choose__color() {
  document.getElementById('pencil').style.background = '';
  document.getElementById('eraser').style.background = '';
  document.getElementById('bucket').style.background = '';
  document.getElementById('choose__color').style.background = '#aaa';
}
function color__function() {
  document.getElementById('previous').value = document.getElementById('current').value;
}
function color__save() {
  localStorage.setItem(color.previous, document.getElementById('previous').value);
  localStorage.setItem(color.current, document.getElementById('current').value);
}

addEventListener ('keydown', e => {
  switch (e.keyCode) {
    case 80:
      pencil();
      break;
    case 66:
      bucket();
      break;
    case 67:
      eraser();
      break;
    default:
  }
});

init();
pencil();
bucket();
eraser();
choose__color();
color__function();
