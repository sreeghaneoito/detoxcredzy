import React from 'react';
import renderer from 'react-test-renderer';
import Toast from './Toast.component';

test('renders correctly', () => {
  const toast = renderer.create(<Toast />).toJSON();
  expect(toast).toMatchSnapshot();
});
