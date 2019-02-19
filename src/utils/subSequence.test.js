import { subsequence, getSubsequences } from './subSequence';

test('get cells that are subsequence of sequence', () => {
  let cells = Array.from({length: 9}, (val, index) => ({value: index}));
  let seq = subsequence(cells, [0, 1, 2, 3]);

  expect(seq.map(val => val.value)).toEqual([0, 1, 2, 3]);
});

test('get subsequences', () => {
  let sequence = [1, 2, 3];

  let cells = [0, 0, 0, 1, 2, 3, 0, 0, 0].map((val) => ({value: val}));

  let sequences = getSubsequences(cells, [3, 3], [1, 1], 3, sequence);

  expect(sequences.length).toEqual(2);

  cells = [0, 1, 0, 0, 2, 0, 0, 3, 0].map((val) => ({value: val}));

  sequences = getSubsequences(cells, [3, 3], [1, 1], 3, sequence);

  expect(sequences.length).toEqual(2);
});
