function listChefs()
{
    var localStorage = window.localStorage;
    var listOfChefs = JSON.parse(localStorage.getItem("chef"));

    listOfChefs.forEach(element => {
        document.getElementById("list_form").innerHTML += 
        "<div class='radio-input'>" + 
        "<input type='radio' name='chef' value='" + element.name + "'> <br>" +
          "Name: " + element.name + "<br>" +
          "Email: " + element.email + "<br>" +
        "</div>"
    });
}
listChefs();