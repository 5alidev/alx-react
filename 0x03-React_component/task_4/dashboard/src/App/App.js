import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

class App extends Component {

  // Define the event handler as a method
  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  // component is mounted
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  // remove the event listener when the component is unmounted
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {

    // props
    const { isLoggedIn, logOut } = this.props;

    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];
  
    const listNotifications = [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
    ]
  
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
          <div className="App-body">
            <p>Login to access the full dashboard</p>
            {isLoggedIn ?
              (
                <BodySectionWithMarginBottom title='Course list'>
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
              )
              :
              (
                <BodySectionWithMarginBottom title='Log in to continue'>
                  <Login />
                </BodySectionWithMarginBottom>
              )
            }
            <BodySection title='News from the School'><p>paragraph with some random text</p></BodySection>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

// App.defaultProps = {
//   isLoggedIn: false
// }

export default App;
