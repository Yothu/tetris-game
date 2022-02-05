const createMatrix = (width, height) => {
  const matrix = [];
  for (let i = 0; i < width; i += 1) {
    const column = [];
    for (let j = 0; j < height; j += 1) {
      column.push(0);
    }
    matrix.push(column);
  }
  return matrix;
}

export default createMatrix;
