import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as foodActions from '../actions/food_actions';


//Creates a list of dishes (jsx)
function FoodList(props)
{
  const foodList = props.foods
  const foods = foodList.map((food) =>
    <div key={food.name} id={food.name}>
      {food.name}<br/>
      {food.desc}<br/>
      Price: {food.price} <br/>
      Delete Dish
      <input type="checkbox" className="delete_box"></input>
    </div>
  );
  return (foods);
}

class EditDishes extends Component
{
  render()
  {
    return(
      <div>
        <title>Edit Dishes</title>
        <p>Welcome User</p>
        <h1>Create a new dish!</h1>
        <form className="new_dish">
          <h3>Dish name</h3>
          <input id="name" type="text"></input>
          <h3>Price</h3>
          <input type="number" id="price"></input>
          <h3>Description</h3>
          <textarea id="desc" 
            rows="10" 
            cols="70" 
            defaultValue="Enter a description of your dish">
          </textarea>
          <input type="button" 
            onClick={this.newFood.bind(this)}
            value="Create your dish!">
          </input>
        </form>

        <h1>Edit your offerings</h1>
        <h2>Check the checkbox below a dish to select it for deletion</h2>

        <input type="button" 
          onClick={this.findToDeleteFood.bind(this)} 
          value="Delete selected dishes">
        </input>
        <FoodList foods={this.props.foods}></FoodList>
      </div>
    );
  }

  findToDeleteFood()
  {
    var foods = this.props.foods;
    
    //Get a list of all the check boxes
    var checkBoxes = document.getElementsByClassName("delete_box");
    for (var x = 0; x < checkBoxes.length; x++)
    {
      //Check if theyre checked when delete is pressed. If so remove them from dishes
      if (checkBoxes[x].checked === true)
      {
        var foodName = checkBoxes[x].parentNode.id;
        for (var y = 0; y < foods.length; y++)
        {
          if (foods[y].name === foodName) {
            this.props.actions.deleteFood(foods[y]);
          }
        }
      }
    }
  }

  newFood()
  {
    //Get the name of the dish and its description
    var foodName = document.getElementById("name").value;
    var foodDesc = document.getElementById("desc").value;
    var foodPrice = document.getElementById("price").value;

    //Check for valid input (dish name and description are not blank
    if (foodName === "" || foodDesc === "")
    {
      window.alert("Please make sure all fields are not blank");
      return;
    }

    var newFood = {
      "name": foodName, 
      "price": foodPrice, 
      "desc": foodDesc
    }
    this.props.actions.saveFood(newFood);
  }
}

function mapStateToProps(state) {
  return {
    foods: state.foods
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(foodActions, dispatch)
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(EditDishes);
