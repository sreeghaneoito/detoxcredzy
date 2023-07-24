import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button.component';

test('renders correctly', () => {
  const button = renderer.create(<Button />).toJSON();
  expect(button).toMatchSnapshot();
});
