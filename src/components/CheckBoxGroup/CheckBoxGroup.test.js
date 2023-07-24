import React from 'react';
import renderer from 'react-test-renderer';
import CheckBoxGroup from './CheckBoxGroup.component';

test('renders correctly', () => {
  const checkboxgroup = renderer.create(<CheckBoxGroup />).toJSON();
  expect(checkboxgroup).toMatchSnapshot();
});
