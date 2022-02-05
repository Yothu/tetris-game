const createColumn = () => {
  const column = document.createElement('div');
  column.classList.add('boardColumn', 'p-0');
  column.innerText = 'a';
  return column;
};

const createRow = (width) => {
  const row = document.createElement('div');
  row.classList.add('boardRow', 'd-flex', 'justify-content-center');

  for (let i = 0; i < width; i += 1) {
    row.appendChild(createColumn());
  }

  return row;
}

const createBoard = (boardContainer, width, height) => {
  for (let i = 0; i < height; i += 1) {
    boardContainer.appendChild(createRow(width));
  }
};

export default createBoard;
