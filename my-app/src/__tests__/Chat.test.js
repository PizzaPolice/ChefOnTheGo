import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Chat from '../components/chat.jsx'


it('Chat component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chat />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

// This test is shallow rendering our Chat component
describe('ActiveChef Component', () => {
    it('ActiveChef should render without throwing an error', () => {
        expect(shallow(<Chat />).exists(<form className='Chat'></form>)).toBe(true)
      })
      it("should render initial layout", () => {
        const component = shallow(<Chat />);
        expect(component.getElements()).toMatchSnapshot();
        })
    });