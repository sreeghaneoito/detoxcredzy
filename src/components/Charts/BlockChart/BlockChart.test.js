import React from 'react';
import renderer from 'react-test-renderer';
import BlockChart from './BlockChart.component';

test('renders correctly', () => {
  const tree = renderer.create(<BlockChart />).toJSON();
  expect(tree).toMatchSnapshot();
});
