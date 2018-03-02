import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Customize from '../components/customize.js'


// This test is shallow rendering our Customize component
describe('Customize Component', () => {
    it('Customize should render without throwing an error', () => {
        expect(shallow(<Customize />).exists(<form className='Customize'></form>)).toBe(true)
      })
      it("should render initial layout", () => {
        const component = shallow(<Customize />);
        expect(component.getElements()).toMatchSnapshot();
        })
    });

/*
it('Customize component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Customize />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
*/