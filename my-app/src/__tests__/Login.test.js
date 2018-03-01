import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Login from '../components/login.js'

it('Login component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

//This test is shallow rendering our Login component
describe('Login Component', () => {
    it('Login should render without throwing an error', () => {
        expect(shallow(<Login />).exists(<form className='Login'></form>)).toBe(true)
      })
    });