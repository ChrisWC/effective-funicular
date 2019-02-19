let fibSequence = [];

export function generateFibSequence(max, previousSequence) {
  let sequence = previousSequence;
  let index = previousSequence.length;

  if (index === 0) {
    sequence.push(1);
    index++;
  }

  if (index === 1) {
    sequence.push(1);
    index++;
  }

  for (index; sequence[index-1] < max; index++) {
    sequence.push(sequence[index-1] + sequence[index-2]);
  }

  return sequence;
}

export default function getFibsequence(max) {
  fibSequence = generateFibSequence(max, fibSequence);
  return fibSequence;
}
