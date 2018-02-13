import React from "react";
import renderer from "react-test-renderer";
import PokemonSelection from "../PokemonSelection";

describe("PokemonSelection Component", () => {
  test("It renders without error", () => {
    const component = renderer.create(<PokemonSelection />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("Compare button should not be visible when no pokemon selected")
  test("Compare button should be shown when 2 pokemon selected")
});
