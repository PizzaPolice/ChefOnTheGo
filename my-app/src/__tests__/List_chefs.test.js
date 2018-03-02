import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import ListChefs from '../components/list_chefs.js'

/*
it('ListChefs component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListChefs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
*/

// This test is shallow rendering our ListChefs component
describe('ListChefs Component', () => {
    it('ListChefs should render without throwing an error', () => {
        expect(shallow(<ListChefs />).exists(<form className='ListChefs'></form>)).toBe(true)
      })
      it("should render initial layout", () => {
        const component = shallow(<ListChefs />);
        expect(component.getElements()).toMatchSnapshot();
        })
    });
