/**
 * gets a sequence in sequence starting at the first cell in cells.
 *
 * ie if cells[0] does not exist in the sequence then [] is returned
 * if cells[0] exists in sequence but cells[1] does not then [cells[0]] is returned
 **/
export function subsequence(cells, sequence) {
  let i = 0;
  let f = sequence.indexOf(cells[i].value);
  let seq = [];

  if (f === -1) {
    return [];
  }

  while (i < cells.length && (f+ i) < sequence.length && sequence[f+i] === cells[i].value) {
    seq.push(cells[i]);
    i++;
  }

  return seq;
}

/*****
 * from an index [x, y] the consecutive number alon y and x are added
 * to a list and checked to see if they are a subsequence
 ****/
export function getSubsequencesStartingAtIndex(index, cells, [width, height], seqSize, sequence) {
  if (index < 0 || index >= cells.length) {
    return [];
  }
  let x = index % width;
  let y = ((index - x) / width) | 0;

  // check column
  let col = [cells[index]];
  let row = [cells[index]];

  let yn, xn;
  for (let i = 1; i < seqSize; i++) {
    xn = (x + i) + y*width;
    yn = x + (y + i)*width;
    xn < cells.length && row.push(cells[(x + i) + y*width]);
    yn < cells.length && col.push(cells[x + (y + i)*width]);
  }

  if (subsequence(row, sequence).length !== seqSize) {
    row = [];
  }
  if (subsequence(col, sequence).length !== seqSize) {
    col = [];
  }

  return [...col, ...row];
}

/****
 * provides cells along x and y or seqSize cells before it. This is meant to reduce the number
 * of cells that have to be parsed (the problem space). Though some duplicates will be found
 * in the sequences due to how getSubsequencesStartingAtIndex functions.
 ****/
export function getSubsequences(cells, [width, height], [x, y], seqSize, sequence) {
  let sequences = [];
  let seq;

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < seqSize; j++) {
      seq = getSubsequencesStartingAtIndex((x + i) + (y - (seqSize-1) + j)*width, cells, [width, height], seqSize, sequence);
      seq.length !== 0 && sequences.push(seq);
    }
  }


  for (let i = 0; i < height; i++) {
    for (let j = 0; j <= seqSize; j++) {
      seq = getSubsequencesStartingAtIndex((x - (seqSize - 1) + j) + i*width, cells, [width, height], seqSize, sequence);
      seq.length !==  0 && sequences.push(seq);
    }
  }

  return sequences;
}
