import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Customize from '../components/customize.js'


it('Customize component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Customize />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

// This test is shallow rendering our Customize component
describe('Customize Component', () => {
    it('Customize should render without throwing an error', () => {
        expect(shallow(<Customize />).exists(<form className='Customize'></form>)).toBe(true)
      })
    });