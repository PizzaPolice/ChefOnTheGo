import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Signup from '../components/signup.js'

it('Signup component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Signup />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

// This test is shallow rendering our Signup component
describe('Signup Component', () => {
    it('Signup should render without throwing an error', () => {
        expect(shallow(<Signup />).exists(<form className='Signup'></form>)).toBe(true)
      })
    });