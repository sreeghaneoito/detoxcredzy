import React from 'react';
import renderer from 'react-test-renderer';
import AppStatusBar from './AppStatusBar';

test('renders correctly', () => {
  const bottomoptions = renderer.create(<AppStatusBar />).toJSON();
  expect(bottomoptions).toMatchSnapshot();
});
