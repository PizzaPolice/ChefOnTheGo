import React,{Component} from 'react';
import { Link } from "react-router-dom";



function changeQuantity(event) {
    const id = event.target.id;
    var new_val = event.target.value;
    document.getElementById(id).value = new_val;
}

function FoodList(props) {
    const foods = props.foods;
    const listItems = foods.map((food) => 
        <div key={food.dish_name} className="item">
            <div className="description">
                <span>{food.dish_name}</span>
            </div>
            <div className="quantity">
                <div className="container">
                    <input id={"quantity" + food.dish_name} type="text" defaultValue="1" onChange={changeQuantity}/> 
                </div>
            </div>
            <div className="total-price">
                <span id={"price" + food.dish_name}>${food.dish_price}</span>
            </div>
        </div>
    );
    return (<div>{listItems}</div>);
}

class FoodOrder extends Component
{
    constructor(props) {
        super(props);
        var dish_list = JSON.parse(window.localStorage.getItem("dish_list"));
        this.state = {
            foods: dish_list
        };
        this.findPrice = this.findPrice.bind(this);
    }

    componentDidMount() {
        var storage = window.localStorage;
        if (storage !== undefined && storage !== null) {
            var foods = storage.getItem("foods");
            var foodList = JSON.parse(foods);
            if (foodList !== null && foodList !== undefined) {
                this.setState({foods: foodList});
            }
        }
    }

    findPrice() {
        var total_cost = 0;
        for (var i = 0; i < this.state.foods.length; i++) {
            var food = this.state.foods[i];
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
                    <FoodList foods={this.state.foods}/>
                    <div className="panel-footer">
                        <Link to="list_chefs">
                            <button className="btn back-btn">Back</button>
                        </Link>
                        <Link to="checkout" onClick={this.findPrice}>
                            <button className="btn next-btn">Submit Order</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default FoodOrder
