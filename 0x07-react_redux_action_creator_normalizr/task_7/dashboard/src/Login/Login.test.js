import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

describe("Login", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    const login = shallow(<Login />);
    expect(login.exists()).toBe(true);
  });

  it("renders two input tags", () => {
    const login = shallow(<Login />);
    expect(login.find("input").length).toBe(2);
  });

  it("render two label tags", () => {
    const login = shallow(<Login />);
    expect(login.find("label").length).toBe(2);
  });

  it("verify that the submit button is disabled by default", () => {
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  });

  it("verify that after changing the value of the two inputs, the button is enabled", () => {
    wrapper.find("#email").simulate("change", { target: { value: "test" } });
    wrapper.find("#password").simulate("change", { target: { value: "test" } });
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(
      false
    );
  });
});
