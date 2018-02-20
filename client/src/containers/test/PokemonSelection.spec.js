import React from "react";
import renderer from "react-test-renderer";
import PokemonSelection from "../PokemonSelection";

describe("PokemonSelection Component", () => {
  it("It renders without error", () => {
    const component = renderer.create(<PokemonSelection />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Compare button should not be visible when no pokemon selected")
  it("Compare button should be shown when 2 pokemon selected")
});
