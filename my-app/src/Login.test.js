import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Login from './components/login.js'


describe('Login Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<Login />).exists(<form className='Login'></form>)).toBe(true)
      })
    });
