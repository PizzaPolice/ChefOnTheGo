function incrementValue(id)
{
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 10) {
        value++;
            document.getElementById(id).value = value;
    }
}

function decrementValue(id)
{
    var value = parseInt(document.getElementById(id).value, 10);


    value = isNaN(value) ? 0 : value;
    if(value >= 1){
        value--;
            document.getElementById(id).value = value;
    }

}

function calculatePrice()
{
    var sessionStorage = window.sessionStorage;
    var shopping_cart = document.getElementById("shopping_cart");
    var final_cost = 0.0;

    for (var i = 0; i < shopping_cart.getElementsByClassName("item").length; i++)
    {
        var child = shopping_cart.getElementsByClassName("item")[i];
        var quantity = document.getElementById(i).value;
        var price = child.children.item(2).innerHTML.substring(1);
        final_cost += quantity * price;
    }

    sessionStorage.setItem("cost", final_cost.toFixed(2));
}


function listFood()
{
    var localStorage = window.localStorage;
    var dishes = JSON.parse(localStorage.getItem("dishes"));

    if (dishes == null || dishes.length == 0)
    {
        console.log("help");
        return;
    }
    for (var i = 0; i < dishes.length; i++)
    {
        var dish = dishes[i];
        var div = document.createElement("div");
        div.setAttribute("class", "item");

        var descriptionDiv = document.createElement("div");
        descriptionDiv.setAttribute("class", "description");
        var descriptionSpan = document.createElement("span");
        descriptionSpan.innerHTML = dish.dish_name;
        descriptionDiv.appendChild(descriptionSpan);

        var quantity = document.createElement("div");
        quantity.setAttribute("class", "quantity");
        var container = document.createElement("div");
        container.setAttribute("class", "container");
        var decButton = document.createElement("input");
        decButton.setAttribute("type", "button");
        decButton.setAttribute("onclick", "decrementValue(" + i + ")");
        decButton.setAttribute("value", "-");
        var incButton = document.createElement("input");
        incButton.setAttribute("type", "button");
        incButton.setAttribute("onclick", "incrementValue(" + i + ")");
        incButton.setAttribute("value", "+");
        var text = document.createElement("input");
        text.setAttribute("type", "text");
        text.setAttribute("name", "quantity");
        text.setAttribute("maxlength", "2");
        text.setAttribute("max", "10");
        text.setAttribute("size", "1");
        text.setAttribute("id", i);
        text.setAttribute("value", "1");

        var total_price = document.createElement("div");
        total_price.setAttribute("class", "total-price");
        total_price.innerHTML = "$" + dish.dish_price;
        
        container.appendChild(decButton);
        container.appendChild(text);
        container.appendChild(incButton);
        quantity.appendChild(container);

        div.appendChild(descriptionDiv);
        div.appendChild(quantity);
        div.appendChild(total_price);

        document.getElementById("shopping_cart").appendChild(div);
    }
}
listFood();