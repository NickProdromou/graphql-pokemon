import React from "react";
import TableCell from "../TableCell";
import renderer from "react-test-renderer";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("TableCell component", () => {
  
  test("renders with children", () => {
    const component = renderer.create(
      <TableCell>
        <div>
          <p>This is a children</p>
        </div>
      </TableCell>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
