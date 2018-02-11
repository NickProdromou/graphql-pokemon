import React from 'react';
import App from '../App.js';
import renderer from 'react-test-renderer';

test('It renders without error', () => {
  const component = renderer.create(
    <App/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})