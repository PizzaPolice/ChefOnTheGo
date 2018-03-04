import React,{Component} from 'react';

//Creates a list of dishes (jsx)
function DishList(props)
{

  const dishList = props.dish
  const dishes = dishList.map((dish) =>
    <div key={dish.dish_name} id={dish.dish_name}>
    {dish.dish_name}<br/>
    {dish.dish_desc}<br/>
    Price: {dish.dish_price}<br/>
    Delete Dish
    <input type="checkbox" className="delete_box"></input>
    </div>
  );
  return (dishes);
}

class EditDishes extends Component
{
  constructor(props)
  {
    super(props);

    //Initialize dish list
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


  }
  render()
  {
    return(
      <div>
      <title>Edit Dishes</title>
      <p>Welcome {this.state.chef}</p>
      <h1>Create a new dish!</h1>
      <form className="new_dish">
      <h3>Dish name</h3>
      <input id="dish_name" type="text"></input>
      <h3>Price</h3>
      <input type="number" id="dish_price"></input>
      <h3>Description</h3>
      <textarea id="dish_desc" rows="10" cols="70" defaultValue="Enter a description of your dish"></textarea>
      <input type="button" onClick={this.newDish.bind(this)} value="Create your dish!"></input>
      </form>

      <h1>Edit your offerings</h1>
      <h2>Check the checkbox below a dish to select it for deletion</h2>

      <input type="button" onClick={this.deleteDish.bind(this)} value="Delete selected dishes"></input>
      <DishList dish={this.state.dishes}></DishList>
      </div>
    );
  }

  deleteDish()
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
    window.localStorage.setItem("dishes",JSON.stringify(chef_dishes));
    //Update state

    this.setState(function (){
      return {
        dishes:chef_dishes
      }
    }
    );
  }

  newDish()
  {
    //List of dishes
    var chef_dishes = this.state.dishes;

    //Get the name of the dish and its description
    var dishName = document.getElementById("dish_name").value;
    var dishDesc = document.getElementById("dish_desc").value;
    var dishPrice = document.getElementById("dish_price").value;

    var currUser = this.state.chef;


    //Check for valid input (dish name and description are not blank
    if (dishName === "" || dishDesc === "")
    {
      window.alert("Please make sure all fields are not blank");
      return;
    }

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

  }
}
export default EditDishes
