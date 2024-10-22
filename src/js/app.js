// TODO: write your code here
import Validator from './Validator.js';

console.log('Проверка корректности Nickname:');

const array = ['q2w2e2-2r1_23q2wer', 'sssdddfff', 'sss-dddfff', 'sssdd_dfff',
'sss12323456dddfff', 'ssff_', 'ssff-', '-ssss', '_ssss', '12356', '-_-', '_-_'];

for(const key in array) {
  console.log('Никнейм \"' + array[key] + '\": ' + new Validator().validateUsername(array[key]));
}
