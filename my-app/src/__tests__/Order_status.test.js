import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import OrderStatus from '../components/order_status.jsx'


describe('Login Component', () => {
    it('Login should render without throwing an error', () => {
        expect(shallow(<OrderStatus />).exists(<form className='Login'></form>)).toBe(true)
      })
      it("should render initial layout", () => {
        const component = shallow(<OrderStatus />);
        expect(component.getElements()).toMatchSnapshot();
        })
    });

    describe('Submit Button', () => {
        it('should be defined', () => {
          expect(OrderStatus).toBeDefined();
        });

        it('should render correctly', () => {
          const button = shallow(
            <OrderStatus name='btn next-btn' />
          );
          expect(button).toMatchSnapshot();
        });
    });
