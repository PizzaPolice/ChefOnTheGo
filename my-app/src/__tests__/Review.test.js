import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Review from '../components/review.jsx'

it('Review component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Review />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

// This test is shallow rendering our Review component
describe('Review Component', () => {
    it('Review should render without throwing an error', () => {
        expect(shallow(<Review />).exists(<form className='Review'></form>)).toBe(true)
      })
      it("should render initial layout", () => {
        const component = shallow(<Review />);
        expect(component.getElements()).toMatchSnapshot();
        })
    });
