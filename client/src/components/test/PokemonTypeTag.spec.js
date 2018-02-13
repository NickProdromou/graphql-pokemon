import React from "react";
import renderer from "react-test-renderer";
import PokemonTypeTag from "../PokemonTypeTag";

describe("PokemonTypeTag component", () => {
  const props = {
    type: "Fire"    
  };

  test("renders", () => {
    const component = renderer.create(
      <PokemonTypeTag type={props.type} subtitle={props.subtitle} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });  
});
