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

  document.body.style.setProperty("--dust-color-a", "#" + palette[colorA]);
  document.body.style.setProperty("--dust-color-b", "#" + palette[colorB]);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxPQUFPLEdBQUcsSUFBZDtBQUNBLElBQUksUUFBUSxHQUFHLElBQWY7QUFFQSxJQUFJOztBQUVKLFNBQVMsVUFBVCxDQUFvQixhQUFwQixFQUFtQztFQUNsQyxRQUFRLGFBQWEsQ0FBQyxHQUF0QjtJQUNDLEtBQUssT0FBTDtNQUNDLElBQUksYUFBYSxDQUFDLE9BQWxCLEVBQTJCO1FBQzFCLFVBQVU7TUFDVjs7TUFDRCxJQUFJLGFBQWEsQ0FBQyxRQUFsQixFQUE0QjtRQUMzQixRQUFRO01BQ1I7O01BRUQsYUFBYTtNQUNiLGdCQUFnQjtNQUNoQjs7SUFDRDtNQUNDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBZixDQUFWO01BQ0E7RUFkRjtBQWdCQTs7QUFFRCxTQUFTLGNBQVQsR0FBMEI7RUFDekIsSUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQW5CO0VBQ0EsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFGLEdBQVcsQ0FBWixDQUFmLENBRnlCLENBRU07O0VBRS9CLE9BQU8sS0FBUDtBQUNBOztBQUVELFNBQVMsVUFBVCxDQUFvQixJQUFwQixFQUEwQjtFQUN6QixjQUFjLEdBQUcsU0FBakIsSUFBOEIsSUFBOUI7QUFDQTs7QUFFRCxTQUFTLFFBQVQsR0FBb0I7RUFDbkIsY0FBYyxHQUFHLFNBQWpCLENBQTJCLEdBQTNCLENBQStCLE1BQS9CO0FBQ0E7O0FBRUQsU0FBUyxhQUFULEdBQXlCO0VBQ3hCLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQVo7RUFDQSxJQUFJLEdBQUosRUFBUyxHQUFHLENBQUMsYUFBSixDQUFrQixXQUFsQixDQUE4QixHQUE5QjtFQUVULElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQVg7RUFDQSxRQUFRLENBQUMsV0FBVCxDQUFxQixFQUFyQjtFQUVBLFFBQVEsQ0FBQyxTQUFULElBQXNCLFVBQXRCO0FBQ0E7O0FBRUQsU0FBUyxVQUFULEdBQXNCO0VBQ3JCLFFBQVEsQ0FBQyxTQUFULEdBQXFCLEVBQXJCO0FBQ0E7O0FBRUQsU0FBUyxJQUFULEdBQWdCO0VBQ2YsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9DLFVBQXBDO0VBQ0EsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFFBQWpDO0VBQ0EsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFFBQWpDO0VBQ0EsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBQVg7QUFDQTs7QUFFRCxTQUFTLFFBQVQsR0FBb0I7RUFDbkIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBTixJQUF1QixNQUFNLENBQUMsYUFBL0IsRUFBOEMsT0FBOUMsQ0FBc0QsTUFBdEQsQ0FBWjs7RUFFQSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQVgsRUFBbUI7SUFDbEIsVUFBVSxDQUFDLElBQUQsQ0FBVjtJQUNBO0VBQ0E7O0VBRUQsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBOztBQUVELFNBQVMsUUFBVCxHQUFvQjtFQUNuQixnQkFBZ0I7QUFDaEI7O0FBRUQsU0FBUyxZQUFULEdBQXdCO0VBQ3ZCLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxTQUEvQztFQUNBLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBUixDQUFjLElBQWQsQ0FBVixDQUZ1QixDQUVRO0FBQy9COztBQUVELFNBQVMsZ0JBQVQsR0FBNEI7RUFDM0IsSUFBSSxDQUFDLE9BQUwsRUFBYztJQUNiLFlBQVk7RUFDWjs7RUFFRCxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBdkI7RUFDQSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUksQ0FBQyxNQUFMLEtBQWdCLE1BQTNCLENBQWY7RUFDQSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUksQ0FBQyxNQUFMLEtBQWdCLE1BQTNCLENBQWY7O0VBRUEsSUFBSSxNQUFNLElBQUksTUFBZCxFQUFzQjtJQUFFLGdCQUFnQjtJQUFJO0VBQVM7O0VBRXJELFFBQVEsQ0FBQyxJQUFULENBQWMsS0FBZCxDQUFvQixXQUFwQixDQUFnQyxnQkFBaEMsRUFBa0QsTUFBTSxPQUFPLENBQUMsTUFBRCxDQUEvRDtFQUNBLFFBQVEsQ0FBQyxJQUFULENBQWMsS0FBZCxDQUFvQixXQUFwQixDQUFnQyxnQkFBaEMsRUFBa0QsTUFBTSxPQUFPLENBQUMsTUFBRCxDQUEvRDtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibGV0IHBhbGV0dGUgPSBudWxsO1xubGV0IHRleHRhcmVhID0gbnVsbDtcblxubWFpbigpO1xuXG5mdW5jdGlvbiBvbmtleXByZXNzKGtleWJvYXJkRXZlbnQpIHtcblx0c3dpdGNoIChrZXlib2FyZEV2ZW50LmtleSkge1xuXHRcdGNhc2UgJ0VudGVyJzogXG5cdFx0XHRpZiAoa2V5Ym9hcmRFdmVudC5jdHJsS2V5KSB7XG5cdFx0XHRcdHJlc2V0SW5wdXQoKTtcblx0XHRcdH0gXG5cdFx0XHRpZiAoa2V5Ym9hcmRFdmVudC5zaGlmdEtleSkge1xuXHRcdFx0XHRtdXRlVGV4dCgpO1xuXHRcdFx0fSBcblxuXHRcdFx0aW5zZXJ0TmV3TGluZSgpO1xuXHRcdFx0cmFuZG9taXplUGFsbGV0ZSgpO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdGluc2VydFRleHQoa2V5Ym9hcmRFdmVudC5rZXkpO1xuXHRcdFx0YnJlYWs7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0QWN0aXZlSW5wdXQoKSB7XG5cdGNvbnN0IGMgPSB0ZXh0YXJlYS5jaGlsZHJlbjtcblx0Y29uc3QgaW5wdXQgPSBjW2MubGVuZ3RoIC0gMl07IC8vIGxhc3Qgb24gaXMgYSBicmljayBlbGVtZW50XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBpbnNlcnRUZXh0KHRleHQpIHtcblx0Z2V0QWN0aXZlSW5wdXQoKS5pbm5lckhUTUwgKz0gdGV4dDtcbn1cblxuZnVuY3Rpb24gbXV0ZVRleHQoKSB7XG5cdGdldEFjdGl2ZUlucHV0KCkuY2xhc3NMaXN0LmFkZCgnbXV0ZScpO1xufVxuXG5mdW5jdGlvbiBpbnNlcnROZXdMaW5lKCkge1xuXHRjb25zdCBiYXIgPSB0ZXh0YXJlYS5xdWVyeVNlbGVjdG9yKCdiJyk7XG5cdGlmIChiYXIpIGJhci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGJhcik7XG5cblx0Y29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdHRleHRhcmVhLmFwcGVuZENoaWxkKGVsKTtcblxuXHR0ZXh0YXJlYS5pbm5lckhUTUwgKz0gJzxiPuKWrjwvYj4nXG59XG5cbmZ1bmN0aW9uIHJlc2V0SW5wdXQoKSB7XG5cdHRleHRhcmVhLmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBtYWluKCkge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBvbmtleXByZXNzKVxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfb25jbGljaylcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgX29ucGFzdGUpO1xuXHR0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JiI21haW4gdGV4dCcpO1xufVxuXG5mdW5jdGlvbiBfb25wYXN0ZSgpIHtcblx0bGV0IHBhc3RlID0gKGV2ZW50LmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGEpLmdldERhdGEoJ3RleHQnKTtcblxuXHRpZiAoIXBhc3RlLmxlbmd0aCkge1xuXHRcdGluc2VydFRleHQoJ/CfjY0nKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpbnNlcnRUZXh0KHBhc3RlKTtcbn1cblxuZnVuY3Rpb24gX29uY2xpY2soKSB7XG5cdHJhbmRvbWl6ZVBhbGxldGUoKTtcbn1cblxuZnVuY3Rpb24gX2xvYWRQYWxldHRlKCkge1xuXHRwYWxldHRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGIjcGFsZXR0ZScpLmlubmVySFRNTDtcblx0cGFsZXR0ZSA9IHBhbGV0dGUuc3BsaXQoJ1xcbicpOyAvLyBBcnJheVszMl0uIFBhbGV0dGUgZnJvbSBodHRwczovL2xvc3BlYy5jb20vcGFsZXR0ZS1saXN0L3BpbmVhcHBsZS0zMlxufVxuXG5mdW5jdGlvbiByYW5kb21pemVQYWxsZXRlKCkge1xuXHRpZiAoIXBhbGV0dGUpIHtcblx0XHRfbG9hZFBhbGV0dGUoKTtcblx0fVxuXG5cdGNvbnN0IGNvbG9ycyA9IHBhbGV0dGUubGVuZ3RoO1xuXHRjb25zdCBjb2xvckEgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMpO1xuXHRjb25zdCBjb2xvckIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMpO1xuXG5cdGlmIChjb2xvckEgPT0gY29sb3JCKSB7IHJhbmRvbWl6ZVBhbGxldGUoKTsgcmV0dXJuOyB9XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZHVzdC1jb2xvci1hXCIsIFwiI1wiICsgcGFsZXR0ZVtjb2xvckFdKTtcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZHVzdC1jb2xvci1iXCIsIFwiI1wiICsgcGFsZXR0ZVtjb2xvckJdKTtcbn1cbiJdfQ==
