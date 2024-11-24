
const input = document.getElementById('bebra')
const counterCanvas = document.getElementById('counter')
const color = document.getElementById('color')
const currentColor = document.getElementById('currentColor')

const widthColor = ["50", "#eeeeee"]

function ranger() {
 
  input.addEventListener('input', () => {
    counterCanvas.textContent = input.value; // front Width
    let pointerWidth = input.value; 
    widthColor[0] = pointerWidth
    console.log(pointerWidth)

  });

  color.addEventListener('input', () => {
    let pointerColor = color.value; // Get color value
    currentColor.textContent = pointerColor; // Update color display
    widthColor[1] = pointerColor;
    console.log("Color:", pointerColor);
  });

}

ranger()

// export default widthColor - это надо раскоментить, когда добавишь этот файл.
// файл, где у тебя стоит width 100: в самом начале написать: import ranger from './ranger.js' .
//То, где у тебя стоит width 100 написать widthColor[0]
//То, где нужен цвет: widthColor[1]

// pointerWidth - твой размер курсора, который динамически меняется
// input - текущее значение на rangeBar
// counterCanvas - переменная для себя, чтобы на фронте было видно, как меняется значение

