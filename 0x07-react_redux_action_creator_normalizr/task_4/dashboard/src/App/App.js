import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";
import { AppContext, user } from "./AppContext";

class App extends Component {
  // constructor
  constructor(props) {
    super(props);

    this.handleKeyCombination = this.handleKeyCombination.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
      ],
    };
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  // Define the event handler as a method
  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  };

  // component is mounted
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // remove the event listener when the component is unmounted
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  // logIn
  logIn(email, password) {
    this.setState({ user: { email, password, isLoggedIn: true } });
  }

  // logOut
  logOut() {
    this.setState({ user: user });
  }

  // markNotificationAsRead
  markNotificationAsRead(id) {
    const newList = this.state.listNotifications.filter(
      (notif) => notif.id !== id
    );
    this.setState({ listNotifications: newList });
  }

  render() {
    // state
    const { displayDrawer } = this.state;

    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    return (
      <>
        <AppContext.Provider
          value={{ user: this.state.user, logOut: this.state.logOut }}
        >
          <Notifications
            listNotifications={this.state.listNotifications}
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div className="App">
            <Header />
            <div className={css(styles.App_body)}>
              <p>Login to access the full dashboard</p>
              {this.state.user.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login logIn={this.logIn} />
                </BodySectionWithMarginBottom>
              )}
              <BodySection title="News from the School">
                <p>paragraph with some random text</p>
              </BodySection>
            </div>
            <Footer />
          </div>
        </AppContext.Provider>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

// styles
const styles = StyleSheet.create({
  App_body: {
    padding: "3rem",
  },
});

// App.defaultProps = {
//   isLoggedIn: false
// }

export default App;
