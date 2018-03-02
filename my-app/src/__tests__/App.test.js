import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import App from '../App.js';


describe('App renders without crashing', () => {
  it('App should render without throwing an error', () => {
      expect(shallow(<App />).exists(<form className='App'></form>)).toBe(true)
    })
    it("should render initial layout", () => {
      const component = shallow(<App />);
      expect(component.getElements()).toMatchSnapshot();
      })
  });

/*
it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/
