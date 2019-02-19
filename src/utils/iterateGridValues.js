export default function iterateGridValues([x, y], [width, height], [...cells]) {
  let currentCell = cells[x + y*width];

  cells[x + y*width] = {...currentCell, value: currentCell.value + 1, active: true};

  // iterate values
  // update cells in column
  for (let i = 0; i < y; i++) {
    let cell = cells[x + i*width];
    cells[x + i*width] = {...cell, value: cell.value + 1, active: true};
  }

  for (let i = y+1; i < height; i++) {
    let cell = cells[x + i*width];
    cells[x + i*width] = {...cell, value: cell.value + 1, active: true};
  }

  // update cells in row
  for (let i = 0; i < x; i++) {
    let cell = cells[i + y*width];
    cells[i + y*width] = {...cell, value: cell.value + 1, active: true};
  }

  for (let i = x+1; i < width; i++) {
    let cell = cells[i + y*width];
    cells[i + y*width] = {...cell, value: cell.value + 1, active: true};
  }

  return cells;
}
