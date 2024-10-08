import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

function App(isLoggedIn=false) {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

// App.defaultProps = {
//   isLoggedIn: false
// }

export default App;
