import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";
import { configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Header Component", () => {
  test("It renders without error", () => {
    const mockContext = { router: () => {} };
    const component = shallow(<Header />, { context: mockContext });

    expect(toJson(component)).toMatchSnapshot();
  });
});
