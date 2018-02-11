import React from "react";
import renderer from "react-test-renderer";
import Footer from "../Footer";

test("It renders without error", () => {
  const component = renderer.create(<Footer />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
