import { generateFibSequence } from './fibSequence';

test('generates fibsequence until max is surpassed', () => {
  let sequence = generateFibSequence(5, []);

  expect(sequence).toEqual([1, 1, 2, 3, 5]);
});
