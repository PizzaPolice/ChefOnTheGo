function chat()
{
  //Get text in the chat box
  var message = document.getElementsByClassName("chatbox")[0].value;
  //Check if the string is non-empty
  if (msg !== "")
  {
    //Create the new chat message and put it in the list
    var newMessage = document.createElement("SECTION");

    var name = document.createElement("p");
    var name_text = document.createTextNode("user_name");
    name.setAttribute("class","name");
    name.appendChild(name_text);

    var msg = document.createElement("p");
    var msg_text = document.createTextNode(message);
    msg.setAttribute("class","message");
    msg.appendChild(msg_text);

    newMessage.appendChild(name);
    newMessage.appendChild(msg);

    newMessage.setAttribute("class","chatboxleft");

    var messages = document.getElementsByClassName("chatmessages")[0];
    messages.appendChild(newMessage);

    //Empty the text bos
    var message = document.getElementsByClassName("chatbox")[0].value = "";
  }
}
