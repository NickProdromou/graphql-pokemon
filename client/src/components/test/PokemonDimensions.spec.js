import React from "react";
import renderer from "react-test-renderer";
import PokemonDimensions from "../PokemonDimensions";

describe("PokemonDimensions component", () => {
  const props = {
    type: "Fire"
  };

  test("renders", () => {
    const props = {
      min: "34",
      max: "65",
    };

    const component = renderer.create(
      <PokemonDimensions
        min={props.min}
        max={props.max}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
