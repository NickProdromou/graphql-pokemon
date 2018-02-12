import React from "react";
import renderer from "react-test-renderer";
import Header from "../Header";

describe("Header Component", () => {
  test("It renders without error", () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
