import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import FoodOrder from '../components/food_order.jsx'
import configureStore from '../store/configureStore';
import {Provider} from 'react-redux';
import { MemoryRouter } from 'react-router'

//Mock store
const store = configureStore();


it('EditDishes component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}>
      <MemoryRouter>
        <FoodOrder />
      </MemoryRouter>
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);

  


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

  });
 