window.onload = loadDishes;

function getDishes()
{

  //get the name of the current chef
  currUser = window.localStorage.getItem("currentUser");

  //Load the list of all dishes
  all_dishes = JSON.parse(window.localStorage.getItem("dishes"));
  if (all_dishes == null || all_dishes.length == 0)
  {
    all_dishes = [];
  }

  //List of all dishes only from this sheft
  chef_dishes = []
  //Filter so that only those from this chef are displayed
  for (var x = 0; x < all_dishes.length; x ++)
  {
    if (all_dishes[x]["chef_name"] === currUser)
    {
      chef_dishes.push(all_dishes[x]);
    }
  }
  return chef_dishes
}

/* Loads the dishes from local storage to be deleted*/
function loadDishes()
{

  //Empty out all of the dishes
  curr_dishes = document.getElementById("current_dishes");
  while(curr_dishes.hasChildNodes())
  {
    curr_dishes.removeChild(curr_dishes.lastChild);
  }

  //get dishes of the current chef
  var chef_dishes = getDishes();

  //Loop through all dishes from this chef and display them
  for (var x = 0; x < chef_dishes.length; x ++) 
  {
    var dishName = chef_dishes[x]["dish_name"];
    var dishDesc = chef_dishes[x]["dish_desc"];

    var newSection = document.createElement("SECTION");

    var dishNameText = document.createTextNode(dishName);
    var dishSection = document.createElement("p");
    dishSection.appendChild(dishNameText);
    dishSection.setAttribute("class","dish_name");
    newSection.setAttribute("id",dishName);

    var dishDescSection = document.createElement("p");
    var desc_text = document.createTextNode(dishDesc);
    dishDescSection.appendChild(desc_text);
    dishDescSection.setAttribute("class","dish_desc");


    var deleteBox = document.createElement("input");
    deleteBox.setAttribute("type","checkbox");
    deleteBox.setAttribute("class","delete_box");

    newSection.appendChild(dishSection);
    newSection.appendChild(dishDescSection);
    newSection.appendChild(deleteBox);

    //Get the div holding all the dishes
    dishList = document.getElementById("current_dishes");
    //Append the dish description to the list
    dishList.appendChild(newSection);
  }

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
  var dishes = JSON.parse(localStorage.getItem("dishes"));
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

function deleteDish()
{
  //get the list of dishes
  var chef_dishes = getDishes();
  //Get a list of all the check boxes
  var checkBoxes = document.getElementsByClassName("delete_box");
  for (var x = 0; x < checkBoxes.length; x ++)
  {
    //Check if theyre checked when delete is pressed. If so remove them from dishes
    if (checkBoxes[x].checked == true)
    {
      var dishName = checkBoxes[x].parentNode.id;
      console.log(dishName);
      for (var y = 0; y < chef_dishes.length; y ++)
      {
        if (chef_dishes[y]["dish_name"] == dishName)
        {
          chef_dishes.splice(y,1);
          break;
        }
      }
    }
  }

  localStorage.setItem("dishes",JSON.stringify(chef_dishes));
  console.log(JSON.stringify(chef_dishes));
  loadDishes();

}
