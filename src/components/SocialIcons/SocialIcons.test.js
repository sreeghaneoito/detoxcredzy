import React from 'react';
import renderer from 'react-test-renderer';
import SocialIcons from './SocialIcons.component';

test('renders correctly', () => {
  const socialicons = renderer.create(<SocialIcons />).toJSON();
  expect(socialicons).toMatchSnapshot();
});
