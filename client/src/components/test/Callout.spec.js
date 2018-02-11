import React from "react";
import renderer from "react-test-renderer";
import Callout from "../Callout";

describe("Callout component", () => {
  const props = {
    title: "This is a title",
    subtitle: "this is a subtitle"
  };

  test("renders correctly with correct props", () => {
    const component = renderer.create(
      <Callout title={props.title} subtitle={props.subtitle} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("uses default props", () => {
    const component = renderer.create(
      <Callout title={props.title} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
