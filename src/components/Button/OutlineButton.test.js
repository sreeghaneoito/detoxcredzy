import React from 'react';
import renderer from 'react-test-renderer';
import OutlineButton from './OutlineButton.component';

test('renders correctly', () => {
  const outlinebutton = renderer.create(<OutlineButton />).toJSON();
  expect(outlinebutton).toMatchSnapshot();
});
