import React from 'react';
import renderer from 'react-test-renderer';
import Alert from './Alert.component';

test('renders correctly', () => {
  const tree = renderer.create(<Alert />).toJSON();
  expect(tree).toMatchSnapshot();
});
