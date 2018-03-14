import React,{Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

function changeQuantity(event) {
  const id = event.target.id;
  var new_val = event.target.value;
  document.getElementById(id).value = new_val;
}

function FoodList(props) {
  const foods = props.foods;
  const listItems = foods.map((food) => 
    <div key={food.name} className="item">
      <div className="description">
        <span>{food.name}</span>
      </div>
      <div className="quantity">
        <div className="container">
          <input id={"quantity" + food.name} type="number" defaultValue="1" onChange={changeQuantity}/> 
        </div>
      </div>
      <div className="total-price">
        <span id={"price" + food.name}>${food.price}</span>
      </div>
    </div>
  );
  return (<div>{listItems}</div>);
}

class FoodOrder extends Component
{
  constructor(props) {
    super(props);
    /*
    var store = window.localStorage;
    if (store !== undefined && store !== null)
    {
      var dish_list = JSON.parse(window.localStorage.getItem("dish_list"));
      this.state = {
        foods: dish_list
      };
    }
    else
    {
      this.state = {
        foods: []
      };
    }
    */
  }

  findPrice() {
    var total_cost = 0;
    for (var i = 0; i < this.props.foods.length; i++) {
      var food = this.props.foods[i];
      var food_dom = document.getElementById("quantity" + food.name);
      var quantity = food_dom.value;
      if (quantity === '')
      {   
        quantity = 0;
      }
      total_cost += quantity * food.price;
    }

    var storage = window.sessionStorage;
    if (storage !== undefined && storage !== null) {
      storage.setItem("total_price", total_cost);
    }
  }

  render()
  {
    return(
      <div className="outer-panel">
        <div className="panel-body">
          <div className="title">
            Food Order
          </div>
          <FoodList foods={this.props.foods}/>
          <div className="panel-footer">
            <Link to="list_chefs">
              <button className="btn back-btn">Back</button>
            </Link>
            <Link to="checkout" onClick={this.findPrice.bind(this)}>
              <button className="btn next-btn">Submit Order</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    foods: state.foods
  };
}

export default connect(mapStateToProps)(FoodOrder);
