import Validator from '../Validator.js';

test('Validator nickname OK', () => {
  expect(new Validator().validateUsername('q2w2e2-2r1_23q2wer')).toBe(true);
})
test('Validator nickname no OK', () => {
  expect(new Validator().validateUsername('12356')).toBe(false);
})
