import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import ActiveChef from '../components/active_chef.jsx'


it('ActiveChef component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ActiveChef />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

// This test is shallow rendering our ActiveChef component
describe('ActiveChef Component', () => {
    it('ActiveChef should render without throwing an error', () => {
        expect(shallow(<ActiveChef />).exists(<form className='ActiveChef'></form>)).toBe(true)
      })

      it("should render initial layout", () => {
        // when
        const component = shallow(<ActiveChef />);
        // then
        expect(component.getElements()).toMatchSnapshot();
        })
  
    });