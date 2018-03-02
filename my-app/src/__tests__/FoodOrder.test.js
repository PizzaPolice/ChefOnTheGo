import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import FoodOrder from '../components/food_order.jsx'


describe('Login Component', () => {
    it('Login should render without throwing an error', () => {
        expect(shallow(<FoodOrder />).exists(<form className='Login'></form>)).toBe(true)
      })
      it("should render initial layout", () => {
        const component = shallow(<FoodOrder />);
        expect(component.getElements()).toMatchSnapshot();
        })
    });

    describe('Submit Button', () => {
        it('should be defined', () => {
          expect(FoodOrder).toBeDefined();
        });

        it('should render correctly', () => {
          const button = shallow(
            <FoodOrder name='btn next-btn' />
          );
          expect(button).toMatchSnapshot();
        });
    });
