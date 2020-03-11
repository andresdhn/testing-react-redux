import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../utils/";
import Header from "./index";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Renders without crashing", () => {
    const wrapper = findByTestAtrr(component, "header");
    expect(wrapper.length).toBe(1);
  });

  it("should render a logo", () => {
    const logo = findByTestAtrr(component, "logo");
    expect(logo.length).toBe(1);
  });
});
