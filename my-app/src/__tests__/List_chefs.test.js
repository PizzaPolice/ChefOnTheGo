import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import ListChefs from '../components/list_chefs.js'


describe('Login Component', () => {
    it('Login should render without throwing an error', () => {
        expect(shallow(<ListChefs />).exists(<form className='Login'></form>)).toBe(true)
      })
      it("should render initial layout", () => {
        const component = shallow(<ListChefs />);
        expect(component.getElements()).toMatchSnapshot();
        })
    });



    describe('Submit Button', () => {
        it('should be defined', () => {
          expect(ListChefs).toBeDefined();
        });

        it('should render correctly', () => {
          const button = shallow(
            <ListChefs name='btn back-btn' />
          );
          expect(button).toMatchSnapshot();
        });
    });
