window.onload = loadDishes;

/* Loads the dishes from local storage to be deleted*/
function loadDishes()
{
}

/* Called when creating a new dish, stores it and puts it in the list*/
function newDish()
{
  //Get the name of the dish and its description
  var dishName = document.getElementById("dish_name").value;
  var dishDesc = document.getElementById("dish_desc").value;

  //get the name of the current chef
  currUser = window.localStorage.getItem("currentUser");

  //Check for valid input (dish name and description are not blank
  if (dishName == "" || dishDesc == "")
  {
    window.alert("Please make sure all fields are not blank");
    return;
  }

  //Grab the list of all dishes from local storage
  var localStorage = window.localStorage;
  var chef_dishes = JSON.parse(localStorage.getItem("dishes"));
  //If not instantiated, do so
  if (dishes == null || dishes.length == 0)
  {
    dishes = [];
  }
  
  //Add the current dish to this chef's dish list and store it in local storage
  dishes.push({"chef_name":currUser, "dish_name": dishName, "dish_desc": dishDesc});
  localStorage.setItem("dishes",JSON.stringify(dishes));

  //Re load the list of dishes
  loadDishes(); 
}
