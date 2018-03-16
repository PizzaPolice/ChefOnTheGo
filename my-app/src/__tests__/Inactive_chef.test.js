import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import InactiveChef from '../components/inactive_chef.jsx'
import { MemoryRouter } from 'react-router';

it('InactiveChef component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <InactiveChef />
        </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

// This test is shallow rendering our InactiveChef component
describe('InactiveChef Component', () => {
    it('InactiveChef should render without throwing an error', () => {
        expect(shallow(<InactiveChef />).exists(<form className='InactiveChef'></form>)).toBe(true)
      })
      it("should render initial layout", () => {
        const component = shallow(<InactiveChef />);
        expect(component.getElements()).toMatchSnapshot();
        })
    });