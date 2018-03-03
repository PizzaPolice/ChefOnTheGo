import React,{Component} from 'react';
import { Link } from "react-router-dom";

const const_foods = [
    {
        name: "food1",
        price: "100"
    },
    {
        name: "food2",
        price: "101"
    }
];

function FoodList(props) {
    const foods = props.foods;
    const listItems = foods.map((food) => 
        <div key={food.name} className="item">
            <div className="description">
                <span>{food.name}</span>
            </div>
            <div className="quantity">
                <div className="container">
                    <input type="text" defaultValue="1"/> 
                </div>
            </div>
            <div className="total-price">
                <span>${food.price}</span>
            </div>
        </div>
    );
    return (<div>{listItems}</div>);
}

class FoodOrder extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            foods: const_foods
        };
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
                    <Link to="checkout">
                        <button className="btn next-btn">Submit Order</button>
                    </Link>
                </div>
            </div>
        </div>
    );
    }
}
export default FoodOrder
