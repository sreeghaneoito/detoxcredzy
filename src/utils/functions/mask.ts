import {createNumberMask} from 'react-native-mask-input';

export const dollarMask = createNumberMask({
  prefix: ['$ '],
  separator: ',',
  precision: 3,
  delimiter: ',',
});
