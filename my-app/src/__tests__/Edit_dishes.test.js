import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import EditDishes from '../components/edit_dishes.jsx'
import food_reducer from '../reducers/food_reducer';
import configureStore from '../store/configureStore';
import {Provider} from 'react-redux';
import { MemoryRouter } from 'react-router';

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


  const store = configureStore();
  //Mock store
it('EditDishes component renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
  <MemoryRouter>
    <EditDishes />
  </MemoryRouter>
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});



// This test is shallow rendering our EditDishes component
describe('EditDishes Component', () => {    
  it('EditDishes should render without throwing an error', () => {
    expect(shallow(<Provider store={store}><EditDishes /></Provider>).exists(<form className='EditDishes'></form>)).toBe(true)
  })
  it("should render initial layout", () => {
    //Mock store
    const component = shallow(<Provider store={store}><EditDishes /></Provider>);
    expect(component.getElements()).toMatchSnapshot();
  })
});


//Reducer tests
it('should return the initial state', () => {
  expect(food_reducer(undefined, {})).toEqual([]);
})
