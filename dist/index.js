(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var palette = null;
var textarea = null;
main();

function onkeypress(keyboardEvent) {
  switch (keyboardEvent.key) {
    case 'Enter':
      if (keyboardEvent.ctrlKey) {
        resetInput();
      }

      if (keyboardEvent.shiftKey) {
        muteText();
      }

      insertNewLine();
      randomizePallete();
      break;

    default:
      insertText(keyboardEvent.key);
      break;
  }
}

function getActiveInput() {
  var c = textarea.children;
  var input = c[c.length - 2]; // last on is a brick element

  return input;
}

function insertText(text) {
  getActiveInput().innerHTML += text;
}

function muteText() {
  getActiveInput().classList.add('mute');
}

function insertNewLine() {
  var bar = textarea.querySelector('b');
  if (bar) bar.parentElement.removeChild(bar);
  var el = document.createElement('p');
  textarea.appendChild(el);
  textarea.innerHTML += '<b>▮</b>';
}

function resetInput() {
  textarea.innerHTML = '';
}

function main() {
  window.addEventListener('keypress', onkeypress);
  window.addEventListener('click', _onclick);
  window.addEventListener('paste', _onpaste);
  textarea = document.querySelector('bb#main text');
}

function _onpaste() {
  var paste = (event.clipboardData || window.clipboardData).getData('text');

  if (!paste.length) {
    insertText('🍍');
    return;
  }

  insertText(paste);
}

function _onclick() {
  randomizePallete();
}

function _loadPalette() {
  palette = document.querySelector('db#palette').innerHTML;
  palette = palette.split('\n'); // Array[32]. Palette from https://lospec.com/palette-list/pineapple-32
}

function randomizePallete() {
  if (!palette) {
    _loadPalette();
  }

  var colors = palette.length;
  var colorA = Math.round(Math.random() * colors);
  var colorB = Math.round(Math.random() * colors);

  if (colorA == colorB) {
    randomizePallete();
    return;
  }

  document.body.style.setProperty("--color-a", "#" + palette[colorA]);
  document.body.style.setProperty("--color-b", "#" + palette[colorB]);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxPQUFPLEdBQUcsSUFBZDtBQUNBLElBQUksUUFBUSxHQUFHLElBQWY7QUFFQSxJQUFJOztBQUVKLFNBQVMsVUFBVCxDQUFvQixhQUFwQixFQUFtQztFQUNsQyxRQUFRLGFBQWEsQ0FBQyxHQUF0QjtJQUNDLEtBQUssT0FBTDtNQUNDLElBQUksYUFBYSxDQUFDLE9BQWxCLEVBQTJCO1FBQzFCLFVBQVU7TUFDVjs7TUFDRCxJQUFJLGFBQWEsQ0FBQyxRQUFsQixFQUE0QjtRQUMzQixRQUFRO01BQ1I7O01BRUQsYUFBYTtNQUNiLGdCQUFnQjtNQUNoQjs7SUFDRDtNQUNDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBZixDQUFWO01BQ0E7RUFkRjtBQWdCQTs7QUFFRCxTQUFTLGNBQVQsR0FBMEI7RUFDekIsSUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQW5CO0VBQ0EsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFGLEdBQVcsQ0FBWixDQUFmLENBRnlCLENBRU07O0VBRS9CLE9BQU8sS0FBUDtBQUNBOztBQUVELFNBQVMsVUFBVCxDQUFvQixJQUFwQixFQUEwQjtFQUN6QixjQUFjLEdBQUcsU0FBakIsSUFBOEIsSUFBOUI7QUFDQTs7QUFFRCxTQUFTLFFBQVQsR0FBb0I7RUFDbkIsY0FBYyxHQUFHLFNBQWpCLENBQTJCLEdBQTNCLENBQStCLE1BQS9CO0FBQ0E7O0FBRUQsU0FBUyxhQUFULEdBQXlCO0VBQ3hCLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQVo7RUFDQSxJQUFJLEdBQUosRUFBUyxHQUFHLENBQUMsYUFBSixDQUFrQixXQUFsQixDQUE4QixHQUE5QjtFQUVULElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQVg7RUFDQSxRQUFRLENBQUMsV0FBVCxDQUFxQixFQUFyQjtFQUVBLFFBQVEsQ0FBQyxTQUFULElBQXNCLFVBQXRCO0FBQ0E7O0FBRUQsU0FBUyxVQUFULEdBQXNCO0VBQ3JCLFFBQVEsQ0FBQyxTQUFULEdBQXFCLEVBQXJCO0FBQ0E7O0FBRUQsU0FBUyxJQUFULEdBQWdCO0VBQ2YsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9DLFVBQXBDO0VBQ0EsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFFBQWpDO0VBQ0EsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFFBQWpDO0VBQ0EsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBQVg7QUFDQTs7QUFFRCxTQUFTLFFBQVQsR0FBb0I7RUFDbkIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBTixJQUF1QixNQUFNLENBQUMsYUFBL0IsRUFBOEMsT0FBOUMsQ0FBc0QsTUFBdEQsQ0FBWjs7RUFFQSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQVgsRUFBbUI7SUFDbEIsVUFBVSxDQUFDLElBQUQsQ0FBVjtJQUNBO0VBQ0E7O0VBRUQsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBOztBQUVELFNBQVMsUUFBVCxHQUFvQjtFQUNuQixnQkFBZ0I7QUFDaEI7O0FBRUQsU0FBUyxZQUFULEdBQXdCO0VBQ3ZCLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxTQUEvQztFQUNBLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBUixDQUFjLElBQWQsQ0FBVixDQUZ1QixDQUVRO0FBQy9COztBQUVELFNBQVMsZ0JBQVQsR0FBNEI7RUFDM0IsSUFBSSxDQUFDLE9BQUwsRUFBYztJQUNiLFlBQVk7RUFDWjs7RUFFRCxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBdkI7RUFDQSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUksQ0FBQyxNQUFMLEtBQWdCLE1BQTNCLENBQWY7RUFDQSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUksQ0FBQyxNQUFMLEtBQWdCLE1BQTNCLENBQWY7O0VBRUEsSUFBSSxNQUFNLElBQUksTUFBZCxFQUFzQjtJQUFFLGdCQUFnQjtJQUFJO0VBQVM7O0VBRXJELFFBQVEsQ0FBQyxJQUFULENBQWMsS0FBZCxDQUFvQixXQUFwQixDQUFnQyxXQUFoQyxFQUE2QyxNQUFNLE9BQU8sQ0FBQyxNQUFELENBQTFEO0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYyxLQUFkLENBQW9CLFdBQXBCLENBQWdDLFdBQWhDLEVBQTZDLE1BQU0sT0FBTyxDQUFDLE1BQUQsQ0FBMUQ7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImxldCBwYWxldHRlID0gbnVsbDtcbmxldCB0ZXh0YXJlYSA9IG51bGw7XG5cbm1haW4oKTtcblxuZnVuY3Rpb24gb25rZXlwcmVzcyhrZXlib2FyZEV2ZW50KSB7XG5cdHN3aXRjaCAoa2V5Ym9hcmRFdmVudC5rZXkpIHtcblx0XHRjYXNlICdFbnRlcic6IFxuXHRcdFx0aWYgKGtleWJvYXJkRXZlbnQuY3RybEtleSkge1xuXHRcdFx0XHRyZXNldElucHV0KCk7XG5cdFx0XHR9IFxuXHRcdFx0aWYgKGtleWJvYXJkRXZlbnQuc2hpZnRLZXkpIHtcblx0XHRcdFx0bXV0ZVRleHQoKTtcblx0XHRcdH0gXG5cblx0XHRcdGluc2VydE5ld0xpbmUoKTtcblx0XHRcdHJhbmRvbWl6ZVBhbGxldGUoKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRpbnNlcnRUZXh0KGtleWJvYXJkRXZlbnQua2V5KTtcblx0XHRcdGJyZWFrO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZUlucHV0KCkge1xuXHRjb25zdCBjID0gdGV4dGFyZWEuY2hpbGRyZW47XG5cdGNvbnN0IGlucHV0ID0gY1tjLmxlbmd0aCAtIDJdOyAvLyBsYXN0IG9uIGlzIGEgYnJpY2sgZWxlbWVudFxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0VGV4dCh0ZXh0KSB7XG5cdGdldEFjdGl2ZUlucHV0KCkuaW5uZXJIVE1MICs9IHRleHQ7XG59XG5cbmZ1bmN0aW9uIG11dGVUZXh0KCkge1xuXHRnZXRBY3RpdmVJbnB1dCgpLmNsYXNzTGlzdC5hZGQoJ211dGUnKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0TmV3TGluZSgpIHtcblx0Y29uc3QgYmFyID0gdGV4dGFyZWEucXVlcnlTZWxlY3RvcignYicpO1xuXHRpZiAoYmFyKSBiYXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChiYXIpO1xuXG5cdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHR0ZXh0YXJlYS5hcHBlbmRDaGlsZChlbCk7XG5cblx0dGV4dGFyZWEuaW5uZXJIVE1MICs9ICc8Yj7ilq48L2I+J1xufVxuXG5mdW5jdGlvbiByZXNldElucHV0KCkge1xuXHR0ZXh0YXJlYS5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gbWFpbigpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgb25rZXlwcmVzcylcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX29uY2xpY2spXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIF9vbnBhc3RlKTtcblx0dGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYiNtYWluIHRleHQnKTtcbn1cblxuZnVuY3Rpb24gX29ucGFzdGUoKSB7XG5cdGxldCBwYXN0ZSA9IChldmVudC5jbGlwYm9hcmREYXRhIHx8IHdpbmRvdy5jbGlwYm9hcmREYXRhKS5nZXREYXRhKCd0ZXh0Jyk7XG5cblx0aWYgKCFwYXN0ZS5sZW5ndGgpIHtcblx0XHRpbnNlcnRUZXh0KCfwn42NJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aW5zZXJ0VGV4dChwYXN0ZSk7XG59XG5cbmZ1bmN0aW9uIF9vbmNsaWNrKCkge1xuXHRyYW5kb21pemVQYWxsZXRlKCk7XG59XG5cbmZ1bmN0aW9uIF9sb2FkUGFsZXR0ZSgpIHtcblx0cGFsZXR0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RiI3BhbGV0dGUnKS5pbm5lckhUTUw7XG5cdHBhbGV0dGUgPSBwYWxldHRlLnNwbGl0KCdcXG4nKTsgLy8gQXJyYXlbMzJdLiBQYWxldHRlIGZyb20gaHR0cHM6Ly9sb3NwZWMuY29tL3BhbGV0dGUtbGlzdC9waW5lYXBwbGUtMzJcbn1cblxuZnVuY3Rpb24gcmFuZG9taXplUGFsbGV0ZSgpIHtcblx0aWYgKCFwYWxldHRlKSB7XG5cdFx0X2xvYWRQYWxldHRlKCk7XG5cdH1cblxuXHRjb25zdCBjb2xvcnMgPSBwYWxldHRlLmxlbmd0aDtcblx0Y29uc3QgY29sb3JBID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY29sb3JzKTtcblx0Y29uc3QgY29sb3JCID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY29sb3JzKTtcblxuXHRpZiAoY29sb3JBID09IGNvbG9yQikgeyByYW5kb21pemVQYWxsZXRlKCk7IHJldHVybjsgfVxuXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNvbG9yLWFcIiwgXCIjXCIgKyBwYWxldHRlW2NvbG9yQV0pO1xuXHRkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb2xvci1iXCIsIFwiI1wiICsgcGFsZXR0ZVtjb2xvckJdKTtcbn1cbiJdfQ==
