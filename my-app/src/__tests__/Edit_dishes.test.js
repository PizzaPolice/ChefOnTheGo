import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import EditDishes from '../components/edit_dishes.jsx'
import food_Reducer from '../reducers/food_reducer';
import { createStore } from 'redux'

/*
let mockedStore = configureStore([])({});
test('some test', () => {
  const wrapper = mount(<EditDishes foo="bar" />, {
    context: { store: mockedStore },
    childContextTypes: { store: PropTypes.object.isRequired }
  });
  expect(component.getElements()).toMatchSnapshot();
});
*/

//Mock store
store = createStore();

it('EditDishes component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><EditDishes /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  

// This test is shallow rendering our EditDishes component
describe('EditDishes Component', () => {    
    it('EditDishes should render without throwing an error', () => {
        expect(shallow(<EditDishes />).exists(<form className='EditDishes'></form>)).toBe(true)
      })
      it("should render initial layout", () => {
        const component = shallow(<EditDishes />);
        expect(component.getElements()).toMatchSnapshot();
        })
    });

    
//Reducer tests

      it('should return the initial state', () => {
            expect(food_Reducer(undefined, {})).toEqual([]);
        })
