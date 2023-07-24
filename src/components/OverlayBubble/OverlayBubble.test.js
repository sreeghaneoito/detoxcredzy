import React from 'react';
import renderer from 'react-test-renderer';
import OverlayBubbles from './OverlayBubble.component';

test('renders correctly', () => {
  const tree = renderer.create(<OverlayBubbles />).toJSON();
  expect(tree).toMatchSnapshot();
});
