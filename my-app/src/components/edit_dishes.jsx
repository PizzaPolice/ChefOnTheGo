import React,{Component} from 'react';


function DishList(props)
{

  const dishList = props.dish
  const dishes = dishList.map((dish) =>
    <div key={dish.dish_name}>
    {dish.dish_name}<br/>
    {dish.dish_desc}<br/>
    Price: {dish.dish_price}<br/>
    Delete Dish
    <input type="checkbox"></input>
    </div>
  );
  console.log(dishList);
  console.log(dishes);
  return (dishes);
}

class EditDishes extends Component
{

  constructor(props)
  {
    super(props);
    var currUser = window.sessionStorage.getItem("currentUser");

    var store = window.localStorage;
    if (store !== undefined && store !== null)
    {
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
      this.state =
        {
          dishes:chef_dishes
        }

    }
    else
    {
      this.state =
        {
          dishes:[]
        };
    }


      this.state =
        {
          dishes:[{chef_name:"CHEF",dish_name:"DISH",dish_desc:"DESC",dish_price:"0.01"}]
        };
  }
  render()
  {
    return(
      <div>
      <title>Edit Dishes</title>

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
    alert("DELETING DISH!");
  }

  newDish()
  {
    alert("NEWDISH");
  }
}
export default EditDishes
