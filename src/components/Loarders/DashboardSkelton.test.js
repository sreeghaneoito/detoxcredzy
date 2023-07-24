import React from 'react';
import renderer from 'react-test-renderer';
import DashboardSkelton from './DashboardSkelton.component';

test('renders correctly', () => {
  const animatedmodal = renderer.create(<DashboardSkelton />).toJSON();
  expect(animatedmodal).toMatchSnapshot();
});
