import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext } from "../App/AppContext";

describe("Header", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    const header = shallow(<Header />);
    expect(header.exists()).toBe(true);
  });

  it("renders an img tag", () => {
    const header = shallow(<Header />);
    expect(header.find("img").length).toBe(1);
  });

  it("renders an h1 tag", () => {
    const header = shallow(<Header />);
    expect(header.find("h1").length).toBe(1);
  });

  it(`Tests that logoutSection is not rendered with default context values`, () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
      logOut: jest.fn(),
    };

    wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection").length).toBe(0);
    expect(wrapper.find("#logoutSection").exists()).toBe(false);
    wrapper.unmount();
  });

  it(`Tests that logoutSection is rendered with context values`, () => {
    const context = {
      user: {
        email: "test@test.com",
        password: "123",
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };

    wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection").length).toBe(1);
    expect(wrapper.find("#logoutSection").exists()).toBe(true);
    wrapper.unmount();
  });

  it(`Verifies that the logOut function is called when clicking on logOut link`, () => {
    const context = {
      user: {
        email: "test@test.com",
        password: "123",
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };

    const spy = jest.spyOn(context, "logOut");

    wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    wrapper.find("a").simulate("click");

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });
});
