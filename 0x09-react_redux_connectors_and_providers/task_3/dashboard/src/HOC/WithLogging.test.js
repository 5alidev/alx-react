import React from 'react';
import { mount } from 'enzyme';
import HOC from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC', () => {
    let consoleLogSpy;
  
    beforeEach(() => {
      // Spy on console.log before each test
      consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });
  
    afterEach(() => {
      // Restore the original console.log after each test
      consoleLogSpy.mockRestore();
    });
  
    it('logs mount and unmount for pure HTML element', () => {
      const WrappedComponent = HOC(() => <p />);
      
      const wrapper = mount(<WrappedComponent />);
      
      expect(consoleLogSpy).toHaveBeenCalledWith('Component Component is mounted');
      
      wrapper.unmount();
      
      expect(consoleLogSpy).toHaveBeenCalledWith('Component Component is going to unmount');
    });
  
    it('logs mount and unmount for a named component', () => {
      const WrappedComponent = HOC(Login);
  
      const wrapper = mount(<WrappedComponent />);
  
      expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is mounted');
  
      wrapper.unmount();
  
      expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is going to unmount');
    });
  });
