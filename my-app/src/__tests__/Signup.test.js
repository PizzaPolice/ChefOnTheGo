import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Signup from '../components/signup.js'


describe('Signup Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<Signup />).exists(<form className='Signup'></form>)).toBe(true)
      })
    });
