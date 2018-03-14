import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addFood} from '../actions/food_actions.js';


//Creates a list of dishes (jsx)
function FoodList(props)
{
  const foodList = props.foods
  const foods = foodList.map((food) =>
    <div key={food.name} id={food.name}>
      {food.name}<br/>
      {food.desc}<br/>
      Price: {food.price}<br/>
      Delete Dish
      <input type="checkbox" className="delete_box"></input>
    </div>
  );
  return (foods);
}

class EditDishes extends Component
{
  constructor(props)
  {
    super(props);

    //Initialize dish list
    /*
    var store = window.localStorage;
    if (store !== undefined && store !== null)
    {
      var currUser = window.sessionStorage.getItem("currentUser");
      var dishList = JSON.parse(store.getItem("dish_list"));
      if (dishList === null || dishList.length === 0)
      {
        dishList = [];
      }
      //List of all dishes only from this chef
      var chef_dishes = []
      //Filter so that only those from this chef are displayed
      for (var x = 0; x < dishList.length; x++)
      {
        if (dishList[x]["chef_name"] === currUser)
        {
          chef_dishes.push(dishList[x]);
        }
      }
      //Set state to the list of dishes
      this.state =
        {
          chef:currUser,
          dishes:chef_dishes
        }
    }
    //If storage doesnt work, have a non-null backup state
    else
    {
      this.state =
        {
          chef:"ERROR NO USER LOGGED IN",
          dishes:[]
        };
    }
    */
  }
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
          onClick={this.deleteFood.bind(this)} 
          value="Delete selected dishes">
        </input>
        <FoodList foods={this.props.foods}></FoodList>
      </div>
    );
  }

  deleteFood()
  {
    var chef_dishes = this.state.dishes;
    //Get a list of all the check boxes
    var checkBoxes = document.getElementsByClassName("delete_box");

    for (var x = 0; x < checkBoxes.length; x ++)
    {
      //Check if theyre checked when delete is pressed. If so remove them from dishes
      if (checkBoxes[x].checked === true)
      {
        var dishName = checkBoxes[x].parentNode.id;
        for (var y = 0; y < chef_dishes.length; y ++)
        {
          if (chef_dishes[y]["dish_name"] === dishName)
          {
            chef_dishes.splice(y,1);
            break;
          }
        }
      }
    }
    //Update Local Storage
    window.localStorage.setItem("dish_list",JSON.stringify(chef_dishes));
    //Update state

    this.setState(function (){
      return {
        dishes:chef_dishes
      }
    }
    );
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

    this.props.addFood(newFood);
    /*
    //Add the dish to the state
    chef_dishes.push({"chef_name":currUser, "dish_name": dishName, "dish_price": dishPrice, "dish_desc": dishDesc});

    //Update the state
    this.setState(function (){
      return {
        dishes:chef_dishes
      }
    }
    );

    //Update local storage
    window.localStorage.setItem("dish_list",JSON.stringify(chef_dishes));
    */
  }
}

function mapStateToProps(state) {
  return {
    foods: state.foods
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({addFood: addFood}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EditDishes);
