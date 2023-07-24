import React from 'react';
import renderer from 'react-test-renderer';
import AnimatedModal from './AnimatedModal.component';

test('renders correctly', () => {
  const animatedmodal = renderer.create(<AnimatedModal />).toJSON();
  expect(animatedmodal).toMatchSnapshot();
});
