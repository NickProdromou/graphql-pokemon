import React from "react";
import renderer from "react-test-renderer";
import EvolutionRequirementsCard from "../EvolutionRequirementsCard";

describe("EvolutionRequirementsCard component", () => {
  const props = {
    type: "Fire"
  };

  test("renders", () => {
    const props = {
      name: "foo",      
      amount: 23,
    };

    const component = renderer.create(
      <EvolutionRequirementsCard
        name={props.name}
        amount={props.amount}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
