import iterateGridValues from './iterateGridValues';

test('iterates values', () => {
  let initialCells = Array.from({length: 9}, (val) => ({value: 0}));
  let cells = iterateGridValues([1, 1], [3, 3], initialCells);

  // corners are 0
  expect(cells[0].value).toEqual(0);
  expect(cells[2].value).toEqual(0);
  expect(cells[6].value).toEqual(0);
  expect(cells[8].value).toEqual(0)

  // check iterated values
  expect(cells[1].value).toEqual(1);
  expect(cells[3].value).toEqual(1);
  expect(cells[4].value).toEqual(1);
  expect(cells[5].value).toEqual(1)
  expect(cells[7].value).toEqual(1)
});
