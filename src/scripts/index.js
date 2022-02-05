import '../components/style.css';
import createBoard from './modules/displayBoard.js';
import createMatrix from './modules/createTetrisMatrix';

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 24;

const tetrisTable = document.querySelector('.tetris-table');

createBoard(tetrisTable, BOARD_WIDTH, BOARD_HEIGHT);
const matrix = createMatrix(BOARD_WIDTH, BOARD_HEIGHT);

matrix[0][0] = 1;

const checkPositionOf1 = () => {
  for (let i = 0; i < BOARD_WIDTH; i += 1) {
    for (let j = 0; j < BOARD_HEIGHT - 1; j += 1) {
      if (matrix[i][j] == 1) {
        matrix[i][j] = 0;
        return [i, j + 1]; 
      }
    }
  }
  console.log('NO 1 found');
  return false;
}

const displayMov = (matrix) => {
  const table = tetrisTable.children;
  for (let i = 0; i < BOARD_WIDTH; i += 1) {
    for (let j = 0; j < BOARD_HEIGHT; j += 1) {
      if (matrix[i][j] === 1 ) {
        table[j].children[i].innerHTML = '0';
      } else {
        table[j].children[i].innerHTML = '.';
      }
    }    
  }
}

const down = () => {
  console.log('down');
  const pos = checkPositionOf1(matrix);
  matrix[pos[0]][pos[1]] = 1;
  displayMov(matrix);
}

// setInterval(down, 100);
// down(matrix);
// setTimeout(down(matrix), 1000);

console.log(matrix);