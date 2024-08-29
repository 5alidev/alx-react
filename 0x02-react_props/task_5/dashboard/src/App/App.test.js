import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList.js';

describe('App', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders the Notifications component', () => {
        const app = shallow(<App/>);
        expect(app.find(Notifications).exists()).toBe(true);
    });

    it('renders the Header component', () => {
        const app = shallow(<Header/>);
        expect(app.find(Header).exists).toBe(true);
    });

    it('renders the Login component', () => {
        const app = shallow(<Login/>);
        expect(app.find(Login).exists).toBe(true);
    });

    it('renders the Footer component', () => {
        const app = shallow(<Footer/>);
        expect(app.find(Footer).exists()).toBe(true);
    });

    it('check that CourseList is not displayed', () => {
        const app = shallow(<App isLoggedIn={false} />);
        expect(app.contains(<CourseList />)).toBe(false);
    });
});

describe('App isLoggedIn', () => {
    it('Login component is not included', () => {
        const app = shallow(<App isLoggedIn={true} />);
        expect(app.contains(<Login />)).toBe(false);
    });

    it('CourseList component is included', () => {
        const app = shallow(<App isLoggedIn={true} />);
        expect(app.contains(<CourseList />)).toBe(true);
    });
});