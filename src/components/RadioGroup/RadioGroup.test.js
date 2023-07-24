import React from 'react';
import renderer from 'react-test-renderer';
import RadioGroup from './RadioGroup.component';

test('renders correctly', () => {
  const tree = renderer.create(<RadioGroup />).toJSON();
  expect(tree).toMatchSnapshot();
});
