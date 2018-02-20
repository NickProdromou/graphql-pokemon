import React from "react";
import renderer from "react-test-renderer";
import AttackCell from "../AttackCell";

describe("AttackCell component", () => {
  const props = {
    type: "Fire"
  };

  test("renders", () => {
    const props = {
      name: "foo",
      type: "bar",
      damage: 54,
      category: "baz"
    };

    const component = renderer.create(
      <AttackCell
        name={props.name}
        type={props.type}
        damage={props.damage}
        category={props.category}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
