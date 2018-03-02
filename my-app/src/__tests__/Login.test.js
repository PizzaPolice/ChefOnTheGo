import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Login from '../components/login.js'

//This test is shallow rendering our Login component
describe('Login Component', () => {
    it('Login should render without throwing an error', () => {
        expect(shallow(<Login />).exists(<form className='Login'></form>)).toBe(true)
      })
      it("should render initial layout", () => {
        const component = shallow(<Login />);
        expect(component.getElements()).toMatchSnapshot();
        })
    });

    describe('Login Button', () => {
        it('should be defined', () => {
          expect(Login).toBeDefined();
        });

        it('should render correctly', () => {
          const button = shallow(
            <Login name='btn next-btn' />
          );
          expect(button).toMatchSnapshot();
        });
       });


/*
it('Login component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
*/
