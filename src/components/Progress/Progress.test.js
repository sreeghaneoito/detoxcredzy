import React from 'react';
import renderer from 'react-test-renderer';
import Progress from './Progress.component';

test('renders correctly', () => {
  const tree = renderer.create(<Progress />).toJSON();
  expect(tree).toMatchSnapshot();
});
