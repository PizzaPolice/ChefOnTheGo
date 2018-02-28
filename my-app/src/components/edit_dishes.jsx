import React,{Component} from 'react';
class EditDishes extends Component
{
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
    <textarea id="dish_desc" rows="10" cols="70">Enter a description of your dish</textarea>
    <input type="button" onClick={this.newDish} value="Create your dish!"></input>
  </form>

  <h1>Edit your offerings</h1>
  <h2>Check the checkbox below a dish to select it for deletion</h2>

    <input type="button" onClick={this.deleteDish} value="Delete selected dishes"></input>
  <div id="current_dishes"></div>
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
