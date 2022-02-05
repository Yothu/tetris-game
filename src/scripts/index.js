import '../components/style.css';
import createBoard from './modules/createBoard.js';

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 24;

const container = document.querySelector('.tetris-table');

createBoard(container, BOARD_WIDTH, BOARD_HEIGHT);
