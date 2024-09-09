import React from "react";
import { shallow } from "enzyme";
import App from "./App.js";
import Notifications from "../Notifications/Notifications.js";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import Footer from "../Footer/Footer.js";
import CourseList from "../CourseList/CourseList.js";
import { StyleSheetTestUtils } from "aphrodite";

describe("App", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the Notifications component", () => {
    const app = shallow(<App />);
    expect(app.find(Notifications).exists()).toBe(true);
  });

  it("renders the Header component", () => {
    const app = shallow(<Header />);
    expect(app.find(Header).exists).toBe(true);
  });

  it("renders the Login component", () => {
    const app = shallow(<Login />);
    expect(app.find(Login).exists).toBe(true);
  });

  it("renders the Footer component", () => {
    const app = shallow(<Footer />);
    expect(app.find(Footer).exists()).toBe(true);
  });

  it("check that CourseList is not displayed", () => {
    const app = shallow(<App isLoggedIn={false} />);
    expect(app.contains(<CourseList />)).toBe(false);
  });
});

describe("App isLoggedIn", () => {
  it("Login component is not included", () => {
    const app = shallow(<App isLoggedIn={true} />);
    expect(app.contains(<Login />)).toBe(false);
  });

  it("CourseList component is included", () => {
    const app = shallow(<App isLoggedIn={true} />);
    expect(app.contains(<CourseList />)).toBe(true);
  });

  it("calls logOut and shows alert when Ctrl+H is pressed", () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    const wrapper = shallow(<App logOut={logOutMock} />);

    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith("Logging you out");

    alertMock.mockRestore(); // Restore the original alert function
  });
});

describe("App State", () => {
  it("verify that the default state for displayDrawer is false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("handleDisplayDrawer, changes the state to be true", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    const instance = wrapper.instance();

    instance.handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it("handleHideDrawer changes the state to false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    // const instance = wrapper.instance();

    wrapper.instance().handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toEqual(true);

    wrapper.instance().handleHideDrawer();

    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it(`Tests that the logIn function updates user's state correctly`, () => {
    wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const myUser = {
      email: "testy@gmail.com",
      password: "testy",
      isLoggedIn: true,
    };

    expect(wrapper.state().user).toEqual(user);
    const instance = wrapper.instance();
    instance.logIn(myUser.email, myUser.password);
    expect(wrapper.state().user).toEqual(myUser);
    wrapper.unmount();
  });

  it(`Tests that the logOut function updates user's state correctly`, () => {
    wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const myUser = {
      email: "testy@gmail.com",
      password: "testy",
      isLoggedIn: true,
    };

    expect(wrapper.state().user).toEqual(user);
    const instance = wrapper.instance();
    instance.logOut();
    expect(wrapper.state().user).toEqual(user);
    wrapper.unmount();
  });
});
