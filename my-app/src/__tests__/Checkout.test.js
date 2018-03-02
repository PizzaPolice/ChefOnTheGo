import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Checkout from '../components/checkout.jsx'


describe('Login Component', () => {
    it('Login should render without throwing an error', () => {
        expect(shallow(<Checkout />).exists(<form className='Login'></form>)).toBe(true)
      })
      it("should render initial layout", () => {
        const component = shallow(<Checkout />);
        expect(component.getElements()).toMatchSnapshot();
        })
    });



    describe('Login Button', () => {
        it('should be defined', () => {
          expect(Checkout).toBeDefined();
        });

        it('should render correctly', () => {
          const button = shallow(
            <Checkout name='btn next-btn' />
          );
          expect(button).toMatchSnapshot();
        });
       });
