import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import ActiveChef from '../components/active_chef.jsx'

// This test is shallow rendering our ActiveChef component
describe('ActiveChef Component', () => {
    it('ActiveChef should render without throwing an error', () => {
        expect(shallow(<ActiveChef />).exists(<form className='ActiveChef'></form>)).toBe(true)
      })
      it("should render initial layout", () => {
        const component = shallow(<ActiveChef />);
        expect(component.getElements()).toMatchSnapshot();
        })
    });
