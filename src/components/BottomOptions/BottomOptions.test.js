import React from 'react';
import renderer from 'react-test-renderer';
import BottomOptions from './BottomOptions';

test('renders correctly', () => {
  const bottomoptions = renderer.create(<BottomOptions />).toJSON();
  expect(bottomoptions).toMatchSnapshot();
});
